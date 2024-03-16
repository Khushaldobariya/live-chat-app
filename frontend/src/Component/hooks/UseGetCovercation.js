import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const UseGetCovercation = () => {
  const [loading, setLoading] = useState(false);
  const [convercation, setConvercation] = useState([]);

  useEffect(() => {
    const getCovercationUser = async () => {
      try {
        setLoading(true);
        const res = await fetch(`api/user`);
      
        const data = await res.json();
        if (data.error) {
          throw new Error(data.error);
        }
        setConvercation(data.user)
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };
    getCovercationUser()
  }, []);

  return {loading ,convercation};
};

export default UseGetCovercation;
