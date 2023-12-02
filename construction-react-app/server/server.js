import express from "express";
import dotenv from 'dotenv';
dotenv.config();
import cookieParser from "cookie-parser";
import {notFound, errorHandler} from './middleware/errorMiddleware.js';
import connectDB from "./config/db.js";
const port = process.env.PORT || 5000;
import userRoutes from './routes/userRoutes.js';
import inventoryRoutes from './routes/inventoryRoutes.js'
import { protect } from './middleware/authMiddleware.js'


connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());
app.use(protect); // TODO ---------- 'Inventory validation failed'
// - POST /api/users register a user
// - POST /api/users/auth authenticare a user and get token
// - POST /api/users/logout logout and clear cookie
// - GET /api/users/profile get user profile
// - PUT /api/users/profile update profile
app.use('/api/users', userRoutes);
// - POST /api/inventory/create create a material/tool
// - GET /api/inventory/:id get a material/tool by id
// - PUT /api/inventory/:id/update update a material/tool after getting it by id
// -  GET /api/inventory/get  get all inventory entered by logged in user
app.use('/api/inventory', inventoryRoutes);
app.get('/', (req, res) => res.send(`Server is ready on port ${port}`));

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
