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
          className="input input-bordered w-full max-w-full border rounded-full bg-white"
          type="text"
          placeholder="enter a message"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
        <button
          type="submit"
          className="absolute items-center p-3 inset-y-0 end-0 flex "
          disabled={!message || loading }
        >
          {loading ? (
            <span class="loading loading-spinner text-accent"></span>
          ) : (
            <BsSend className="text-black" />
          )}
        </button>
      </div>
    </form>
  );
};

export default MessageInput;
