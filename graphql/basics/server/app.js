const express = require('express');
const { graphqlHTTP }  = require('express-graphql');

const graphschema = require('../schema/schema');

const app = express();

app.use('/graphql', graphqlHTTP({
    schema: graphschema,
    graphiql: true    
}));


app.listen(5000, () => {
    console.log('Server listening for requests on port 5000!')
});