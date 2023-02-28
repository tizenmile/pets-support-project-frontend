import FriendCard from "../FriendCard/FriendCard";
import { BordList, BordItem, Wrap } from "./FriendBordStyle";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectFriends } from "../../redux/friends/friendsSelectors";
import { getFriends } from "../../redux/friends/friendsOperations";

const FriendBord = () => {
  const friendsData = useSelector(selectFriends);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFriends());
  }, []);

  if (!friendsData) return;
  return (
    <Wrap>
      <BordList>
        {friendsData.map((friend) => (
          <BordItem key={friend._id}>
            <FriendCard data={friend} />
          </BordItem>
        ))}
      </BordList>
    </Wrap>
  );
};

export default FriendBord;
