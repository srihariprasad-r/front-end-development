const { ApolloServer } = require('apollo-server');
const gql = require('graphql-tag');
const mongoose = require('mongoose');

const { MONGODB } = require('./nodemon.js');
const Post = require('./models/Post');

const typeDefs = gql`
  type Post {
    id: ID!,
    body: String!,
    username: String!,
    createdAt: String!
  }
  type Query {
    getPosts: [Post]
  }
`;

const resolvers = {
    Query : {
        async getPosts() {
            try {
                const posts = await Post.find();
                return posts;
            }catch(err) {
                throw new Error(err);
            }
        }
    }
};

const server = new ApolloServer({
    typeDefs,
    resolvers
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