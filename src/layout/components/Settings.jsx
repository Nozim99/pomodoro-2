import React, { useEffect, useState } from "react";
import { inputMinuteF, inputMinuteBTF } from "../../redux/timerNumbers";
import { useDispatch, useSelector } from "react-redux";
import { showSettings, handlerSound } from "../../redux/buttons";
import {
  handleAsp,
  handleAsbt,
  handleClass,
  settingClas,
  changeMusic,
  musicBtn,
} from "../../redux/extra";

const Settings = () => {
  const dispatch = useDispatch();
  const {minute, minuteBT} = useSelector((store) => store.timerNumbers);
  const { settings, sound } = useSelector((state) => state.buttons);
  const { asp, asbt, settingClass, musicSelect, musicStatus } = useSelector(
    (state) => state.extra
  );

  // const msc = new Audio(musicSelect);
  const [msc, setMsc] = useState(new Audio(musicSelect));

  const music = () => {
    dispatch(musicBtn(true));
    msc.play();
  };

  const stopMusic = () => {
    dispatch(musicBtn(false));
    msc.pause();
  };

  const select = (e) => {
    msc.pause();
    dispatch(changeMusic(e.target.value));
  };

  useEffect(() => {
    dispatch(musicBtn(false));
    setMsc(new Audio(musicSelect));
  }, [musicSelect]);

  useEffect(() => {
    if (settings === 1) {
      dispatch(settingClas("Settings pt-3 Settings__show"));
      dispatch(handleClass("for__settings__main"));
    } else if (settings === 2) {
      dispatch(settingClas("Settings pt-3 Settings__hide"));
      dispatch(handleClass("for__settings__main d-none"));
    }
  }, [settings]);

  return (
    <div className={settingClass}>
      <h1 className="mb-4">Settings</h1>
      <div>
        <span className="h5 me-2">Pomodoro: </span>{" "}
        <input
          onChange={(e)=>dispatch(inputMinuteF(e.target.value))}
          defaultValue={
            localStorage.getItem("minute") === null
              ? minute
              : localStorage.getItem("minute")
          }
          className="Settings__input"
          type="number"
        />
      </div>
      <div className="mt-3">
        <span className="h5 me-2">Break Time:</span>{" "}
        <input
        onChange={(e) => dispatch(inputMinuteBTF(e.target.value))}
          defaultValue={
            localStorage.getItem("minuteBT") === null
              ? minuteBT
              : localStorage.getItem("minuteBT")
          }
          className="Settings__input"
          type="number"
        />
      </div>

      <div className="mt-3">
        <span className="h5 me-3">Sound</span>
        {sound === 2 ? (
          <button
            onClick={() => dispatch(handlerSound(1))}
            className="Settings__sound"
          >
            <i className="fa-solid fa-volume-high"></i>
          </button>
        ) : (
          <button
            onClick={() => dispatch(handlerSound(2))}
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

      <div className="mt-3 d-flex justify-content-center align-items-center">
        <select onChange={select} className="Settings__select">
          <option className="text-center" value="stop">
            Change Music
          </option>
          <option value="1Lofi.mp3">Lofi</option>
          <option value="2Nature.mp3">Nature</option>
          <option value="rain-01.mp3">Rain</option>
          <option value="4Fire.mp3">Fire</option>
          <option value="5Library.mp3">Library</option>
          <option value="6piano.mp3">Piano</option>
          <option value="7Jazz.mp3">Jazz</option>
          <option value="8Studioghibli.mp3">Studio ghibli</option>
          <option value="9Binauralbeats.mp3">Binaural beats</option>
          <option value="10Coffeeshop.mp3">Coffee shop ambience</option>
        </select>
        {musicStatus ? (
          <button onClick={stopMusic} className="ms-4 btn btn-danger">
            <i className="fa-solid fa-pause me-1 me-sm-2"></i>Stop
          </button>
        ) : (
          <button onClick={music} className="ms-4 btn btn-success">
            <i className="fa-solid fa-play me-1 me-sm-2"></i>Play
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
