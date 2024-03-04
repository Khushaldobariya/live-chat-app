import User from "../Auth/user.model.js";

export const getUserList = async (req, res) => {
  try {
    const loginUserId = req.user._id;

    const allUser = await User.find({ _id: { $ne: loginUserId } }).select("-password")

    res
      .status(200)
      .json({ message: "Get User List successfully", user: allUser });
  } catch (error) {
    console.log("error", error.message);
    res.status(500).json({ message: error.message });
  }
};
