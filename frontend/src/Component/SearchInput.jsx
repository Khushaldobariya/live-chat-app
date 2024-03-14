import React, { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import UseGetCovercation from "./hooks/UseGetCovercation";
import UseCoversation from "../store/UseConversation";

const SearchInput = () => {

  const [search ,setSearch] =useState("")
  const {convercation} =UseGetCovercation()
  const {setSelectdConvercation}=UseCoversation()

const handleSearch = (e) => {
  e.preventDefault();
  if(search.length < 0){
    toast.error("Please enter a user name")
  }
  const findUser = convercation.find((user) => user.fullName.toLowerCase().includes(search.toLowerCase()))
  console.log('findUser', findUser)
  if(convercation){
    setSelectdConvercation(findUser)
    setSearch("")
  } else {
    toast.error("Not found user")
    setSearch("")
  }
}


  return (
    <form className="flex items-center gap-2" onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Type here"
        className="input input-bordered w-full max-w-xs"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit" className="btn  btn-circle bg-sky-500 text-white border-none" disabled={!search}>
        <IoSearchSharp  className="w-6 h-6 outline-none" />
      </button>
    </form>
  );
};

export default SearchInput;
