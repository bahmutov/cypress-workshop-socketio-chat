# cypress-workshop-socketio-chat
> Testing Socketio chat app using Cypres.io

![Chatting](./images/chat.png)

## Install

Using Node v12+ install dependencies

```shell
$ npm install
```

## Run chat server

```shell
$ npm start
```

Open `localhost:8080`

## Writing tests

1. Install Cypress
2. Scaffold example tests
3. Add Prettier, see [How to configure Prettier and VSCode](https://glebbahmutov.com/blog/configure-prettier-in-vscode/)
4. Test opening the chat and posting a message
5. Add CI
   1. Optional: add Cypress Dashboard recording
6. Test randomly generated user name
7. Use API inside the app to simulate the second user
8. Implement 2nd Socketio connection from the plugins file to the server
   1. check the 2nd user connects
   2. check the 2nd user sends a message
   3. check we can send the message to the 2nd user
   4. check the 2nd user leaves and we are notified
9. **advanced** run two Cypress tests at the same time
10. **advanced** sync two Cypress runners using checkpoints and intermediate Socketio server

## Read

- [Test a Socket.io Chat App using Cypress](https://glebbahmutov.com/blog/test-socketio-chat-using-cypress/)
- [Run Two Cypress Test Runners At The Same Time](https://glebbahmutov.com/blog/run-two-cypress-runners/)

## Attribution

Copied from [bahmutov/cypress-socketio-chat](https://github.com/bahmutov/cypress-socketio-chat) which itself got the chat server from [dkhd/node-group-chat](https://github.com/dkhd/node-group-chat).

## Author

Author: Gleb Bahmutov &lt;gleb.bahmutov@gmail.com&gt; &copy; 2021

- [@bahmutov](https://twitter.com/bahmutov)
- [glebbahmutov.com](https://glebbahmutov.com)
- [blog](https://glebbahmutov.com/blog)
- [videos](https://youtube.com/glebbahmutov)
- [presentations](https://slides.com/bahmutov)

License: MIT - do anything with the code, but don't blame me if it does not work.

Support: if you find any problems with this module, email / tweet /
[open issue](https://github.com/bahmutov/cypress-workshop-socketio-chat/issues) on Github
