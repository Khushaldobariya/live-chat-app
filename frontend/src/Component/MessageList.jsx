import React, { useEffect, useRef } from "react";
import MessageText from "./MessageText";
import UseGetMessage from "./hooks/UseGetMessage";
import MessageSkeleton from "../Utils/MessageSkeleton";
import UseListionMessages from "./hooks/UseListionMessages";

const MessageList = () => {
  const { loading, messages } = UseGetMessage();
UseListionMessages()
  const lastMessageRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      lastMessageRef?.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [messages]);

  return (
    <div className="px-4 flex-1 overflow-auto h-full">
      {loading ? (
        [...Array(3)].map((_, ids) => <MessageSkeleton key={ids} />)
      ) : !loading && messages?.length == 0 ? (
        <p className="text-center"> Send a message to start the chat</p>
      ) : (
        messages?.length > 0 &&
        messages.map((data, id) => {

          return (
            <div key={data._id} ref={lastMessageRef}>
              <MessageText message={data} />
            </div>
          );
        })
      )}
    </div>
  );
};

export default MessageList;
{
  /* <MessageText />
          <MessageText />
          <MessageText />
          <MessageText /> */
}
