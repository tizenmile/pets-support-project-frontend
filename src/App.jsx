// import { Routes, Route } from "react-router-dom";
// import { HelmetProvider } from 'react-helmet-async';
// import { useDispatch } from "react-redux";
// import { lazy, useEffect } from "react";
// import { refreshUser } from "./redux/auth/operations";
// import { useAuth } from "./hooks/useAuth";
// import { RestrictedRoute } from "./RestrictedRoute";
// import { PrivateRoute } from "./PrivateRoute";
// import SharedLayout from "./components/SharedLayout/SharedLayout";

// const Home = lazy(() => import('./pages/Home/Home'));
// const NewsPage = lazy(() => import('./pages/News/'));
// const UserAccount = lazy(() => import('./pages/UserAccount/UserAccount'));
// const RegisterPage = lazy(() => import('./pages/Auth/RegistrationPage'));
// const FindPet = lazy(() => import('./pages/FindPet/FindPetPage'));
// const OurFriend = lazy(() => import('./pages/OurFriends/OurFrindsPage'));
// const LoginPage = lazy(() => import('./pages/Auth/LoginPage'));

// function App() {
//   const dispatch = useDispatch()
//   const {isRefreshing} = useAuth()

//   useEffect(()=> {
//     dispatch(refreshUser())
//   }, [dispatch])

//   return  !isRefreshing && (
//     <HelmetProvider>
//       <Routes>
//       <Route path="/" element={<SharedLayout />}>
//         <Route index element={<Home />} />
//         <Route path="news" element={<NewsPage />} />
//         <Route path="FindPet" element={<FindPet />} />
//         <Route path="OurFriend" element={<OurFriend />} />
//         <Route
//           path="/login"
//           element={<RestrictedRoute redirectTo="/current" component={<LoginPage />} />}
//         />
//         <Route
//           path="/register"
//           element={
//             <RestrictedRoute redirectTo="/current" component={<RegisterPage />} />
//           }
//         />
//          <Route
//             path="/current"
//             element={
//               <PrivateRoute redirectTo="/login" component={<UserAccount />} />
//             }
//           />
//       </Route>
//     </Routes>
//     </HelmetProvider>
//   );
// }

// export default App;

// // {<RestrictedRoute
// //   redirectTo="/user"
// //   component={<RegisterPage />}

import { Routes, Route } from "react-router-dom";
import { RestrictedRoute } from "./RestrictedRoute";
import SharedLayout from "./components/SharedLayout/SharedLayout";
import Home from "./pages/Home/Home";
import News from "./pages/News/NewsPage";
import UserAccount from "./pages/UserAccount/UserAccount";
import Login from "./pages/Auth/LoginPage";
import RegisterPage from "./pages/Auth/RegistrationPage";
import FindPet from "./pages/FindPet/FindPetPage";
import OurFriend from "./pages/OurFriends/OurFrindsPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="news" element={<News />} />
        <Route path="FindPet" element={<FindPet />} />
        <Route path="OurFriend" element={<OurFriend />} />
        <Route
          path="/login"
          element={<RestrictedRoute redirectTo="/user" component={<Login />} />}
        />
        <Route
          path="/register"
          element={
            <RegisterPage redirectTo="/user" component={<RegisterPage />} />
          }
        />
        <Route path="/user" element={<UserAccount />} />
      </Route>
    </Routes>
  );
}

export default App;
