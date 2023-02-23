import { UserPageContainer, UserWrapper } from "./UserAccount.styled.js";
import { UserData } from "../../components/UserData/UserData.jsx";
import PetsData from "../../components/PetsData";
import { Logout } from "../../components/Logout/Logout.jsx";

const UserAccount = () => {
  return (
    <UserPageContainer>
      <UserWrapper>
        <UserData />
        <Logout />
      </UserWrapper>
      <PetsData />
    </UserPageContainer>
  );
};
export default UserAccount;
