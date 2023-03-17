import mongoose from "mongoose";

export const Connection = async (username,password) => {
    mongoose.set('strictQuery', true); 
    const URL = `mongodb://${username}:${password}@ac-aaxwi7y-shard-00-00.lh71yjc.mongodb.net:27017,ac-aaxwi7y-shard-00-01.lh71yjc.mongodb.net:27017,ac-aaxwi7y-shard-00-02.lh71yjc.mongodb.net:27017/?ssl=true&replicaSet=atlas-zymcs3-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
        await mongoose.connect(URL,{useUnifiedTopology: true, useNewUrlParser: true});
        console.log("Database connected Successfully !!");

    }catch(error){
        console.log('Error while connecting with the database ', error.message);
    }
}

export default Connection;