import { useSelector } from "react-redux";
import ContactForm from "../components/ContactForm/ContactForm";
import ContactList from "../components/ContactList/ContactList";
import SearchBox from "../components/SearchBox/SearchBox";
import { selectError, selectLoading } from "../redux/contacts/selectors";

const ContactsPage = () => {
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);
  return (
    <div>
      <h1 style={{ marginBottom: "20px" }}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {isLoading && !error && <b>Request in progress...</b>}
      <ContactList />
    </div>
  );
};

export default ContactsPage;
