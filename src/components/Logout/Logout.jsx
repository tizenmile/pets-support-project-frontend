import { useDispatch } from "react-redux";
import { logOut } from "../../redux/auth/operations";
import { LogOut, LogOutIcon } from "./Logout.styled";

export const Logout = () => {
  const dispatch = useDispatch();
  return (
    <LogOut type="button" onClick={() => dispatch(logOut())}>
      <LogOutIcon />
      Log Out
    </LogOut>
  );
};
