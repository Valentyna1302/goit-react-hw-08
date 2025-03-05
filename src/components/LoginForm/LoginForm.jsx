import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import s from "../RegistrationForm/RegistrationForm.module.css";

const LoginSchema = Yup.object().shape({
  email: Yup.string().required("Required"),

  password: Yup.string().required("Required"),
});

const LoginForm = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = (values, options) => {
    console.log(values);
    options.resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={LoginSchema}
      >
        <Form className={s.form} autoComplete="off">
          <label className={s.labelWraper}>
            <span>Email:</span>
            <Field className={s.input} name="email" autoComplete="off" />
            <ErrorMessage className={s.span} name="email" component="span" />
          </label>
          <label className={s.labelWraper}>
            <span>Password:</span>
            <Field
              className={s.input}
              name="password"
              type="password"
              autoComplete="off"
            />
            <ErrorMessage className={s.span} name="password" component="span" />
          </label>
          <button className={s.button} type="submit">
            Register
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
