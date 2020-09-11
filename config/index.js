import dotenv from 'dotenv';

dotenv.config();

const port = process.env.API_PORT;
const mongoURI = process.env.MONGODB_URI;
const secret = process.env.JWT_SECRET;

export { port, mongoURI, secret };
