import Close from "../UI/Close";
import useTypedSelector from "../../hooks/useTypedSelector";
import { useDispatch } from "react-redux";
import { setThanksOpen } from "../../redux/slices/AppSlice";
import { AnimatePresence, motion } from "framer-motion";
import { menuVariant } from "../../motions/Menu.motion";
import { useCallback, useEffect } from "react";

const ThanksPopup = () => {
  const isVisible = useTypedSelector((state) => state.app.isThanksOpen);
  const dispatch = useDispatch();
  const closeHandler = () => {
    dispatch(setThanksOpen(false));
  };

  const keyClickHandler = useCallback((e: KeyboardEvent) => {
    console.log(e.key);
    if (e.key === "Escape") closeHandler();
  }, []);

  useEffect(() => {
    if (isVisible) {
      window.addEventListener("keydown", keyClickHandler);
      return () => {
        window.removeEventListener("keydown", keyClickHandler);
      };
    }
  }, [isVisible]);

  return (
    <AnimatePresence initial={false}>
      {isVisible && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={menuVariant}
          className={"thanksPopup"}
          onClick={closeHandler}
        >
          <div className="close">
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
