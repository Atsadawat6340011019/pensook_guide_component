import React from "react";
import { login, logout } from "../../store/userSlice";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "@mui/material";
const Boat2 = () => {
  const dispatch = useDispatch();

  const user = {
    username: "boat",
    password: "123",
  };

  const handleLogin = () => {
    dispatch(login(user));
  };
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <div>
      <h1>Component 2</h1>
      <br />
      <Button onClick={handleLogin}>Login</Button>
      <Button onClick={handleLogout}>Logout</Button>
    </div>
  );
};

export default Boat2;
