import { useDispatch } from "react-redux";
import { logOut } from "../../redux/auth/operations";
import { LogOut, LogOutIcon } from "./Logout.styled";

export const Logout = () => {
  return (
    <LogOut>
      <LogOutIcon />
      Log Out
    </LogOut>
  );
};
