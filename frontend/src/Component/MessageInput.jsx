import React from "react";
import { BsSend } from "react-icons/bs";

const MessageInput = () => {
  return (
    <from className="px-4 my-3">
      <div className="w-full relative">
        <input
          className="border text-sm rounded-lg w-full p-3 block bg-gray-700 border-gray-700 text-white"
          type="text"
          placeholder="enter a message"
        />
        <buuton type="submit" className="btn absolute items-center p-3 inset-y-0 end-0 flex btn-neutral">
        <BsSend />
        </buuton>
      </div>
    </from>
  );
};

export default MessageInput;