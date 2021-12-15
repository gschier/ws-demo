const { GraphQLSchema, GraphQLObjectType, GraphQLString } = require('graphql');

module.exports.schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      hello: {
        type: GraphQLString,
        resolve: () => 'world',
      },
    },
  }),
  subscription: new GraphQLObjectType({
    name: 'Subscription',
    fields: {
      greetings: {
        type: GraphQLString,
        subscribe: async function* () {
          let count = 0;
          while (true) {
            count++;
            console.log("TICK", count);
            // yield { greetings: "hi "+(count++) }; // Will never close
            await new Promise(resolve => setTimeout(resolve, 1000));
          }
        },
      },
    },
  }),
});
