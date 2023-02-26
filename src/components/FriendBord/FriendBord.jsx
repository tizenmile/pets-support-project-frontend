import { getFrends } from "../../API/api";
import FriendCard from "../FriendCard/FriendCard";
import { BordList, BordItem, Wrap } from "./FriendBordStyle";

const response = await getFrends();
const friends = response.data[0].sponsors;
const FriendBord = () => {
  return (
    <Wrap>
      <BordList>
        {friends.map((friend) => (
          <BordItem key={friend._id}>
            <FriendCard data={friend} />
          </BordItem>
        ))}
      </BordList>
    </Wrap>
  );
};

export default FriendBord;
