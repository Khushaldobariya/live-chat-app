import React from "react";
import UseCoversation from "../store/UseConversation";

const Conversations = ({ convercation,emoji, lastIndex  }) => {
  const { selectdConvercation, setSelectdConvercation } = UseCoversation();

  const isSelected = selectdConvercation?._id == convercation._id;
 
  return (
    <>
      <div
        className={`flex items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer gap-2 ${
          isSelected ? "bg-rose-700" : ""
        }`}
        onClick={() =>setSelectdConvercation(convercation) }
      >
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img src={convercation.image} />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-bold text-gray-200">{convercation.fullName}</p>
            <span className='text-xl'>{emoji}</span>
          </div>
        </div>
      </div>
      {!lastIndex && <div className="divider my-0 h-1  divider-success" />}
    </>
  );
};

export default Conversations;
