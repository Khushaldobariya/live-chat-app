import mongoose from "mongoose";

const contectTomongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
    console.log("connected to mongoDb");
    } catch (error) {
        console.log("connecting error" ,error.message)
    }
}

export default contectTomongoDB;