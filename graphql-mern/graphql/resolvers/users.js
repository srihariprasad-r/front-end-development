const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require("../../models/User");
const { UserInputError } = require('apollo-server');
const { validateRegisterInput } = require('../../utils/validation');

const { SECRET_KEY } = require('../../config');

module.exports = {
    Mutation: {
        async register(
        _ , 
        {
            registerInput: { username, email, password, confirmpassword}
        }
        ) {
            //TODO: Validate data
            const { valid, errors } = validateRegisterInput(
              username,
              email,
              password,
              confirmpassword
            );
            if (!valid) {
                throw new UserInputError('Errors', { errors});
            }
            //TODO: User doesn't exist
            const userexists = User.findOne({username});

            if (userexists) {
                throw new UserInputError('User name exists', {
                    errors: {
                        username: 'This username exists'
                    }
                })
            }
            //Hash password and create token
            password = await bcrypt.hash(password, 12);

            const newUser = new User({
                email,
                username,
                password,
                createdAt: new Date().toISOString()
            });

            const res = await newUser.save();

            const token = jwt.sign({
                id: res.id,
                email: res.email,
                username: res.username
            }, SECRET_KEY, {expiresIn: '1h'});

            return {
                ...res._doc,
                id: res._id,
                token
            }
        }
    }
}