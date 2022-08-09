import React, { useEffect, useState } from "react";
import { inputMinuteBT, inputMinute } from "../../redux/timerNumbers";
import { useDispatch, useSelector } from "react-redux";
import { showSettings, handlerSound } from "../../redux/buttons";
import { handleAsp, handleAsbt, handleClass } from "../../redux/extra";

const Settings = () => {
  const dispatch = useDispatch();
  const minutes = useSelector((store) => store.timerNumbers);
  const [classN, setClassN] = useState("Settings pt-3 ");
  const { settings, sound } = useSelector((state) => state.buttons);
  const { asp, asbt } = useSelector((state) => state.extra);

  useEffect(() => {
    if (settings === 1) {
      setClassN("Settings pt-3 Settings__show");
      dispatch(handleClass("for__settings__main"))
    } else if (settings === 2) {
      setClassN("Settings pt-3 Settings__hide");
      dispatch(handleClass("for__settings__main d-none"))
    }
  }, [settings]);

  return (
    <div className={classN}>
      <h1 className="mb-4">Settings</h1>
      <div>
        <span className="h5 me-2">Pomodoro: </span>{" "}
        <input
          onChange={(e) => dispatch(inputMinute(e.target.value))}
          defaultValue={localStorage.getItem("minute") ? localStorage.getItem("minute") : minutes.changeMinute}
          className="Settings__input"
          type="number"
        />
      </div>
      <div className="mt-3">
        <span className="h5 me-2">Break Time:</span>{" "}
        <input
          onChange={(e) => dispatch(inputMinuteBT(e.target.value))}
          defaultValue={localStorage.getItem("minuteBT") ? localStorage.getItem("minuteBT") : minutes.changeMinuteBT}
          className="Settings__input"
          type="number"
        />
      </div>

      <div className="mt-3">
        <span className="h5 me-3">Sound</span>
        {!sound ? (
          <button
            onClick={() => dispatch(handlerSound(1))}
            className="Settings__sound"
          >
            <i className="fa-solid fa-volume-high"></i>
          </button>
        ) : (
          <button
            onClick={() => dispatch(handlerSound(0))}
            className="Settings__sound Settings__sound__no"
          >
            <i className="fa-solid fa-volume-xmark"></i>
          </button>
        )}
      </div>

      <div className="mt-3 Settings__auto__start__pomodoro">
        <span className="h5 me-3">Auto Start Pomodoro</span>
        {asp ? (
          <button
            onClick={() => dispatch(handleAsp(0))}
            className="Settings__auto__start__pomodoro__btn Settings__auto__start__pomodoro__btn__on position-relative"
          >
            <i className="fa-solid fa-arrows-rotate"></i>
          </button>
        ) : (
          <button
            onClick={() => dispatch(handleAsp(1))}
            className="Settings__auto__start__pomodoro__btn position-relative"
          >
            <i className="fa-solid fa-arrows-rotate"></i>
          </button>
        )}
      </div>

      <div className="mt-3 Settings__auto__start__pomodoro">
        <span className="h5 me-3">Auto Start Break Time</span>
        {asbt ? (
          <button
            onClick={() => dispatch(handleAsbt(0))}
            className="Settings__auto__start__pomodoro__btn Settings__auto__start__pomodoro__btn__on position-relative"
          >
            <i className="fa-solid fa-arrows-rotate"></i>
          </button>
        ) : (
          <button
            onClick={() => dispatch(handleAsbt(1))}
            className="Settings__auto__start__pomodoro__btn position-relative"
          >
            <i className="fa-solid fa-arrows-rotate"></i>
          </button>
        )}
      </div>

      <div className="mt-4">
        <button
          onClick={() => dispatch(showSettings(2))}
          className="btn btn-primary"
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default Settings;
