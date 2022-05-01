import { Formik, Field, Form } from "formik";
import { MessageComp } from "../components/UI/formComponents/MessageComp";
import * as Yup from "yup";
import CheckedComp from "../components/UI/formComponents/CheckedComp";
import ThanksPopup from "../components/popups/ThanksPopup";
import { useDispatch } from "react-redux";
import { setThanksOpen } from "../redux/slices/AppSlice";
import { mailService } from "../services/mail.service";

export const SignupSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  politic: Yup.boolean().oneOf([true], "Подтвердите Ваше согласие"),
});

const ContactSection = () => {
  const dispatch = useDispatch();

  return (
    <>
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
                const response = mailService(
                  values.company,
                  values.name,
                  values.email,
                  values.phone,
                  values.message
                );
                console.log(response);
                dispatch(setThanksOpen(true));
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

                  <MessageComp />

                  <div className="buttonWrap">
                    <button type="submit">Send</button>
                    <div className={errors.politic ? "agree error" : "agree"}>
                      <CheckedComp id={"ContactSection"} />
                      <span>
                        We will keep your personal information private and safe
                      </span>
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </section>
      <ThanksPopup />
    </>
  );
};

export default ContactSection;
