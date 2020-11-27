const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require("../../models/User");
const { UserInputError } = require('apollo-server');
const { validateRegisterInput, validateLoginTnput } = require('../../utils/validation');

const { SECRET_KEY } = require('../../config');

function generateToken(user) {
    return jwt.sign({
                id: user.id,
                email: user.email,
                username: user.username
            }, SECRET_KEY, 
            {expiresIn: '1h'});
}

module.exports = {
    Mutation: {
        async login(_, {username, password}) {
            const {errors, valid} = validateLoginTnput(username, password);
            const user = await User.findOne({username});
            
            if (!valid) {
              throw new UserInputError("Errors", { errors });
            }
            
            if (!user) {
                errors.general = "User not found";
                throw new UserInputError('User not found', {errors});
            }

            const match = await bcrypt.compare(password, user.password);
            if (!match) {
                errors.general = 'Wrong Credentials';
                throw new UserInputError('Wrong Credentials', {errors});
            }

            const token = generateToken(user);

            return {
                ...user._doc,
                id: user._id,
                token,
            };
        },
        async register(
        _ , 
        {
            registerInput: { username, email, password, confirmpassword}
        }
        ) {
            //Validate data
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

            const token = generateToken(res);

            return {
                ...res._doc,
                id: res._id,
                token
            }
        }
    }
}