/// <reference types="cypress" />
describe('Chat', () => {
  it('loads', () => {
    const name = 'cy_' + Cypress._.random(10000)
    cy.visit('/', {
      onBeforeLoad(win) {
        cy.stub(win, 'prompt').returns(name)
      },
    })

    cy.contains('#messages li', name).should('be.visible')
    cy.get('#txt').type('Hello there{enter}')
    cy.contains('#messages li', 'Hello there')
      .should('be.visible')
      .find('strong')
      .should('have.text', name)

    cy.task('connect', 'guest')
    cy.contains('#messages li', 'guest join the chat..').should('exist')
    cy.task('say', 'Nice to meet you')

    cy.contains('#messages li', 'Nice to meet you')
      .should('be.visible')
      .find('strong')
      .should('have.text', 'guest')

    cy.get('#txt').type('Goodbye{enter}')
    cy.contains('#messages li', 'Goodbye').should('be.visible')
    cy.task('getLastMessage').should('include', 'Goodbye').and('include', name)

    cy.task('disconnect')
    cy.contains('#messages li', 'guest left the chat..').contains('🔴')
  })
})
