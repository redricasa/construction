import express from "express";
import dotenv from 'dotenv';
dotenv.config();
import {notFound, errorHandler} from './middleware/errorMiddleware.js';
import connectDB from "./config/db.js";
const port = process.env.PORT || 5000;
import userRoutes from './routes/userRoutes.js';

connectDB();

const app = express();
// - POST /api/users register a user
// - POST /api/users/auth authenticare a user and get token
// - POST /api/users/logout logout and clear cookie
// - GET /api/users/profile get user profile
// - PUT /api/users/profile update profile
app.use('/api/users', userRoutes);
app.get('/', (req, res) => res.send('Server is ready'));

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
