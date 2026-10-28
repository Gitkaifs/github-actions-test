import mongoose from "mongoose";
const connectDB = async()=>{
    try {
        await mongoose.connect('mongodb://kaif:kaif@localhost:27017/crud_practice?authSource=admin')
        console.log('DB connected successfully...')
    } catch (error) {
        console.log(error)
        
    }
}
export default connectDB
