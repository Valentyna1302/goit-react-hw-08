import s from "./HomeContactsPage.module.css";

const HomePage = () => {
  return (
    <div className={s.container}>
      <h1 className={s.title}>Phonebook</h1>
      <p className={s.text}>
        📞 Keep all your important contacts in one place! Log in to add, edit,
        and search for contacts easily. Don’t have an account yet? Sign up now!
      </p>
    </div>
  );
};

export default HomePage;
