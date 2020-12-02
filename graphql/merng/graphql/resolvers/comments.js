const { UserInputError, AuthenticationError } = require('apollo-server');
const Post = require('../../models/Post');
const User = require('../../models/User');
const checkAuth = require('../../utils/checkAuth');

module.exports = {
    Mutation: {
        async createComment(_, { postId, body}, context){
            const { username } = checkAuth(context);
            if (body.trim() === '') {
                throw new UserInputError('Required a body', {
                    errors: {
                        body: 'Body must be provided!'
                    }
                })
            }
            const post = await Post.findById(postId);
            if (post) {
                post.comments.unshift({
                    body,
                    username,
                    createdAt: new Date().toISOString()
                });
                await post.save();
                return post;
            } else {
                throw new UserInputError('Comment failed to be added');
            }
        },
        async deleteComment(_ , { postId, commentId}, context) {
            const { username } = checkAuth(context);
            const post = await Post.findById(postId);
            if (post) {
                commentidx = post.comments.findIndex(c=> c.id === commentId);
                if (post.comments[commentidx].username === username) {
                    post.comments.splice(commentidx, 1);
                    await post.save();
                    return post;
                } else {
                    throw new AuthenticationError('Not authorized to remove this comment');
                }
            } else {
                throw new UserInputError('Post not found!');
            }
        }
    }
}