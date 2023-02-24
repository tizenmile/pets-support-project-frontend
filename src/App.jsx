import { Routes, Route } from "react-router-dom";
import SharedLayout from "./components/SharedLayout/SharedLayout";
import Home from "./pages/Home/Home";
import NewsPage from "./pages/News/NewsPage";
import UserAccount from "./pages/UserAccount/UserAccount";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="news" element={<NewsPage />} />
        <Route path="user" element={<UserAccount />} />
      </Route>
    </Routes>
  );
}

export default App;
