import jwt from "jsonwebtoken";

const genrateWebTokenCookies = async (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SCRET, {
    expiresIn: "15d",
  });
  res.cookie("jwt", token, {
    maxAge: 15 * 24 * 60 * 60 * 1000, // 15 dyas after exprey token
    httpOnly: true, //prevent attech assebale cookie
    sameSide:"Strict",
    secure:process.env.NODE_ENV !== "development"
  });
};

export default genrateWebTokenCookies;