import asyncHandler from 'express-async-handler'; 
import generateToken from '../utils/generateToken.js';
import User from '../models/userModel.js';

// @desc Auth user / set token
// route POST /api/users/auth
// @access public
const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({email})

    if (user ) {
        generateToken(res, user._id)
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email:user.email
        }); 
    } else {
        res.status(401);
        throw new Error('Invalid email or password');
    }
});
// @desc register new user
// route POST /api/users
// @access public
const registerUser = asyncHandler(async (req, res) => {
    const {name, email, password } = req.body;
    const userExists = await User.findOne({email});

    if (userExists) {
        res.status(400);
        throw new Error('User already exists');
    }

    const user = await User.create({
        name,
        email,
        password
    });

    if (user) {
        generateToken(res, user._id)
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email:user.email
        }); 
    } else {
        res.status(400);
        throw new Error('Invalid user data');
    }
    
});

// @desc logout user by deleting jwt
// route POST /api/users/logout
// @access public
const logoutUser = asyncHandler(async (req, res) => {
    res.cookie('jwt', '', {
        httpOnly: true,
        expires: new Date(0)
    })
    res.status(200).json({ message: 'user logged out' });
});

// @desc get user profile
// route GET /api/users/profile
// @access private
const getUserprofile = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'user profile' });
});

// @desc update user profile
// route PUT /api/users/profile
// @access private
const updateUserprofile = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'UPDATE user profile' });
});


export {
    authUser,
    registerUser,
    logoutUser,
    updateUserprofile,
    getUserprofile
}