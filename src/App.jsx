import Header from "./layout/Header";
import Main from "./layout/Main";
import Settings from "./layout/components/Settings";
import { showSettings } from "./redux/buttons";
import { useDispatch, useSelector } from "react-redux";
import { handleClass } from "./redux/extra";
import { useEffect } from "react";
import {  } from "./redux/timerNumbers";

function App() {
  const dispatch = useDispatch();
  const { className } = useSelector((state) => state.extra);
  const closeSettings = () => {
    dispatch(showSettings(2));
    dispatch(handleClass("for__settings__main d-none"));
  };
  

  return (
    <div className="App">
      <div onClick={closeSettings} className={className}></div>
      <Header />
      <Main />
      <Settings />
    </div>
  );
}

export default App;
