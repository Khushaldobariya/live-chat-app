import React, { useState } from "react";
import toast from "react-hot-toast";
import UseCoversation from "../../store/UseConversation";

const UseSendMessage = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectdConvercation, setSelectdConvercation } =
    UseCoversation();

  const sendMessage = async (message) => {
    setLoading(true);
    try {
      const res = await fetch(`api/message/sendMessage/${selectdConvercation?._id}`, {
        method: "POST",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify({message}),
      });
      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
      setMessages([...messages, data]);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, sendMessage };
};

export default UseSendMessage;
