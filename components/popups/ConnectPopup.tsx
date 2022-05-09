import { Field, Form, Formik } from "formik";
import { Dispatch, SetStateAction } from "react";
import Close from "../UI/Close";
import Image from "next/image";
import Laptop from "../../public/assets/img/Laptop.png";
import { MessageComp } from "../UI/formComponents/MessageComp";
import CheckedComp from "../UI/formComponents/CheckedComp";
import { SignupSchema } from "../../sections/ContactSection";
import { AnimatePresence, motion } from "framer-motion";
import { menuVariant } from "../../motions/Menu.motion";
import { mailService } from "../../services/mail.service";
import { setThanksOpen } from "../../redux/slices/AppSlice";
import { useDispatch } from "react-redux";

interface IConnectPopup {
  setConnectOpen: Dispatch<SetStateAction<boolean>>;
  connectOpen: boolean;
}

const ConnectPopup = ({ setConnectOpen, connectOpen }: IConnectPopup) => {
  const dispatch = useDispatch();

  return (
    <AnimatePresence initial={false}>
      {connectOpen && (
        <motion.div
          variants={menuVariant}
          initial="hidden"
          animate="visible"
          exit="exit"
          className={`ConnectPopup ContactSection`}
        >
          <div className="close" onClick={() => setConnectOpen(false)}>
            <Close />
          </div>
          <div className="container">
            <div className="rightSide">
              <Formik
                initialValues={{
                  company: "",
                  name: "",
                  email: "",
                  phone: "",
                  message: "",
                  politic: false,
                }}
                validationSchema={SignupSchema}
                onSubmit={async (values: any) => {
                  await new Promise((r) => setTimeout(r, 500));
                  const response = mailService(
                    values.company,
                    values.name,
                    values.email,
                    values.phone,
                    values.message,
                    window.location.href.split("//")[0] +
                      "//" +
                      window.location.href.split("/").slice(2).join("")
                  );
                  console.log(response);
                  dispatch(setThanksOpen(true));
                }}
              >
                {({ errors, touched }) => (
                  <Form>
                    <Field
                      id="companyPopup"
                      name="company"
                      placeholder="Company"
                    />

                    <Field id="namePopup" name="name" placeholder="Your Name" />

                    <Field
                      id="emailPopup"
                      type="string"
                      name="email"
                      placeholder="Your Email"
                      className={errors.email ? "error" : ""}
                    />

                    <Field
                      id="phonePopup"
                      name="phone"
                      placeholder="Your Phone"
                    />

                    <MessageComp />

                    <div className="buttonWrap">
                      <button type="submit">Send</button>
                      <div className={errors.politic ? "agree error" : "agree"}>
                        <CheckedComp id={"ContactPopupSection"} />
                        <span>
                          We will keep your personal information private and
                          safe
                        </span>
                      </div>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
            <div className="leftSide">
              <Image
                width={800}
                height={500}
                objectFit={"contain"}
                src={Laptop.src}
                alt="Laptop"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ConnectPopup;
