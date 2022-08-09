import React, { useEffect } from "react";
import { useSelector } from "react-redux/es/exports";
import { useDispatch } from "react-redux";
import {
  addMinute,
  addSecond,
  addMinuteBT,
  handleMinute,
  handleMinuteBT,
} from "../../redux/timerNumbers";
import {
  startBtn,
  stopBtn,
  pomodoroBtn,
  breakTimeBtn,
} from "../../redux/buttons";
import { handleItem, startClas } from "../../redux/extra";
import finishAudio from "../../sounds/finish.mp3";
import startClockSound from "../../sounds/clock-sound.mp3";
import sounds1 from "../../sounds/clock-sound1.mp3";
import sounds2 from "../../sounds/clock-sound2.mp3";
import Status from "./Status";

const Timer = () => {
  const finishSound = new Audio(finishAudio);
  const clockSound = new Audio(startClockSound);
  const sound1 = new Audio(sounds1);
  const sound2 = new Audio(sounds2);
  const dispatch = useDispatch();
  const interval = React.useRef();
  const { second, minute, minuteBT, changeMinute, changeMinuteBT } =
    useSelector((store) => store.timerNumbers);
  const btn = useSelector((store) => store.buttons.start);
  const { sound, pomodoro } = useSelector((store) => store.buttons);
  const { asp, asbt, startClass } = useSelector((state) => state.extra);

  const startBtnn = () => {
    clockSound.play();
    dispatch(startBtn());
    interval.current = setInterval(() => {
      dispatch(addSecond(0));
      if (!sound) {
        if (second % 2 === 0) {
          sound1.play();
        } else {
          sound2.play();
        }
      }
    }, 1000);
  };

  const stopBtnn = () => {
    dispatch(stopBtn());
    clearInterval(interval.current);
  };

  useEffect(() => {
    if (second < 0) {
      if (pomodoro) {
        dispatch(addSecond(1));
        dispatch(addMinute());
      } else {
        dispatch(addSecond(1));
        dispatch(addMinuteBT());
      }
    }
  }, [second]);

  useEffect(() => {
    if (minute < 0) {
      finishSound.play();
      stopBtnn();
      dispatch(addMinute(changeMinute));
      dispatch(addSecond(2));
      dispatch(breakTimeBtn());
      if (asbt) {
        dispatch(startClas("btn btn-primary disabled mt-4"));
        setTimeout(() => {
          startBtnn();
          dispatch(startClas("btn btn-primary mt-4"));
        }, 3500);
      }
    }
  }, [minute]);

  useEffect(() => {
    if (minuteBT < 0) {
      dispatch(handleItem(1));
      finishSound.play();
      stopBtnn();
      dispatch(addMinuteBT(changeMinuteBT));
      dispatch(addSecond(2));
      dispatch(pomodoroBtn());
      if (asp) {
        dispatch(startClas("btn btn-primary disabled mt-4"));
        setTimeout(() => {
          startBtnn();
          dispatch(startClas("btn btn-primary mt-4"));
        }, 3500);
      }
    }
  }, [minuteBT]);

  useEffect(() => {
    dispatch(handleMinute(changeMinute));
  }, [changeMinute]);

  useEffect(() => {
    dispatch(handleMinuteBT(changeMinuteBT));
  }, [changeMinuteBT]);

  useEffect(() => {
    if (!btn) {
      clearInterval(interval.current);
      interval.current = setInterval(() => {
        dispatch(addSecond(0));
        if (!sound) {
          if (second % 2 === 0) {
            sound1.play();
          } else {
            sound2.play();
          }
        }
      }, 1000);
    }
  }, [sound]);

  useEffect(() => {
    stopBtnn();
    dispatch(addMinuteBT(changeMinuteBT));
    dispatch(addSecond(2));
    dispatch(addMinute(changeMinute));
  }, [pomodoro]);

  return (
    <div className="Timer">
      <div className="Timer__num">
        {pomodoro ? (
          <span>{minute < 10 ? `0${minute}` : minute}</span>
        ) : (
          <span>{minuteBT < 10 ? `0${minuteBT}` : minuteBT}</span>
        )}
        <span>:</span>
        <span>{second < 10 ? `0${second}` : second}</span>
      </div>

      <Status />

      {!btn ? (
        <button onClick={stopBtnn} className="btn btn-danger mt-4">
          Stop
        </button>
      ) : (
        <button onClick={startBtnn} className={startClass}>
          Start
        </button>
      )}
    </div>
  );
};

export default Timer;
