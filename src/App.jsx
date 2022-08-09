import Header from "./layout/Header";
import Main from "./layout/Main";
import Settings from "./layout/components/Settings";
import { showSettings } from "./redux/buttons";
import { useDispatch, useSelector } from "react-redux";
import {handleClass} from "./redux/extra"
import { useEffect } from "react";
import {localMinute, localMinuteBT} from "./redux/timerNumbers"
import {handlerSound} from "./redux/buttons"

function App() {
  const dispatch = useDispatch();
  const { className } = useSelector((state) => state.extra);
  const closeSettings = () => {
    dispatch(showSettings(2));
    dispatch(handleClass("for__settings__main d-none"))
  };

  useEffect(()=>{
    dispatch(localMinute())
    dispatch(localMinuteBT())
    // const lsSound = localStorage.getItem("sound")
    // if(lsSound){
    //   dispatch(handlerSound(lsSound))
    // }
  }, [])

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
