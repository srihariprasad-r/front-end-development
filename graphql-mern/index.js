const express  = require('express')
const { graphqlHTTP } = require('express-graphql')
const { graphql, buildSchema } = require('graphql')

const db = {
    users: [
        {name: 'A', email: 'random2@email.com'},
        {name: 'V', email: 'random1@email.com'}
    ],
    messages: [
        {id: '1', userid:"A",  body: 'Hello'},
        {id: '2', userid:"V",  body: 'Hey'},
        {id: '3', userid:"A",  body: 'Hi'},        
    ]
}

const schema = buildSchema(
    `type Query {
        users: [User]
        user(name:String!): User
        messages: [Message!]!
    }

    type Mutation {
        adduser(name: String!, email: String): User
    }
    
    type User {
        name: String!,
        email: String,
        messages: [Message!]!
    }

    type Message {
        id: String!,
        body: String
    }    
    `
)

class User {
    constructor(user){
        Object.assign(this, user)
    }
    messages() {
        return db.messages.filter(message => message.userid === this.name)
    }
}


const value = {
    users: () => db.users.map(user => new User(user)),
    messages : () => db.messages,
    user: args => db.users.find(user => args.name === user.name),
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
