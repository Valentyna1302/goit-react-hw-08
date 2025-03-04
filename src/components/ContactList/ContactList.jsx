import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contactsSlice";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";

const ContactList = () => {
  const filterData = useSelector(selectFilteredContacts);

  return (
    <ul className={s.list}>
      {filterData.map((contact) => (
        <li className={s.item} key={contact.id}>
          <Contact {...contact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
