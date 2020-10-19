const express = require('express');
const bodyparser = require('body-parser');
const { randomBytes } = require('crypto');
const cors = require('cors');

const app = express();
app.use(bodyparser.json());
app.use(cors());

const commentsbyID = {};

app.get('/posts/:id/comments', (req,res) => {
    res.send(commentsbyID[req.params.id] || []);
});

app.post('/posts/:id/comments', (req,res) => {
    const id = randomBytes(4).toString('hex');
    const { content } = req.body;

    const comments = commentsbyID[req.params.id] || [];

    comments.push({id: id, content});

    commentsbyID[req.params.id] = comments;

    res.status(201).send(commentsbyID[req.params.id]);
});

app.listen(4001, () => {
    console.log('Listening at port 4001')
});