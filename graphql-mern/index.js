const express  = require('express')
const { graphqlHTTP } = require('express-graphql')
const { graphql, buildSchema } = require('graphql')

const db = {
    users: [
        {name: 'A', email: 'random2@email.com'},
        {name: 'V', email: 'random1@email.com'}
    ]
}

const schema = buildSchema(
    `type Query {
        users: [User]
    }

    type Mutation {
        adduser(name: String!, email: String): User
    }
    
    type User {
        name: String!,
        email: String
    }
    `
)

const value = {
    users: () => db.users,
    adduser: ({name, email}) => {
        const user = {
            name : name,
            email: email
        } 
        db.users.push(user)
        return user
    }
}

const app = express()

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: value,
    graphiql: true,
  }))
  

app.listen(2000, () => console.log('Listening at the port 2000'))

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
