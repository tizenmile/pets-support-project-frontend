import PageTitle from "../../components/PageTitle/PageTitle";
import FriendBord from "../../components/FriendBord/FriendBord";
import { OurFriendWrap } from "./OurFriendsPage.styled";
const OurFriend = () => {
  return (
    <OurFriendWrap>
      <PageTitle title={"Our friends"} />
      <FriendBord />
    </OurFriendWrap>
  );
};

export default OurFriend;
