import asyncHandler from 'express-async-handler'; 

// @desc Auth user / set token
// route POST /api/users/auth
// @access public
const authUser = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'auth user' });
});
// @desc register new user
// route POST /api/users
// @access public
const registerUser = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'register user' });
});

// @desc register new user
// route POST /api/users/logout
// @access public
const logoutUser = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'logout user' });
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