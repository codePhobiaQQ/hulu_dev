import { Formik, Field, Form } from "formik";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
});

const MIN_TEXTAREA_HEIGHT = 58;

const MessageComp = () => {
  const textareaRef = useRef(null);
  const [value, setValue] = useState("");
  const onChange = (event: any) => setValue(event.target.value);

  useLayoutEffect(() => {
    // @ts-ignore
    textareaRef.current.style.height = "inherit";
    // @ts-ignore
    textareaRef.current.style.height = `${Math.max(
      // @ts-ignore
      textareaRef.current.scrollHeight,
      MIN_TEXTAREA_HEIGHT
    )}px`;
  }, [value]);

  return (
    <textarea
      name="message"
      id={"message"}
      value={value}
      onChange={onChange}
      ref={textareaRef}
      placeholder="Your Message"
    ></textarea>
  );
};

const ContactSection = () => {
  return (
    <section id="ContactUs" className="ContactSection">
      <div className="triangle"></div>
      <div className="container">
        <h2>CONTACTS US</h2>
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
              alert(JSON.stringify(values, null, 2));
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <Field id="company" name="company" placeholder="Company" />

                <Field id="name" name="name" placeholder="Your Name" />

                <Field
                  id="email"
                  type="string"
                  name="email"
                  placeholder="Your Email"
                  className={errors.email ? "error" : ""}
                />

                <Field id="phone" name="phone" placeholder="Your Phone" />

                <Field id="message" name="message" component={MessageComp} />

                <div className="buttonWrap">
                  <button type="submit">Send</button>
                  <span>
                    We will keep your personal information private and safe
                  </span>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
