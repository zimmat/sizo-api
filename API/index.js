// import koa from 'koa'
// import koaRouter from 'koa-router'
// import { graphqlKoa}  from 'apollo-server-koa'
const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');

// cons app = new koa();
// const router = new koaRouter();
// const PORT = 3000

// app.use(koaBody())

// router.post('graphql', graphqKoa({
//   schema: myGraphQLSchema
// }))

// router.get('/graphql', graphqlKoa({
//   schema: myGraphQLSchema,
//   endpointURL: '/graphql', // a POST endpoint that GraphiQL will make the actual requests to

// }))

// app.use(router.routes());
// app.use(router.allowedMethods());
// app.listen(PORT);

const resolvers = {
  Query: {
    profiles: () => profiles,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${PORT}`);
});