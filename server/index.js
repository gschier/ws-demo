const { WebSocketServer } = require('ws'); // yarn add ws
// import ws from 'ws'; yarn add ws@7
// const WebSocketServer = ws.Server;
const { useServer } = require( 'graphql-ws/lib/use/ws');
const { schema } = require('./schema');

const index = new WebSocketServer({
  port: 4000,
  path: '/graphql',
});

useServer({ schema }, index);

console.log('Listening to port 4000');
