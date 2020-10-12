const express  = require('express')
const { graphqlHTTP } = require('express-graphql')
const { graphql, buildSchema } = require('graphql')

const app = express()

app.listen(2000, () => console.log('Listening at the port 2000'))

const db = {
    users: [
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
    users:() => db.users
}

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true,    
    value  
}))

/** 
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
*/
