const { ApolloServer } = require('apollo-server');
const gql = require('graphql-tag');
const mongoose = require('mongoose');

const { MONGODB } = require('./config.js');
const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');


const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({req}) => ({req})
});

mongoose
  .connect(MONGODB,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      auth: { authdb: "admin" }
    }
  ).then(() => {
    console.log("DB connected");
    return server.listen({ port: 5000 });
  })
  .then((res) => {
    console.log(`Server running at ${res.url}`);
  })
  .catch((err) => console.error(err));

  mongoose.set('debug', true);