import clsx from "clsx";
import { NavLink } from "react-router-dom";
import s from "../Navigation/Navigation.module.css";

const AuthNav = () => {
  return (
    <div className={s.container}>
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
    </div>
  );
};

export default AuthNav;
