import { pomodoroBtn, breakTimeBtn } from "../../redux/buttons";
import { useDispatch } from "react-redux";

const TimeBtn = () => {
    const dispatch = useDispatch()

    return (
        <div className='TimerBtn'>
            <button onClick={()=>dispatch(pomodoroBtn())} className="TimerBtn__first me-5">Pomodoro</button>
            <button onClick={()=>dispatch(breakTimeBtn())} className="TimerBtn__second">Break Time</button>
        </div>
    );
};

export default TimeBtn;