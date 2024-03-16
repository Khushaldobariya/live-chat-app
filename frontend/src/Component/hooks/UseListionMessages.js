import { useEffect } from "react";
import { useSoketContext } from "../../context/sokectContext";
import UseCoversation from "../../store/UseConversation";
import notification from "../../assets/sound/notification.mp3"

const UseListionMessages = () => {
  const { socket } = useSoketContext();
  const { messages, setMessages } = UseCoversation();


  useEffect(() => {
    socket?.on("newMessage", (newMessage) => {
const sound = new Audio(notification)
sound.play()
      setMessages([...messages , newMessage]);
    });
    return () => socket?.off("newMessage");
  }, [socket ,messages ,setMessages]);
};

export default UseListionMessages;
