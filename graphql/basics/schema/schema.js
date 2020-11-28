const graphql = require('graphql');

const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLInt } = graphql;

var books = [
    {name: 'Book1', id: '1', genre:'Sci-fi'},
    {name: 'Book2', id: '2', genre:'Comedy'}
]

const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: {type: GraphQLString},
        name: {type: GraphQLString},
        genre: {type: GraphQLString}
    })
});


const AuthorType = new GraphQLObjectType({
    name: 'Author',
    fields: () => ({
        id: {type: GraphQLString},
        name: {type: GraphQLString},
        age: {type: GraphQLInt}
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
                return books.filter(item => item.id === args.id)
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQueryType
});