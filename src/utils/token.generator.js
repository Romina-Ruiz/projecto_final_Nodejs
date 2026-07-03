import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const generateToken = (userData) => {
    const payload = {
        id: userData.id
    };
    console.log('token.generator JWT_SECRET=', process.env.JWT_SECRET);
    return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
};