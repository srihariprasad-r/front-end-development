const { UserInputError } = require('apollo-server');
const Post = require('../../models/Post');
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
        }
    }
}