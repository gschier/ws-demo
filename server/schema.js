const { GraphQLSchema, GraphQLObjectType, GraphQLString } = require('graphql');

/**
 * Construct a GraphQL schema and define the necessary resolvers.
 *
 * type Query {
 *   hello: String
 * }
 * type Subscription {
 *   greetings: String
 * }
 */
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
            console.log("TICK", count);
            yield { greetings: "hi "+(count++) };
            await new Promise(resolve => setTimeout(resolve, 1000));
          }
        },
      },
    },
  }),
});
