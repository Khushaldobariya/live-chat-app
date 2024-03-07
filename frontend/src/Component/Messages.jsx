import React from "react";
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";
import { TiMessages } from "react-icons/ti";

const Messages = () => {
  const newChatSelected = true;
  return (
    <div className="md:min-w-[450px] flex flex-col ">
      {newChatSelected ? (
        <div className="flex items-center justify-center w-full h-full">
          <div className="px-4 text-center sm:text-lg md-text-xl text-gray-00 font-semibold flex flex-col text-white">
            <p>Welcome 👋 jhone Marke</p>
            <p>Select a chat to start messageing </p>
            <TiMessages className="text-3xl md:text-6xl text-center w-full" />
          </div>
        </div>
      ) : (
        <>
          <div className="bg-slate-500 px-4 py-2 mb-2">
            <span className="label-text px-3 text-white">To</span>
            <span className="text-gray-900 font-bold">Jhon Marke</span>
          </div>
          <MessageList />
          <MessageInput />
        </>
      )}
    </div>
  );
};

export default Messages;
