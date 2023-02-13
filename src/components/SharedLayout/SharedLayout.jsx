import Header from "../Header/Header";
import { Outlet } from "react-router";

const SharedLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default SharedLayout;
