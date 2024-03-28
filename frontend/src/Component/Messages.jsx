import React, { useEffect } from "react";
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";
import { TiMessages } from "react-icons/ti";
import UseCoversation from "../store/UseConversation";
import { useAuthContext } from "../context/AuthContext";

const Messages = () => {
  const { selectdConvercation, setSelectdConvercation } = UseCoversation();
const {authUser} = useAuthContext()



  // useEffect(() => {
  //   return () => setSelectdConvercation(null);
  // }, []);  

  return (
    <div className="flex flex-col w-full h-full">
      {!selectdConvercation ? (
        <div className="flex items-center justify-center w-full h-full">
          <div className="px-4 text-center sm:text-lg md-text-xl text-gray-00 font-semibold flex flex-col">
            <p>Welcome 👋 {authUser.fullName}</p>
            <p>Select a chat to start messageing </p>
            <TiMessages className="text-3xl md:text-6xl text-center w-full" />
          </div>
        </div>
      ) : (
        <>
          <div className=" px-4 py-2 mb-2 text-left h-24 my-auto border-b-2 border-slate-300 flex items-center text-sm">
            <span className="label-text px-3">To</span>
            <span className="text-gray-900 font-bold">
              {selectdConvercation?.fullName}
            </span>
          </div>
       

          <MessageList />
          <MessageInput />
        </>
      )}
    </div>
  );
};

export default Messages;
