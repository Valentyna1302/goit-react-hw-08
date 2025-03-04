import { ErrorMessage, Field, Form, Formik } from "formik";
import { useId } from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { addContact } from "../../redux/contactsOps";
import s from "./ContactForm.module.css";

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required")
    .matches(/^[A-Za-zА-Яа-яЄєІіЇїҐґ-\s]+$/, "Invalid format"),
  number: Yup.string()
    .matches(/^\+?\d+([-\s]\d+)*$/, "Invalid format")
    .min(3, "Too Short!")
    .max(16, "Too Long!")
    .required("Required"),
});

const ContactForm = () => {
  const initialValues = {
    name: "",
    number: "",
  };
  const dispatch = useDispatch();
  const nameFieldId = useId();
  const numberFieldId = useId();

  const formatPhoneNumber = (value) => {
    return value
      .replace(/(\d{3})(\d{2})(\d{2})$/, "$1-$2-$3") // Формат XXX-XX-XX
      .replace(/(\d{3})(\d{2})$/, "$1-$2"); // Формат XXX-XX, якщо введення неповне
  };

  const handleSubmit = (values, actions) => {
    const newObj = {
      name: values.name,
      number: values.number,
    };
    dispatch(addContact(newObj));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={ContactSchema}
    >
      {({ setFieldValue }) => (
        <Form className={s.form}>
          <div className={s.labelWraper}>
            <label htmlFor={nameFieldId}>Name</label>
            <Field
              className={s.input}
              type="text"
              name="name"
              id={nameFieldId}
            />
            <ErrorMessage className={s.span} name="name" component="span" />
          </div>

          <div className={s.labelWraper}>
            <label htmlFor={numberFieldId}>Number</label>
            <Field
              className={s.input}
              type="tel"
              name="number"
              id={numberFieldId}
              onChange={(e) => {
                const formattedValue = formatPhoneNumber(e.target.value);
                setFieldValue("number", formattedValue);
              }}
            />
            <ErrorMessage className={s.span} name="number" component="span" />
          </div>

          <button className={s.button} type="submit">
            Add contact
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
