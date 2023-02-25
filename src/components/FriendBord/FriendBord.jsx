import { getFrends } from "../../API/api";
import FriendCard from "../FriendCard/FriendCard";
import { BordList, BordItem, Wrap } from "./FriendBordStyle";



const FriendBord = async () => {
  const response = await getFrends();
  if(!response) return
  const friends = response.data[0].sponsors;
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
