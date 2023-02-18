import { Routes, Route } from "react-router-dom";
import SharedLayout from "./components/SharedLayout/SharedLayout";
import Home from "./pages/Home/Home";
import News from "./pages/News/NewsPage";
import UserAccount from "./pages/UserAccount/UserAccount";
import Login from "./pages/Auth/LoginPage";
import Registration from "./pages/Auth/RegistrationPage";
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
        <Route path="login" element={<Login />} />
        <Route path="registration" element={<Registration />} />
      </Route>
    </Routes>
  );
}

export default App;
