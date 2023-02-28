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
  const [isHoveringTime, setIsHoveringTime] = useState(false);
  const handleMouseOver = () => {
    setIsHoveringTime(true);
  };
  const handleMouseOut = () => {
    setIsHoveringTime(false);
  };

  const [isHoveringAdress, setIsHoveringAdress] = useState(false);
  const handleMouseOverAdress = () => {
    setIsHoveringAdress(true);
  };
  const handleMouseOutAsress = () => {
    setIsHoveringAdress(false);
  };

  const [isHoveringEmail, setIsHoveringEmail] = useState(false);
  const handleMouseOverEmail = () => {
    setIsHoveringEmail(true);
  };
  const handleMouseOutEmail = () => {
    setIsHoveringEmail(false);
  };

  const [isHoveringPhone, setIsHoveringPhone] = useState(false);
  const handleMouseOverPhone = () => {
    setIsHoveringPhone(true);
  };
  const handleMouseOutPhone = () => {
    setIsHoveringPhone(false);
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
          <CardItem>
            <CardLink
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
              style={{
                color: workDays && isHoveringTime && "#f59256",
              }}
            >
              Time: <br />
              {workDays && (workDays[0].from || workDays[6].from)
                ? workDays[0].from || workDays[6].from
                : "--------"}
              -
              {workDays && (workDays[0].to || workDays[6].to)
                ? workDays[0].to || workDays[6].to
                : "--------"}
              {isHoveringTime && <Timetable workDays={workDays} />}
            </CardLink>
          </CardItem>
          <CardItem>
            <CardLink
              href={address && addressUrl}
              target={"_blank"}
              onMouseOver={handleMouseOverAdress}
              onMouseOut={handleMouseOutAsress}
              style={{
                color: address && isHoveringAdress && "#f59256",
              }}
            >
              Address: <br /> {address ? address : "-----------------"}
            </CardLink>
          </CardItem>
          <CardItem>
            <CardLink
              href={email && `mailto:${email}`}
              onMouseOver={handleMouseOverEmail}
              onMouseOut={handleMouseOutEmail}
              style={{
                color: email && isHoveringEmail && "#f59256",
              }}
            >
              Email: <br />
              {email ? email : "-----------------"}
            </CardLink>
          </CardItem>
          <CardItem>
            <CardLink
              href={phone && `tel:${phone}`}
              onMouseOver={handleMouseOverPhone}
              onMouseOut={handleMouseOutPhone}
              style={{
                color: phone && isHoveringPhone && "#f59256",
              }}
            >
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
