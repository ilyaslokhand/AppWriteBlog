import React from "react";
import { useDispatch } from "react-redux";
import authservice from "../../AppWrite/Auth";
import { logout } from "../../Store/AuthSlice";

const LogoutBtn = () => {
  const Dispatch = useDispatch();

  const LogoutHandler = () => {
    authservice.Logout().then(() => {
      Dispatch(logout());
    });
  };

  return (
    <button
      className="inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
      onClick={LogoutHandler}
    >
      Logout
    </button>
  );
};

export default LogoutBtn;
