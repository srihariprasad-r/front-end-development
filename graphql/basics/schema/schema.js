const graphql = require('graphql');

const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLInt, GraphQLList } = graphql;

var books = [
    {name: 'Book1', id: '1', genre:'Sci-fi', authorid:'1'},
    {name: 'Book2', id: '2', genre:'Comedy', authorid:'2'}
]


var books = [
    {name: 'Author1', id: '1', age:42},
    {name: 'Author2', id: '2', ager:66}
]

const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: {type: GraphQLString},
        name: {type: GraphQLString},
        genre: {type: GraphQLString},
        author: {
            type: AuthorType,
            resolve(parents, args) {
                return authors.filter(item => item.id === parents.authorid)
            }
        }
    })
});


const AuthorType = new GraphQLObjectType({
    name: 'Author',
    fields: () => ({
        id: {type: GraphQLString},
        name: {type: GraphQLString},
        age: {type: GraphQLInt},
        books: {
            type: new GraphQLList(BookType),
            resolve(parent, args) {
                return books.filter(item => item.authorid === parent.id)
            }
        }
    })
});

const RootQueryType = new GraphQLObjectType({
    name: 'RootQuery',
    fields: {
        book: {
            type: BookType,
            args: {
                id:{type: GraphQLString}
            },
            resolve(parent, args) {
                return books.filter(item => item.id === args.id)
            }
        },
        author: {
            type: AuthorType,
            args: {
                id:{type: GraphQLString}
            },
            resolve(parent, args) {
                return authors.filter(item => item.id === args.id)
            }            
        },
        books: {
            type: new GraphQLList(BookType),
            resolve(parent, args) {
                return books
            }
        },
        authors: {
            type: new GraphQLList(AuthorType),
            resolve(parent, args) {
                return authors
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQueryType
});