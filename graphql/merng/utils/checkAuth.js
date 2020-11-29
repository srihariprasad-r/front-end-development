const jwt = require('jsonwebtoken');
const { AuthenticationError } = require('apollo-server');

const { SECRET_KEY } = require('../config');

module.exports = (context) => {
    const authHeader = context.req.headers.authorization;
    if (authHeader) {
        const token = authHeader.split('Bearer ')[1];
        if (token) {
            try {
                const user = jwt.verify(token, SECRET_KEY);
                return user;
            } catch(err) {
                throw new AuthenticationError('Bad credentials', err);
            }
        }
        throw new Error('Authentication should be with \'Bearer [token]');
    }
    throw new Error('Authentication header should be provided');
}