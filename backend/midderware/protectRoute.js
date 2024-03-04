import jwt from "jsonwebtoken";
import User from "../Auth/user.model.js";

const protectRouts = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (!token) {
      return res.status(401).json({ message: "unauthorized access" });
    }
    const decoded = jwt.verify(token, process.env.JWT_SCRET);
    if (!decoded) {
      return res.status(401).json({ message: "unauthorized access" });
    }
    const user = await User.findById(decoded.userId).select("-password");
    if (!user) {
      return res.status(400).json({ message: "user not found" });
    }
    req.user = user;

  
    next();
  } catch (error) {
    console.log("error in protact middleware Router", error.message);
    res.cookies(500).json({ error: "Internal Server Error" });
  }
};

export default protectRouts;
