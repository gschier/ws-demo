const { Server } = require('ws');
const { ApolloServer } = require('apollo-server-koa');
const { useServer } = require('graphql-ws/lib/use/ws');
const { schema } = require('./schema');
const Koa = require('koa');
const http = require('http');

const app = new Koa();
app.proxy = true;

const server = new ApolloServer({ schema });

const httpServer = http.createServer(app.callback());

const wsServer = new Server({
  server: httpServer,
  path: '/graphql',
});

useServer({
  schema,
  onComplete: ctx => {
    console.log('COMPLETE');
  },
}, wsServer);

server.applyMiddleware({ app });

const appServer = httpServer.listen(4000, () => {
  console.log('Listening to port', appServer.address());
});
