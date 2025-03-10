import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import AppBar from "../AppBar/AppBar";

const Layout = () => {
  return (
    <div>
      <AppBar />
      <Suspense fallback={<b>Loading...</b>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;
