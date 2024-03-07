import React from "react";
import Conversations from "./Conversations";

const Chat = () => {
  return (
    <div className="py-2 overflow-auto">
      <Conversations />
      <Conversations />
      <Conversations />
      <Conversations />
    </div>
  );
};

export default Chat;
