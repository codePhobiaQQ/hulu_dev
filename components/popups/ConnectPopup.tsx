import { Field, Form, Formik } from "formik";
import { Dispatch, SetStateAction } from "react";
import Close from "../UI/Close";
import Image from "next/image";
import Laptop from "../../public/assets/img/Laptop.png";

interface IConnectPopup {
  setConnectOpen: Dispatch<SetStateAction<boolean>>;
  connectOpen: boolean;
}

const ConnectPopup = ({ setConnectOpen, connectOpen }: IConnectPopup) => {
  return (
    <div
      className={`ConnectPopup ContactSection ${connectOpen ? "active" : ""}`}
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
            }}
            onSubmit={async (values: any) => {
              await new Promise((r) => setTimeout(r, 500));
              alert(JSON.stringify(values, null, 2));
            }}
          >
            <Form>
              <Field id="company1" name="company" placeholder="Company" />

              <Field id="name1" name="name" placeholder="Your Name" />

              <Field
                id="email1"
                type="email"
                name="email"
                placeholder="Your Email"
              />

              <Field id="phone1" name="phone" placeholder="Your Phone" />

              <Field id="message1" name="message" placeholder="Your Message" />

              <div className="buttonWrap">
                <button type="submit">Send</button>
                <span>
                  We will keep your personal information private and safe
                </span>
              </div>
            </Form>
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
    </div>
  );
};

export default ConnectPopup;
