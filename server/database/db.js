import mongoose from "mongoose"
import dotenv from 'dotenv';

dotenv.config();
const USERNAME=process.env.DB_USERNAME;
const PASSWORD=process.env.DB_PASSWORD;

const DBconnection=async()=>{
    const MONGODB_URI=`mongodb://${USERNAME}:${PASSWORD}@ac-znrgtdu-shard-00-00.6ohy0ix.mongodb.net:27017,ac-znrgtdu-shard-00-01.6ohy0ix.mongodb.net:27017,ac-znrgtdu-shard-00-02.6ohy0ix.mongodb.net:27017/?ssl=true&replicaSet=atlas-auflot-shard-0&authSource=admin&retryWrites=true&w=majority`
    try{
        await mongoose.connect(MONGODB_URI,{useNewUrlParser:true})
        console.log('Database connected succesfully')
    }catch(error){
        console.error('error while connecting with the database',error.message)
    }
}

export default DBconnection;