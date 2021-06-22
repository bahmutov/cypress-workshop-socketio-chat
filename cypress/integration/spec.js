/// <reference types="cypress" />
describe('Chat', () => {
  it('loads', () => {
    cy.visit('/', {
      onBeforeLoad(win) {
        cy.stub(win, 'prompt').returns('Cy')
      },
    })

    cy.contains('#messages li', 'Cy').should('be.visible')
    cy.get('#txt').type('Hello there{enter}')
    cy.contains('#messages li', 'Hello there')
      .should('be.visible')
      .find('strong')
      .should('have.text', 'Cy')
  })
})
