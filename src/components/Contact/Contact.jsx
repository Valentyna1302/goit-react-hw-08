import { FaPhoneAlt, FaUser } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";
import s from "./Contact.module.css";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  return (
    <div className={s.container}>
      <div>
        <p className={s.text}>
          <FaUser size="15" />
          {name}
        </p>
        <p className={s.text}>
          <FaPhoneAlt size="15" />
          {number}
        </p>
      </div>
      <button className={s.btn} onClick={() => dispatch(deleteContact(id))}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
