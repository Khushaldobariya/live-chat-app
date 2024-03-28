import React from "react";
import { useAuthContext } from "../context/AuthContext";
import UseCoversation from "../store/UseConversation";
import { extractTime } from "../Utils/extractTime";

const MessageText = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectdConvercation, setSelectdConvercation } = UseCoversation();

const timers = extractTime(message?.createdAt)
  const fromMe =  message?.senderId == authUser?._id;
  const messageSide = fromMe ? "chat chat-end" : "chat chat-start";
  const messageAvatr = fromMe ? authUser.image : selectdConvercation?.image;
  const messageBgColor = fromMe ? "bg-amber-500" : "bg-gray-800";

  return (
    <div className={messageSide}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img alt="" src={messageAvatr} />
        </div>
      </div>
      <div className={`chat-bubble text-white ${messageBgColor}`}>
        {message?.message}
      </div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
        {timers}
      </div>
    </div>
  );
};

export default MessageText;
