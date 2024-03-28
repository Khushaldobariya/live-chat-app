import React, { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../../context/AuthContext";

const UseLogin = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const login = async (userName, password) => {
    setLoading(true);
    const success = handelInputErrors({ userName, password });
    if (!success) return;
    try {
      const res = await fetch(`api/auth/login`, {
        method: "POST",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify({
          userName,
          password,
        }),
      });
      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
      if (res.status == 200) {
        localStorage.setItem("user", JSON.stringify(data.user));
        setAuthUser(data.user);
      } else {
      
        toast.error(data.message);
      }
    } catch (error) {
    
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { loading, login };
};

export default UseLogin;

const handelInputErrors = ({ userName, password }) => {
  if (!userName || !password) {
    toast.error("please fill all fields");

    return false;
  }

  return true;
};
