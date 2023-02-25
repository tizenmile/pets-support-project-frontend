
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { HiTrash } from "react-icons/hi2";
import { heartFull as HeartFull, heart as Heart } from "../../../media";
import { selectFavNotices } from "../../../redux/notices/selector";
import { selectIsLoggedIn, selectUser } from "../../../redux/auth/selectors";
import {
  addNoticeToFavorite,
  delNoticeFromFavorite,
<<<<<<< HEAD
=======
  delNotice,
  getFavNotices,
  fetchNoticesByCategory,
  getOwnNotices
>>>>>>> 0d11c3dc50f48a7eecaa756ca5494bafbd60a514
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

export const Notice = ({ item }) => {
  const favNotices = useSelector(selectFavNotices);
<<<<<<< HEAD
  const isLoggedIn = useSelector(selectIsLoggedIn)
  // const isLoggedIn = true
  const user = useSelector(selectUser)
=======
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const category = useSelector(getStatusFilter)
   // const isLoggedIn = true
  const user = useSelector(selectUser);
>>>>>>> 0d11c3dc50f48a7eecaa756ca5494bafbd60a514
  const [isModlOpen, setIsModalOpen] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const statusFilter = useSelector(getStatusFilter);

  const dispatch = useDispatch();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = (isFav) => {
    setIsModalOpen(false);
    setIsFavorite(isFav)
  };

  useEffect(() => {
    setIsFavorite(favNotices.includes(item._id));
  }, [favNotices]);

  const handleAuthorizedClick = async () => {
    setIsFavorite((prev) => !prev);
    await dispatch(
      isFavorite
        ? delNoticeFromFavorite(item._id)
        : addNoticeToFavorite(item._id)
    );
<<<<<<< HEAD
    setIsFavorite((prev) => !prev);
=======
    if (statusFilter === "fav-notice") {
      dispatch(getFavNotices());
    }
>>>>>>> 0d11c3dc50f48a7eecaa756ca5494bafbd60a514
  };

  
  const handleDeleteClick = async() => {
    const arrOfCategoryName = ["sell", "lost-found", "for-free"]
   await dispatch(delNotice(item._id))
    {
      if (arrOfCategoryName.includes(category)) {
        dispatch(fetchNoticesByCategory(category))
      } else if (category === "own-notices") {
        dispatch(getOwnNotices())
      } else {
        dispatch(getFavNotices())
      } 
    }  
  }
  
  const CustomToastWithLink = () => (
    <div>
      <Link to="/login">You need to log in</Link>
    </div>
  );
  
  const date = parseInt(new Date().getFullYear()) 
  const age =  date - parseInt(new Date(item.birthDate).getFullYear())
  const variantAgeArr = ["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen"]
  let ageAsWord 
  if (age < 1) {
    ageAsWord = "Less than a year"
  } else if (age > 15) {
    ageAsWord = "very old dog"
  } else if (age >= 1 && age <= 15) {
    ageAsWord = variantAgeArr[age - 1]
  } else {
     ageAsWord = "unknown"
  }
<<<<<<< HEAD
  
=======

  const categoryName = item.category;
>>>>>>> 0d11c3dc50f48a7eecaa756ca5494bafbd60a514
  const features = ["Breed", "Place", "Age"];
  return (
    <NoticeItem>
      <CardTumb>
      <div style={{flexGrow: 1}}>
        <ImageWrapp>
          <Image src={item.photo} alt={item.title} />
          <ImageText>
            {categoryName === "sell" && "sell"}
            {categoryName === "for-free" && "in good hands"}
            {categoryName === "lost-found" && "lost/found"}
          </ImageText>
          <HeartButton
            onClick={() => {
              isLoggedIn ? handleAuthorizedClick() : toast(CustomToastWithLink)
            } }
          >
            {isFavorite ? (
              <img src={HeartFull} alt="heartFull" />
            ) : (
              <img src={Heart} alt="heart" />
            )}
          </HeartButton>
          <ToastContainer />
        </ImageWrapp>
        <Title style={{width: "280px"}}>{item.title}</Title>
        <FeaturesList>
<<<<<<< HEAD
                <FeaturesItem>
=======
                {item.breed && <FeaturesItem>
>>>>>>> 0d11c3dc50f48a7eecaa756ca5494bafbd60a514
                  <FeaturesText style={{ width: "50px" }}>Breed:</FeaturesText>
                  <FeaturesText style={{ marginLeft: "40px" }}>
                    {item.breed}
                  </FeaturesText>
<<<<<<< HEAD
                  </FeaturesItem>
=======
                  </FeaturesItem>}
>>>>>>> 0d11c3dc50f48a7eecaa756ca5494bafbd60a514
                  <FeaturesItem>
                  <FeaturesText style={{ width: "50px" }}>Place:</FeaturesText>
                  <FeaturesText style={{ marginLeft: "40px" }}>
                    {item.place}
                  </FeaturesText>
<<<<<<< HEAD
                </FeaturesItem>
                  <FeaturesItem>
=======
                  </FeaturesItem>
                  {item.birthDate && <FeaturesItem>
>>>>>>> 0d11c3dc50f48a7eecaa756ca5494bafbd60a514
                  <FeaturesText style={{ width: "50px" }}>Age:</FeaturesText>
                  <FeaturesText style={{ marginLeft: "40px" }}>
                    {ageAsWord}
                  </FeaturesText>
<<<<<<< HEAD
                </FeaturesItem>

        </FeaturesList>
        <CardButton style={item.userId !== user.id && {marginBottom: '32px'}} onClick={openModal}>Learn more</CardButton>
        {item.userId === user.id && <CardButton>
            Delete
            <HiTrash style={{width: '16px', height: '17px'}}/>  
=======
                  </FeaturesItem>}
        </FeaturesList>
      </div>
          <CardButton style={item.userId !== user._id ? {marginBottom: '32px'} : {marginBottom: '12px'}} onClick={openModal}>Learn more</CardButton>
        {item.userId == user._id && <CardButton onClick={handleDeleteClick}>
            Delete
          <HiTrash width={"16px"} height={"17px"} />  
>>>>>>> 0d11c3dc50f48a7eecaa756ca5494bafbd60a514
          </CardButton>}
      </CardTumb>
      {isModlOpen && <NoticeInfoModal itemId={item._id} isFavorite={isFavorite} onClose={closeModal} />}
    </NoticeItem>
  );
};


