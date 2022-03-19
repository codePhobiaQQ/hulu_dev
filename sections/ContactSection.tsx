import { Formik, Field, Form } from "formik";

const ContactSection = () => {
  return (
    <section className="ContactSection">
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
            }}
            onSubmit={async (values: any) => {
              await new Promise((r) => setTimeout(r, 500));
              alert(JSON.stringify(values, null, 2));
            }}
          >
            <Form>
              <Field id="company" name="company" placeholder="Company" />

              <Field id="name" name="name" placeholder="Your Name" />

              <Field
                id="email"
                type="email"
                name="email"
                placeholder="Your Email"
              />

              <Field id="phone" name="phone" placeholder="Your Phone" />

              <Field id="message" name="message" placeholder="Your Message" />

              <div className="buttonWrap">
                <button type="submit">Send</button>
                <span>
                  We will keep your personal information private and safe
                </span>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
