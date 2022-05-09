import { useCallback, useEffect, useState } from "react";
import Close from "../UI/Close";
import { menuVariant } from "../../motions/Menu.motion";
import { AnimatePresence, motion } from "framer-motion";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import { BackUrl } from "../../vars";
import { useDispatch } from "react-redux";
import useTypedSelector from "../../hooks/useTypedSelector";
import { setPolicityOpen } from "../../redux/slices/AppSlice";

interface IPolicityData {
  PrivacyPolicy: string;
}

const Policity = () => {
  const [pageData, setPageData] = useState<IPolicityData>({
    PrivacyPolicy: "PrivacyPolicy",
  } as IPolicityData);

  const dispatch = useDispatch();
  const policityOpen = useTypedSelector((state) => state.app.isPolicityOpen);

  const closeHandler = () => {
    dispatch(setPolicityOpen(false));
  };

  const keyClickHandler = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") closeHandler();
  }, []);

  useEffect(() => {
    if (policityOpen) {
      window.addEventListener("keydown", keyClickHandler);
      return () => {
        window.removeEventListener("keydown", keyClickHandler);
      };
    }
  }, [policityOpen]);

  useEffect(() => {
    const takeData = async () => {
      const response = await axios.get(BackUrl + "/api/contact-info");
      setPageData(response.data.data.attributes);
    };
    takeData();
  }, []);

  return (
    <AnimatePresence initial={false}>
      {policityOpen && (
        <motion.div
          variants={menuVariant}
          initial="hidden"
          animate="visible"
          exit="exit"
          className={"PolicityPopup"}
        >
          <div className="close" onClick={() => closeHandler()}>
            <Close />
          </div>
          <div className="container">
            <ReactMarkdown
              transformImageUri={(uri: any) =>
                uri.startsWith("http") ? uri : `${BackUrl}${uri}`
              }
            >
              {pageData.PrivacyPolicy}
            </ReactMarkdown>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Policity;
