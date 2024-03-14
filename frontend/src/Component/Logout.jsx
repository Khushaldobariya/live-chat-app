import React from "react";
import { BiLogOut } from "react-icons/bi";
import UseLogout from "./hooks/UseLogout";

const Logout = () => {
  const { loading, logout } = UseLogout();

   return (
    <div className="mx-auto">
    
      {loading ? (
        <span className="loading loading-spinner text-accent"></span>
      ) : (
        <BiLogOut className="w-6 h-6 text-white cursor-pointer" onClick={logout}/>
      )}
    </div>
  );
};

export default Logout;
