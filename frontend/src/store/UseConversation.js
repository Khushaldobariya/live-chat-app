import { create } from "zustand";

const UseCoversation = create((set) => ({
  selectdConvercation: null,
  setSelectdConvercation: (selectdConvercation) => set({selectdConvercation}),
  messages: [],
  setMessages:( messages) => set({messages}) 
}));

export default UseCoversation;
