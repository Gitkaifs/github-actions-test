import mongoose from 'mongoose';

const connectDB = async () => {
  await mongoose.connect(
    process.env.MONGO_URI ||
      'mongodb://kaif:kaif@localhost:27017/crud_practice?authSource=admin'
  );

  console.log('DB connected successfully...');
};

export default connectDB;