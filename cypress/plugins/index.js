/// <reference types="cypress" />
const io = require('socket.io-client')

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config

  let chatSocket
  let lastMessage

  on('task', {
    connect(name) {
      chatSocket = io('http://localhost:8080')
      chatSocket.emit('username', name)
      chatSocket.on('chat_message', (msg) => {
        lastMessage = msg
        console.log('lastMessage is "%s"', lastMessage)
      })

      return null
    },

    getLastMessage() {
      return lastMessage || null
    },

    say(message) {
      chatSocket.emit('chat_message', message)
      return null
    },

    disconnect() {
      chatSocket.disconnect()
      chatSocket = null
      return null
    },
  })
}
