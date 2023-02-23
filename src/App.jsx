import { Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { useDispatch } from "react-redux";
import { lazy, useEffect } from "react";
import { refreshUser } from "./redux/auth/operations";
import { useAuth } from "./hooks/useAuth";
import { RestrictedRoute } from "./RestrictedRoute";
import { PrivateRoute } from "./PrivateRoute";
import SharedLayout from "./components/SharedLayout/SharedLayout";

const Home = lazy(() => import('./pages/Home/Home'));
const NewsPage = lazy(() => import('./pages/News/'));
const UserAccount = lazy(() => import('./pages/UserAccount/UserAccount'));
const RegisterPage = lazy(() => import('./pages/Auth/RegistrationPage'));
const FindPet = lazy(() => import('./pages/FindPet/FindPetPage'));
const OurFriend = lazy(() => import('./pages/OurFriends/OurFriendsPage'));
const LoginPage = lazy(() => import('./pages/Auth/LoginPage'));



function App() {
  const dispatch = useDispatch()
  const {isRefreshing} = useAuth()

  useEffect(()=> {
    dispatch(refreshUser())
  }, [dispatch])

  return  !isRefreshing && (
    <HelmetProvider>
      <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="news" element={<NewsPage />} />
        <Route path="FindPet" element={<FindPet />} />
        <Route path="OurFriend" element={<OurFriend />} />
        <Route
          path="/login"
          element={<RestrictedRoute redirectTo="/user" component={<LoginPage />} />}
        />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/user" component={<RegisterPage />} />
          }
        />
         <Route
            path="/user"
            element={
              <PrivateRoute redirectTo="/login" component={<UserAccount />} />
            }
          />
      </Route>
    </Routes>
    </HelmetProvider>
  );
}

export default App;

// {<RestrictedRoute
//   redirectTo="/user"
//   component={<RegisterPage />}
