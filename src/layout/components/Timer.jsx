import React, { useEffect } from "react";
import { useSelector } from "react-redux/es/exports";
import { useDispatch } from "react-redux";
import { secondF, inputMinuteBTF, inputMinuteF, minuteF, minuteBTF } from "../../redux/timerNumbers";
import {
  startBtn,
  pomodoroBtn,
} from "../../redux/buttons";
import { handleItem, startClas } from "../../redux/extra";
import finishAudio from "../../sounds/finish.mp3";
import startClockSound from "../../sounds/clock-sound.mp3";
import sounds1 from "../../sounds/clock-sound1.mp3";
import sounds2 from "../../sounds/clock-sound2.mp3";
import Status from "./Status";
import { useState } from "react";

const Timer = () => {
  const finishSound = new Audio(finishAudio);
  const clockSound = new Audio(startClockSound);
  const sound1 = new Audio(sounds1);
  const sound2 = new Audio(sounds2);
  const dispatch = useDispatch();
  const interval = React.useRef();
  const { sound, pomodoro, start } = useSelector((store) => store.buttons);
  const { asp, asbt, startClass } = useSelector((state) => state.extra);
  const { minute, minuteBT, inputMinute, inputMinuteBT, second } = useSelector((store) => store.timerNumbers);
  const [bir, setBir] = useState(0)
  const [ikki, setIkki] = useState(0)

  const startF = () => {
    dispatch(startBtn(false))
    let end = pomodoro ? Math.floor(Date.now() / 1000) + minute * 60 + second : Math.floor(Date.now() / 1000) + minuteBT * 60 + second
    interval.current = setInterval(() => {
      dispatch(secondF((end - Math.floor(Date.now() / 1000)) % 60))
      pomodoro ? dispatch(minuteF(Math.floor((end - Math.floor(Date.now() / 1000)) / 60) % 60))
        : dispatch(minuteBTF(Math.floor((end - Math.floor(Date.now() / 1000)) / 60) % 60))
      if (Math.floor(Date.now() / 1000) > end) {
        dispatch(startBtn(true))
        dispatch(secondF(0))
        if (pomodoro) {
          dispatch(minuteF(0))
          dispatch(handleItem(1))
          finishSound.play()
          dispatch(pomodoroBtn(false))
        } else {
          dispatch(minuteBTF(0))
          finishSound.play()
          dispatch(pomodoroBtn(true))
        }
      }
    }, 100);
  }

  const stopF = () => {
    dispatch(startBtn(true))
    clearInterval(interval.current)
  }

  useEffect(() => {
    if (start) {
      clearInterval(interval.current)
    }
  }, [start])

  useEffect(() => {
    stopF()
    dispatch(minuteF(localStorage.getItem("minute") === null ? 50 : +localStorage.getItem("minute")))
    dispatch(minuteBTF(localStorage.getItem("minuteBT") === null ? 10 : localStorage.getItem("minuteBT")))
    dispatch(secondF(0))
    if(pomodoro){
      if(asp){
        startF()
      }
    } else {
      if(asbt){
        startF()
      }
    }
  }, [pomodoro])

  useEffect(()=>{
    stopF()
  }, [])

  useEffect(() => {
    if (sound === 2) {
      if (second % 2 === 1) {
        sound1.play()
      } else {
        sound2.play()
      }
    }
  }, [second])


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

      {start ? (
        <button onClick={startF} className={startClass}>
          Start
        </button>

      ) : (
        <button onClick={stopF} className="btn btn-danger mt-4">
          Stop
        </button>
      )}
    </div>
  );
};

export default Timer;
