import { UserPageContainer, UserWrapper } from "./UserAccount.styled.js";
import { UserData } from "../../components/UserData/UserData.jsx";
import { LogOut } from "../../components/Logout/Logout.jsx";
const UserAccount = () => {
  return (
    <UserPageContainer>
      <UserWrapper>
        <UserData />
        <LogOut />
      </UserWrapper>
      {/* <PetsData  /> */}
    </UserPageContainer>
  );
};
export default UserAccount;
