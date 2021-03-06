const express = require('express');
const bodyparser = require('body-parser');
const { randomBytes } = require('crypto');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(bodyparser.json());
app.use(cors());

const commentsbyID = {};

app.get('/posts/:id/comments', async (req,res) => {
    res.send(commentsbyID[req.params.id] || []);
});

app.post('/posts/:id/comments', (req,res) => {
    const id = randomBytes(4).toString('hex');
    const { content } = req.body;

    const comments = commentsbyID[req.params.id] || [];

    comments.push({id: id, content});

    commentsbyID[req.params.id] = comments;

    await axios.post('http://localhost:4005/events', {
        type: 'Commentcreated',
        data: {
            id: id,
            content,
            postID: req.params.id
        }
    });

    res.status(201).send(commentsbyID[req.params.id]);
});

app.post('/events', (req, res) => {
    console.log('Event received from port 4005', req.body.type);
    res.send({});
});

app.listen(4001, () => {
    console.log('Listening at port 4001')
});