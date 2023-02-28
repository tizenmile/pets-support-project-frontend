//import { getFrends } from "../../API/api";
//const response = await getFrends();
//console.log("123", response.data[0].sponsors);
import { useState } from "react";
import Timetable from "../Timetable/Timetable";
import {
  Card,
  CardItem,
  Imge,
  CardTitle,
  CardInfWrap,
  CardLink,
  CardList,
  TitleLink,
} from "./FriendCardStyle";
const FriendCard = ({ data }) => {
  const { title, url, addressUrl, imageUrl, address, workDays, phone, email } =
    data;
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseOver = () => {
    setIsHovering(true);
  };
  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <Card>
      <CardTitle>
        <TitleLink href={url} target={"_blank"}>
          {title}
        </TitleLink>
      </CardTitle>
      <CardInfWrap>
        <a href={url} target={"_blank"}>
          <Imge
            src={
              imageUrl ??
              "https://animals-city.org/wp-content/themes/animals-city/img/logo.svg"
            }
            alt={title}
          />
        </a>
        <CardList>
          <CardItem hovering={workDays}>
            <CardLink onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
              Time: <br />
              {workDays && (workDays[0].from || workDays[6].from)
                ? workDays[0].from || workDays[6].from
                : "--------"}
              -
              {workDays && (workDays[0].to || workDays[6].to)
                ? workDays[0].to || workDays[6].to
                : "--------"}
              {isHovering && <Timetable workDays={workDays} />}
            </CardLink>
          </CardItem>
          <CardItem>
          <CardLink href={address && addressUrl} target={"_blank"} hovering={address}>
              Address: <br /> {address ? address : "-----------------"}
            </CardLink>
          </CardItem>
          <CardItem>
            <CardLink href={email && `mailto:${email}`}  hovering={email}>
              Email: <br />
              {email ? email : "-----------------"}
            </CardLink>
          </CardItem>
          <CardItem>
            <CardLink href={phone && `tel:${phone}`}  hovering={phone}>
              Phone: <br />
              {phone ? phone : "-----------------"}{" "}
            </CardLink>
          </CardItem>
        </CardList>
      </CardInfWrap>
    </Card>
  );
};

export default FriendCard;
