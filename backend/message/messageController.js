import User from "../Auth/user.model.js";
import Chat from "../Chat/chatModel.js";
import Message from "./messageModel.js";

export const sendMessage = async (req, res) => {
  try {
    const { id: receiverId } = req.params;
    const { message } = req.body;
    const senderId = req.user._id;

    let findChat = await Chat.findOne({
      participent: { $all: [senderId, receiverId] },
    });
    if (!findChat) {
      findChat = await Chat.create({
        participent: [senderId, receiverId],
      });
    }
    const newMessage = new Message({ senderId, message, receiverId });

    if (newMessage) {
      findChat.message.push(newMessage._id);
    }

    // socket io

    await Promise.all([findChat.save(), newMessage.save()]); // save message and chat using promise

    res.status(200).json(newMessage);
  } catch (error) {
    console.log("error", error.message);
    res.status(500).json({ message: error.message });
  }
};

export const getMessage = async (req, res) => {
  try {
    const { id: userToChat } = req.params;
    const senderId = req.user?._id;

    const findChat = await Chat.findOne({
      participent: { $all: [senderId, userToChat] },
    }).populate("message");

    if (findChat?.message?.length > 0) {
      res.status(200).json({ message: findChat?.message });
    } else {
      res.status(200).json({ message: [] });
    }
  } catch (error) {
    console.log("error", error.message);
    res.status(500).json({ message: error.message });
  }
};

