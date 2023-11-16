import dotenv from 'dotenv';

dotenv.config();

export default {
    app: {
        PORT: process.env.PORT
    },
    db: {
        MONGO_USER: process.env.MONGO_USER,
        MONGO_PASSWORD: process.env.MONGO_PASSWORD
    }
}