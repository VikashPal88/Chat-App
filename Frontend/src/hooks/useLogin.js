import React, { useState } from "react";
import toast, { LoaderIcon } from "react-hot-toast";
import { useSearchParams } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

function useLogin() {
  const [laoding, setLoading] = useState();
  const { setAuthUser } = useAuthContext();

  const login = async (username, password) => {
    const success = handleInputErrors({ username, password });
    if (!success) return;

    setLoading(true);
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }

      localStorage.setItem("userInfo", JSON.stringify(data));
      setAuthUser(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { laoding, login };
}

export default useLogin;

function handleInputErrors({ username, password }) {
  console.log("hello");
  if (!username || !password) {
    return false;
  }

  return true;
}
