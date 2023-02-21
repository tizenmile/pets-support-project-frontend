import Header from "../Header/HeaderComp";
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
