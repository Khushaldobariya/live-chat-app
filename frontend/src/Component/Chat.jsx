import React from "react";
import Conversations from "./Conversations";
import UseGetCovercation from "./hooks/UseGetCovercation";
import { getRandomEmoji } from "../Utils/emojis";

const Chat = () => {
  const { loading, convercation } = UseGetCovercation();

  return (
    <div className="py-2 overflow-auto">
      {loading ? (
        <span class="loading loading-spinner text-accent"></span>
      ) : (
        convercation?.map((data, i) => {
          return (
            <Conversations
              key={data._id}
              convercation={data}
              emoji={getRandomEmoji()}
              lastIndex={i === convercation?.length - 1}
            />
          );
        })
      )}
    </div>
  );
};

export default Chat;
