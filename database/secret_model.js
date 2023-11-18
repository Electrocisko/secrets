import mongoose from "mongoose";

const {Schema, model} = mongoose;

const secretSchema = new Schema({
    secret: String,
});

export const Secret = model('secret', secretSchema);