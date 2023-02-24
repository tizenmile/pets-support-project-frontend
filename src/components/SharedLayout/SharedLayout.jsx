import Header from "../Header/HeaderComp";
import { Outlet } from "react-router";
import { Suspense } from "react";
import AnimationLoader from "../AnimationLoader";

const SharedLayout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<AnimationLoader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
