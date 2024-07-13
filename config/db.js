import mongoose from 'mongoose'
import dotenv from 'dotenv'
import colors from 'colors'
dotenv.config()

const connectDB=async ()=>{
    try{
        const conn=await mongoose.connect(process.env.MONGO_URL)
        console.log(`Connected to MongoDB ${conn.connection.host}`.bgGreen)
    }
    catch(err){
        console.log(`error in mongoDB ${err}`.bgRed.white)
    }
}

export default connectDB