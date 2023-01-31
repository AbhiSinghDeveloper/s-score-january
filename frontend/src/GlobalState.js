import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import FormaAPI from "./api/FormaAPI";
import FormbAPI from "./api/FormbAPI";
import FormcAPI from "./api/FormcAPI";

export const GlobalState = createContext();

export const DataProvider = ({ children }) => {
  const [token, setToken] = useState(false);
  const [id, setId] = useState("");
  const [isLoggedIn, setLogin] = useState(false);
  const [role, setRole] = useState(false);
  const [profileInfo, setProfileInfo] = useState();

  useEffect(() => {
    const loginStatus = localStorage.getItem("loginStatus");
    if (loginStatus) {
      setToken(localStorage.getItem("token"));
      setLogin(true);
      setRole(localStorage.getItem("role"));
      setId(localStorage.getItem("userId"));
    }
  }, []);

  useEffect(async () => {
    if (isLoggedIn) {
      try {
        await axios
          .get("http://localhost:5000/user/infor/" + id)
          .then((res) => {
            setId(res.data);
            console.log(res.data);
          });
      } catch (error) {
        console.log(error);
      }
    }
  }, [profileInfo]);

  console.log(token);
  console.log(isLoggedIn);
  console.log(role);
  console.log(id);

  const state = {
    token: [token, setToken],
    isLoggedIn: [isLoggedIn, setLogin],
    role: [role, setRole],
    profileInfo: [profileInfo, setProfileInfo],
    userId: [id, setId],
    formA: FormaAPI,
    formB: FormbAPI,
    formC: FormcAPI,
  };

  return <GlobalState.Provider value={state}>{children}</GlobalState.Provider>;
};