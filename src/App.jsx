import { Routes, Route } from "react-router-dom";
import SharedLayout from "./components/SharedLayout/SharedLayout";
import Home from "./pages/Home/Home";
import News from "./pages/News/News";
import UserAccount from "./pages/UserAccount/UserAccount";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="news" element={<News />} />
        <Route path="user" element={<UserAccount />} />
      </Route>
    </Routes>
  );
}

export default App;
