import React, { useState } from "react";
import { useAuthContext } from "../../context/AuthContext";

const UseLogout = () => {
  const [loading, setLoding] = useState();

  const { setAuthUser } = useAuthContext();
  const logout = async () => {

    setLoding(true);
    try {
      const res = await fetch(`api/auth/logout`, {
        method: "POST",
        headers: { "content-Type": "application/json" },
      });
      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
      localStorage.removeItem("user");
      setAuthUser(null);
    } catch (error) {
    } finally {
      setLoding(false);
    }
  };

  return {loading ,logout}
};

export default UseLogout;
