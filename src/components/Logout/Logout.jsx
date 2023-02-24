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

// export const LogOut = () => {
//   const dispatch = useDispatch();

//   return (
//     <button type="button" onClick={() => dispatch(logOut())}>
//       logout
//     </button>
//   );
// };
