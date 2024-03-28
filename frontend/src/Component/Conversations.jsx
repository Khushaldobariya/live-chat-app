import React from "react";
import UseCoversation from "../store/UseConversation";
import { useSoketContext } from "../context/sokectContext";

const Conversations = ({ convercation, emoji, lastIndex }) => {
  const { selectdConvercation, setSelectdConvercation } = UseCoversation();
  const { online } = useSoketContext();



  const isSelected = selectdConvercation?._id == convercation._id;
  const isOnline = online.includes(convercation._id);

  return (
    <>
      <div
        className="flex items-center hover:bg-gray-200 rounded p-2 py-1 cursor-pointer gap-2 " style={{background:isSelected? "#978cdd":"" }}
        onClick={() => setSelectdConvercation(convercation)}
      >
        <div className={`avatar ${isOnline ? "online" : ""}`}>
          <div className="w-12 rounded-full">
            <img src={convercation.image} />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className={`font-bold ${!isSelected ?"text-gray-800 ": "text-white"} `}>{convercation.fullName}</p>
            <span className="text-xl">{emoji}</span>
          </div>
        </div>
      </div>
      {!lastIndex && <div className="divider my-0 h-1  divide-slate-800" />}
    </>
  );
};

export default Conversations;
