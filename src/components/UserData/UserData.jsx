import { TitleUser, BoxTitleUser } from "./UserData.styled";
import { UserDataCard } from "./UserDataCard";
export const UserData = () => {
  return (
    <>
      <BoxTitleUser>
        <TitleUser>My information:</TitleUser>
      </BoxTitleUser>
      <UserDataCard />
    </>
  );
};
