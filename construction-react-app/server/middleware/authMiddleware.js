import jwt from 'jsonwebtoken'
import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js';
// import Inventory from '../models/inventoryModel.js';



const protect = asyncHandler(async (req, res, next) => {
    let token;
    token = req.cookies.jwt;

    if (token) {
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            // console.log('Decoded Token: --->>', decoded);
            req.user = await User.findById(decoded.userId)
            .select('-password');// -password makes sure that the hashed password isn't returned
            // console.log('User data --->>', req.user);
            next();
        } catch (error) {
            res.status(401).json({ error: 'Not authorized, token exists but is invalid' });
            throw new Error('Not authorized, token exists but is invalid')
        }
    } else {
        res.status(401).json({ error: 'Not authorized - no token' });
        throw new Error('Not authorized - no token')
    }
});

export {protect};