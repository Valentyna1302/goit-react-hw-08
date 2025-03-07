import { ErrorMessage, Field, Form, Formik } from "formik";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { login } from "../../redux/auth/operations";
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

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (values, options) => {
    console.log(values);
    dispatch(login(values))
      .unwrap()
      .then((res) => {
        toast.success(`Welcome, ${res.user.email}`);
        navigate("/contacts", { replace: true });
      })
      .catch(() => toast.error("Invalid data"));
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
            Login
          </button>
          <p className={s.text}>
            Don&apost have an account yet? <Link to="/register">Sign up!</Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
