import Close from "../UI/Close";
import useTypedSelector from "../../hooks/useTypedSelector";
import { useDispatch } from "react-redux";
import { setThanksOpen } from "../../redux/slices/AppSlice";

const ThanksPopup = () => {
  const isVisible = useTypedSelector((state) => state.app.isThanksOpen);
  const dispatch = useDispatch();
  const closeHandler = () => {
    dispatch(setThanksOpen(false));
  };

  return (
    <div className={isVisible ? "thanksPopup active" : "thanksPopup"}>
      <div className="close" onClick={closeHandler}>
        <Close />
      </div>
      <div className="container">
        <h2>Thank You!</h2>
        <p>our manager will contact you soon</p>
      </div>
    </div>
  );
};

export default ThanksPopup;
