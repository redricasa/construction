import asyncHandler from 'express-async-handler'; 

// @desc Auth user / set token
// route POST /api/users/auth
// @access public
const authUser = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'testing' })
});

export {
    authUser


}