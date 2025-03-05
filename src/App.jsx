import { useEffect } from "react";
import { useDispatch } from "react-redux";
// import { fetchContacts } from "./redux/contactsOps";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import ContactsPage from "./pages/ContactsPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import { fetchContacts } from "./redux/contacts/operations";
// import { selectError, selectLoading } from "./redux/contacts/selectors";
// import { selectError, selectLoading } from "./redux/contactsSlice";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="contacts" element={<ContactsPage />} />
      </Route>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegistrationPage />} />
    </Routes>
  );
}

/* <div>
      <h1 style={{ marginBottom: "20px" }}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {isLoading && !error && <b>Request in progress...</b>}
      <ContactList />
    </div> */
