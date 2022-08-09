import TimeBtn from "./components/TimeBtn";
import Timer from "./components/Timer";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const Main = () => {
  const [classN, setClassN] = useState("Main__content position-absolute top-50 start-50 translate-middle pt-5")
    

  const pomodoro = useSelector((store) => store.buttons.pomodoro);
  
  useEffect(() => {
    

    pomodoro
      ? (setClassN("Main__content position-absolute top-50 start-50 translate-middle pt-5"))
      : (setClassN("Main__content__BT Main__content position-absolute top-50 start-50 translate-middle pt-5"));
  }, [pomodoro]);

  return (
    <div className="Main">
      <div className={classN}>
        <TimeBtn />
        <Timer />
      </div>
    </div>
  );
};

export default Main;
