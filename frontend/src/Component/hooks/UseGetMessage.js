import React, { useEffect, useState } from "react";
import UseCoversation from "../../store/UseConversation";
import toast from "react-hot-toast";

const UseGetMessage = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectdConvercation, setSelectdConvercation } =
    UseCoversation();
  useEffect(() => {
    const getMessage = async () => {
      setLoading(true);
      try {
        const res = await fetch(`api/message/${selectdConvercation?._id}`, {
          method: "GET",
          headers: { "content-Type": "application/json" },
        });
        const data = await res.json();
       
        if (data.error) {
          throw new Error(data.error);
        }
     
        setMessages(data?.message);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };
    selectdConvercation?._id && getMessage();
  }, [selectdConvercation?._id, setMessages]);
  return { loading, messages };
};

export default UseGetMessage;
