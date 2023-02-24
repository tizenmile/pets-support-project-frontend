// import { useDispatch } from "react-redux";
import { UserPageContainer, UserWrapper } from "./UserAccount.styled.js";
import { UserData } from "../../components/UserData/UserData.jsx";
import { Logout } from "../../components/Logout/Logout.jsx";
// import { useEffect } from "react";
// import { fetchUserData } from "../../redux/userAccount/operations.js";

const UserAccount = () => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchUserData());
  // }, []);

  return (
    <UserPageContainer>
      <UserWrapper>
        <UserData />
        <Logout />
      </UserWrapper>
      {/* <PetsData  /> */}
    </UserPageContainer>
  );
};
export default UserAccount;
