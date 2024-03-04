import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullName: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6, // corrected typo
    },
    gender: {
      type: String,
      required: true,
      enum: ["male", "female"], // corrected typo
    },
    image: {
      type: String,
      default: "",
    }
  }, {
    timestamps: true,    // moved inside the schema object
    versionKey: false    // moved inside the schema object
  });
  



const User = mongoose.model("User" ,userSchema);

export default User;