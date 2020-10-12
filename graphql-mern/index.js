const { graphql, buildSchema } = require('graphql');

const schema = buildSchema(
    `type Query {
        message: String
    }`
)

const value = {
    message:() => 'This is a message for GraphQL testing'
}

graphql(
    schema,
    `
    {
        message
    }`,
    value
).then (console.log) 
.catch (console.error)