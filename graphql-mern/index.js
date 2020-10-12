const { graphql, buildSchema } = require('graphql');

const db = {
    usr: [
        {name: 'A', email: 'random2@email.com'},
        {name: 'V', email: 'random1@email.com'}
    ]
}

const schema = buildSchema(
    `type Query {
        users: [User!]!
    }
    
    type User {
        name: String!,
        email: String
    }
    `
)

const value = {
    users :() => db.usr
}

graphql(
    schema,
    `
    {
        users {
            email
        }
    }`,
    value
).then (res => console.dir(res, {depth: null})) 
.catch (console.error)