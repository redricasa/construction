import express from 'express';
import { authUser, 
    registerUser,
    logoutUser,
    updateUserprofile,
    getUserprofile } from '../controllers/userController.js';
const router = express.Router();

router.post('/', authUser);
router.post('/auth', authUser);
router.post('/logout', logoutUser);
router.route('/profile').get(getUserprofile).put(updateUserprofile);


export default router;