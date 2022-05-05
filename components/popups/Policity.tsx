import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Close from "../UI/Close";
import { menuVariant } from "../../motions/Menu.motion";
import { AnimatePresence, motion } from "framer-motion";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import { BackUrl } from "../../vars";

interface IPolicity {
  policityOpen: boolean;
  setPolicityOpen: Dispatch<SetStateAction<boolean>>;
}

interface IPolicityData {
  PrivacyPolicy: string;
}

const Policity = ({ policityOpen, setPolicityOpen }: IPolicity) => {
  const [pageData, setPageData] = useState<IPolicityData>({
    PrivacyPolicy: "PrivacyPolicy",
  } as IPolicityData);

  useEffect(() => {
    const takeData = async () => {
      const response = await axios.get(BackUrl + "/api/contact-info");
      setPageData(response.data.data.attributes);
    };
    takeData();
  }, []);

  useEffect(() => {
    console.log(pageData);
  }, [pageData]);

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
          <div className="close" onClick={() => setPolicityOpen(false)}>
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
