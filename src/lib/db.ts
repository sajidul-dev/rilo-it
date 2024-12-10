import mongoose from "mongoose";

const connectDb = async () => {
  try {
    if (mongoose.connection.readyState === 1) {
      return mongoose.connection.asPromise();
    }

    // Type assertion to assure TypeScript that the value is a string
    return mongoose.connect(process.env.MONGODB_URI as string);
  } catch (error) {
    console.log(error);
  }
};

export default connectDb;
