import { TitleUser, UserTitleWrapper } from "./UserData.styled";
import { UserDataCard } from "./UserDataCard";
export const UserData = () => {
  return (
    <>
      <UserTitleWrapper>
        <TitleUser>My information:</TitleUser>
      </UserTitleWrapper>
      <UserDataCard />
    </>
  );
};
