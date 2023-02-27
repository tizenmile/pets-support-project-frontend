import Header from "../Header/HeaderComp";
import { Outlet } from "react-router";
import { Suspense } from "react";
import AnimationLoader from "../AnimationLoader";
import { ToastContainer } from "react-toastify";

const SharedLayout = () => {
  return (
    <>
      <Header />
      <ToastContainer />
      <Suspense fallback={<AnimationLoader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
