import genrateWebTokenCookies from "../utils/genrateWebToken.js";
import User from "./user.model.js";
import bcrypt from "bcryptjs";

export const userSignUp = async (req, res) => {
  try {
    const { fullName, userName, password, confirmPassword, gender, image } =
      req.body;
    if (password !== confirmPassword) {
      res.status(400).json({ message: "Password dose not matched!" });
    }
    const user = await User.findOne({ userName });
    if (user) {
      res.status(400).json({ message: "User already exists" });
    }

    //hash password

    const salt = await bcrypt.genSalt();
    const hashpassword = await bcrypt.hash(password, salt);

    const boyProfilePic = "https://avatar.iran.liara.run/public/boy";
    const girlProfilePic = "https://avatar.iran.liara.run/public/girl";
    const newUser = new User({
      fullName,
      userName,
      password: hashpassword,
      gender,
      image: gender == "male" ? boyProfilePic : girlProfilePic,
    });

    if (newUser) {
      genrateWebTokenCookies(newUser?._id, res);

      await newUser.save();
      res.status(200).json({ newUser, message: "User create Successfully.." });
    }
  } catch (error) {
    console.log("error", error.message);
    res.status(500).json({ message: error.message });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { userName, password } = req.body;
    if (!req.body.userName || !req.body.password) {
      res.status(400).json({ message: "Inavlid User Detalis" });
    } 
    const user = await User.findOne({ userName });
    
    const isComaprePassword = await bcrypt.compare(
      password,
      user.password || ""
      );
      if (!user || !isComaprePassword) {
        res
        .status(400)
        .json(
          { message:"Inavlid User Detalis "}
          );
        }
    genrateWebTokenCookies(user._id ,res)
    res.status(200).json({message :`${user.userName} user Login Successfully` ,user})
  } catch (error) {
    console.log("error", error.message);
    res.status(500).json({ message: error.message });
  }
};


export const logoutUser = async (req,res) => {
  try {
    res.cookie("jwt" ,"0",{maxAge:0})
    res.status(200).json({message:"user Logout successfully"})
  } catch (error) {
    console.log("error", error.message);
    res.status(500).json({ message: error.message });
  }
}
