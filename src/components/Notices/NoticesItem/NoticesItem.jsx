import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { heartFull as HeartFull, heart as Heart } from "../../../media";
import {
  selectFavNotices,
  getStatusFilter,
} from "../../../redux/notices/selector";
import { selectIsLoggedIn, selectUser } from "../../../redux/auth/selectors";
import {
  addNoticeToFavorite,
  delNoticeFromFavorite,
  getFavNotices,
} from "../../../redux/notices/operation";
import {
  NoticeItem,
  CardTumb,
  ImageWrapp,
  Image,
  ImageText,
  HeartButton,
  Title,
  FeaturesList,
  FeaturesItem,
  FeaturesText,
  CardButton,
} from "./NoticesItem.styled";
import { NoticeInfoModal } from "../../NoticeInfoModal/NoticeInfoModal";
import { HiTrash } from "react-icons/hi";

export const Notice = ({ item }) => {
  const favNotices = useSelector(selectFavNotices);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  // const isLoggedIn = true
  const user = useSelector(selectUser);
  const [isModlOpen, setIsModalOpen] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const statusFilter = useSelector(getStatusFilter);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = (isFav) => {
    setIsModalOpen(false);
    setIsFavorite(isFav);
  };
  const favNoticesIdArr = favNotices.reduce((acc, item) => {
    acc.push(item._id);
    return acc;
  }, []);

  useEffect(() => {
    setIsFavorite(favNoticesIdArr.includes(item._id));
  }, [favNotices]);

  const handleAuthorizedClick = async () => {
    setIsFavorite((prev) => !prev);
    await dispatch(
      isFavorite
        ? delNoticeFromFavorite(item._id)
        : addNoticeToFavorite(item._id)
    );
    if (statusFilter === "fav-notice") {
      dispatch(getFavNotices());
    }
  };
  const CustomToastWithLink = () => (
    <div>
      <Link to="/login">You need to log in</Link>
    </div>
  );

  const date = parseInt(new Date().getFullYear());
  const age = date - parseInt(new Date(item.birthDate).getFullYear());
  const variantAgeArr = [
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
    "Ten",
    "Eleven",
    "Twelve",
    "Thirteen",
    "Fourteen",
    "Fifteen",
  ];
  let ageAsWord;
  if (age < 1) {
    ageAsWord = "Less than a year";
  } else if (age > 15) {
    ageAsWord = "very old dog";
  } else if (age >= 1 && age <= 15) {
    ageAsWord = variantAgeArr[age - 1];
  } else {
    ageAsWord = "unknown";
  }

  const categoryName = item.category;
  const features = ["Breed", "Place", "Age"];
  return (
    <NoticeItem>
      <CardTumb>
        <ImageWrapp>
          <Image src={item.photo} alt={item.title} />
          <ImageText>
            {categoryName === "sell" && "sell"}
            {categoryName === "for-free" && "in good hands"}
            {categoryName === "lost-found" && "lost/found"}
          </ImageText>
          <HeartButton
            onClick={() => {
              isLoggedIn ? handleAuthorizedClick() : toast(CustomToastWithLink);
            }}
          >
            {isFavorite ? (
              <img src={HeartFull} alt="heartFull" />
            ) : (
              <img src={Heart} alt="heart" />
            )}
          </HeartButton>
          <ToastContainer />
        </ImageWrapp>
        <Title style={{ width: "280px" }}>{item.title}</Title>
        <FeaturesList>
          <FeaturesItem>
            <FeaturesText style={{ width: "50px" }}>Breed:</FeaturesText>
            <FeaturesText style={{ marginLeft: "40px" }}>
              {item.breed}
            </FeaturesText>
          </FeaturesItem>
          <FeaturesItem>
            <FeaturesText style={{ width: "50px" }}>Place:</FeaturesText>
            <FeaturesText style={{ marginLeft: "40px" }}>
              {item.place}
            </FeaturesText>
          </FeaturesItem>
          <FeaturesItem>
            <FeaturesText style={{ width: "50px" }}>Age:</FeaturesText>
            <FeaturesText style={{ marginLeft: "40px" }}>
              {ageAsWord}
            </FeaturesText>
          </FeaturesItem>
        </FeaturesList>
        <CardButton
          style={item.userId !== user.id && { marginBottom: "32px" }}
          onClick={openModal}
        >
          Learn more
        </CardButton>
        {item.userId === user.id && (
          <CardButton>
            Delete
            <HiTrash style={{ width: "16px", height: "17px" }} />
          </CardButton>
        )}
      </CardTumb>
      {isModlOpen && (
        <NoticeInfoModal
          itemId={item._id}
          isFavorite={isFavorite}
          onClose={closeModal}
        />
      )}
    </NoticeItem>
  );
};
