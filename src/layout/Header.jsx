import React from "react";
import logo from "../images/pomodoro-logo.png";
import { showSettings } from "../redux/buttons";
import { useDispatch } from "react-redux";

const Header = () => {
  const dispatch = useDispatch()
  return (
    <div className="Header position-relative">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center position-absolute top-50 start-50 translate-middle Header__nav">
        <div className="d-flex align-items-center">
          <img className="Header__logo__img" src={logo} alt="Logo/img" />
          <span className="h2 ms-3">Pomodoro</span>
        </div>
        <div className="">
            <button onClick={()=>dispatch(showSettings(1))} className="Header__setting_btn"><i className="fa-solid fa-gear me-2"></i>Settings</button>
        </div>

        </div>
      </div>
    </div>
  );
};

export default Header;
