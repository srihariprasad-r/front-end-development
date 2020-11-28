const graphql = require('graphql');

const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;

const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: {type: GraphQLString},
        name: {type: GraphQLString},
        genre: {type: GraphQLString}
    })
});

const RootQueryType = new GraphQLObjectType({
    name: 'RootQuery',
    fields: {
        books: {
            type: BookType,
            args: {
                id:{type: GraphQLString}
            },
            resolve(parent, args) {

            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQueryType
});