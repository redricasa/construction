import jwt from 'jsonwebtoken'
import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js';

// makes sure to check token(logged in) to GET and PUT profiles
const protect = asyncHandler(async (req, res, next) => {
    let token;
    token = req.cookies.jwt;

    if (token) {
        try {
            // console.log("Before Token Verification:", token);
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            // console.log("After Token Verification:", decoded);// Log the decoded object
            
            req.user = await User.findById(decoded.userId).select('-password');
            next();
        } catch (error) {
            // console.error("Error during token verification:", error);
            res.status(401)
            throw new Error('Not authorized, invalid token')
        }
    } else {
        res.status(401)
        throw new Error('Not authorized - no token')
    }
});

export {protect};