import mongoose from "mongoose";
import dotenv_config from "../config/dotenv_config.js";

const MONGO_USER = dotenv_config.db.MONGO_USER;
const MONGO_PASSWORD = dotenv_config.db.MONGO_PASSWORD;
const MONGO_URI = `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@cluster0.rvl2uyz.mongodb.net/secrets-udemy?retryWrites=true&w=majority`;

const connection = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('MongoDB Conected');
  } catch (error) {
    console.log(error);
    //throw new Error("Does no have connect to MongoDB-Atlas")
  }
};

export default connection;
