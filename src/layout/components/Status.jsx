import { useSelector, useDispatch } from "react-redux";
import itemImg from "../../images/pomodoro-logo.png";
import { handleItem, deleteItems } from "../../redux/extra";

const Status = () => {
  const { item } = useSelector((state) => state.extra);
  const dispatch = useDispatch();

  const arr = [];
  for (let i = 0; i < item; i++) {
    arr.push(
      <div
        onClick={() => dispatch(handleItem(-1))}
        key={"id" + i}
        className="position-relative Status__box c-pointer"
      >
        <span className="position-absolute Status__x">
          <i className="fa-solid fa-xmark"></i>
        </span>
        <img src={itemImg} alt="item" className="Status__img me-2" />
      </div>
    );
  }

  return (
    <div className="Status text-start px-4 d-flex align-items-center flex-wrap">
      {arr}
      {item ? <span className="h1">X{arr.length}</span> : ""}
      {item ? (
        <i
          onClick={() => dispatch(deleteItems())}
          className="ms-3 Status__icon fa-solid fa-trash-can"
        ></i>
      ) : (
        ""
      )}
    </div>
  );
};

export default Status;
