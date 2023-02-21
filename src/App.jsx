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
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { refreshUser } from "./redux/auth/operations";
import { useAuth } from "./hooks/useAuth";

function App() {
  const dispatch = useDispatch()
  const {isRefreshing} = useAuth()

  useEffect(()=> {
    dispatch(refreshUser)
  }, [])

  return  !isRefreshing && (
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

// {<RestrictedRoute
//   redirectTo="/user"
//   component={<RegisterPage />}
