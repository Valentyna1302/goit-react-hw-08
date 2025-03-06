import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { logout } from "../../redux/auth/operations";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";
import s from "./Navigation.module.css";

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <>
      <h2>Auth</h2>
      {user.name && <h3>{user.email}</h3>}
      <nav>
        <NavLink
          className={({ isActive }) => clsx(s.link, isActive && s.active)}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => clsx(s.link, isActive && s.active)}
          to="/contacts"
        >
          Contacts
        </NavLink>
        {!isLoggedIn && (
          <>
            <NavLink
              className={({ isActive }) => clsx(s.link, isActive && s.active)}
              to="/register"
            >
              Register
            </NavLink>
            <NavLink
              className={({ isActive }) => clsx(s.link, isActive && s.active)}
              to="/login"
            >
              Login
            </NavLink>
          </>
        )}
        {isLoggedIn && (
          <button onClick={() => dispatch(logout())}>Logout</button>
        )}
      </nav>
    </>
  );
};

export default Navigation;
