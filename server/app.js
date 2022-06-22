const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://dasboot:1598mc7121@cluster0.flpq3.mongodb.net/?retryWrites=true&w=majority')
mongoose.connection.once('open', () => {
    console.log('Connected to db')
})

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log('Listening on port 4000')
});