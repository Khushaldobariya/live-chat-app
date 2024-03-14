import React, { useState } from "react";
import { BsSend } from "react-icons/bs";
import UseSendMessage from "./hooks/UseSendMessage";

const MessageInput = () => {
  const [message, setMessage] = useState("");
  const { loading, sendMessage } = UseSendMessage();

  const handleSendMessages = async (e) => {
    console.log('message', message)
    
    e.preventDefault();
    if (!message) return;
 await sendMessage(message);
    setMessage("");
  };

  

  return (


    
    <form className="px-4 my-3" onSubmit={handleSendMessages}>
      <div className="w-full relative">
        <input
          className="border text-sm rounded-lg w-full p-3 block bg-gray-700 border-gray-700 text-white"
          type="text"
          placeholder="enter a message"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
        <button
          type="submit"
          className="btn absolute items-center p-3 inset-y-0 end-0 flex btn-neutral"
          disabled={!message || loading }
        >
          {loading ? (
            <span class="loading loading-spinner text-accent"></span>
          ) : (
            <BsSend />
          )}
        </button>
      </div>
    </form>
  );
};

export default MessageInput;
