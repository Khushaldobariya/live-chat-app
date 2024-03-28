import { useState } from "react";

import toast from "react-hot-toast";
import { useAuthContext } from "../../context/AuthContext";

const useSignup = () => {
  const [lodaing, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const signUp = async ({
    firstName,
    userName,
    gender,
    password,
    confirmPassword,
  }) => {
    const success = handelInputErrors({
      firstName,
      userName,
      gender,
      password,
      confirmPassword,
    });
    if (!success) return;

    setLoading(true);
    try {
      const res = await fetch(`/api/auth/signup`, {
        method: "POST",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify({
          fullName: firstName,
          userName,
          gender,
          password,
          confirmPassword,
        }),
      });
  
      const data = await res.json();

      if (data?.error) {
        throw new Error(data.error);
      }
      if(res.status == 200) {

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
  return { lodaing, signUp };
};

export default useSignup;

const handelInputErrors = ({
  firstName,
  userName,
  gender,
  password,
  confirmPassword,
}) => {
  if (!firstName || !userName || !gender || !password || !confirmPassword) {
    toast.error("please fill all fields");

    return false;
  }
  if (password !== confirmPassword) {
    toast.error("confirm password and confirm password must be same");

    return false;
  }
  return true;
};
