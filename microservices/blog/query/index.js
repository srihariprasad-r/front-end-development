const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyparser.json());
app.use(cors());

const posts = {};

app.get('/posts', (req, res) => {
    res.send(posts);
});


app.post('/events', (req, res) => {
    const {type, data} = req.body;

    if (type === 'PostCreated' ) {
        const {id, title} = data;

        posts[id] = {id, title, comment: []};
    }

    if (type === 'CommentCreated') {
        const {id, content, postID} = data;
        const post = posts[postID];
        post.comment.push({id, content});
    };
    res.send({});
});

app.listen(4002,()=>{
    console.log('Listening at 4002');
});