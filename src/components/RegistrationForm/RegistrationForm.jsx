import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import s from "./RegistrationForm.module.css";

const RegisterSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required")
    .matches(/^[A-Za-zА-Яа-яЄєІіЇїҐґ-\s]+$/, "Invalid format"),
  email: Yup.string()
    .email("Invalid email format")
    .min(5, "Too short!")
    .max(50, "Too long!")
    .required("Required"),

  password: Yup.string()
    .min(8, "Too short!")
    .max(32, "Too long!")
    .matches(/^[A-Za-z0-9]+$/, "Only Latin letters")
    .matches(/[A-Z]/, "Must have 1 uppercase")
    .matches(/\d/, "Must have 1 number")
    .required("Required"),
});

const RegistrationForm = () => {
  const initialValues = {
    email: "",
    name: "",
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
        validationSchema={RegisterSchema}
        autoComplete="off"
      >
        <Form className={s.form} autoComplete="off">
          <label className={s.labelWraper}>
            <span>Name:</span>
            <Field className={s.input} name="name" autoComplete="off" />
            <ErrorMessage className={s.span} name="name" component="span" />
          </label>
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

export default RegistrationForm;
