import Close from "../UI/Close";
import useTypedSelector from "../../hooks/useTypedSelector";
import { useDispatch } from "react-redux";
import { setThanksOpen } from "../../redux/slices/AppSlice";
import { AnimatePresence, motion } from "framer-motion";
import { menuVariant } from "../../motions/Menu.motion";

const ThanksPopup = () => {
  const isVisible = useTypedSelector((state) => state.app.isThanksOpen);
  const dispatch = useDispatch();
  const closeHandler = () => {
    dispatch(setThanksOpen(false));
  };

  return (
    <AnimatePresence initial={false}>
      {isVisible && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={menuVariant}
          className={"thanksPopup"}
        >
          <div className="close" onClick={closeHandler}>
            <Close />
          </div>
          <div className="container">
            <h2>Thank You!</h2>
            <p>our manager will contact you soon</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ThanksPopup;
