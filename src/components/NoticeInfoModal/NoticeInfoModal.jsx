import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { close_menu_icon, heart, heartFull } from "../../media";
import { ModalBackdrop } from "../ModalBackdrop/ModalBackdrop";
import {
  addNoticeToFavorite,
  delNoticeFromFavorite,
} from "../../redux/notices/operation";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import {
  getStatusFilter,
} from "../../redux/notices/selector";
import { setFavNotices } from "../../redux/notices/noticesSlice";

import {
  NoticeImgContainer,
  NoticeCloseModalButton,
  NoticeModalCategory,
  NoticeModalContainer,
  NoticeModalGeneralContainer,
  NoticeModalImg,
  NoticeModalTitle,
  NoticeModalTopText,
  NoticeModalBottomText,
  NoticeModalListItem,
  NoticeModalList,
  NoticeModalComments,
  NoticeModalCommentsText,
  NoticeModalButtonContainer,
  NoticeModalAddToFavoriteBtn,
  NoticeContactBtn,
  NoticeModalAddToFavoriteBtnImage,
  NoticeCloseModalButtonImg,
} from "./NoticeInfoModal.styled";

export const NoticeInfoModal = ({ onClose, itemId, isFavorite }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const [notice, setNotice] = useState(null);
  const [isFav, setIsFav] = useState(isFavorite);
  const dispatch = useDispatch();

  const handleClick = () => {
    setIsFav((prev) => !prev);
     dispatch(
      isFav ? delNoticeFromFavorite(itemId) : addNoticeToFavorite(itemId)
    );
    
  };

  const CustomToastWithLink = () => (
    <div>
      <Link to="/login">You need to log in</Link>
    </div>
  );

  useEffect(() => {
    const info = axios
      .get(`https://pet.tizenmile.keenetic.pro/api/notices/notice/${itemId}`)
      .then((info) => {
        const data = info.data.data;
        setNotice(data);
      });
  }, []);

  if (!notice) {
    return;
  }

  const birthDate = (birthDate) => {
    console.log(notice.notice.birthDate);
    const dateString = new Date(birthDate);
    const day = dateString.getDate().toString().padStart(2, "0");
    const month = (dateString.getMonth() + 1).toString().padStart(2, "0");
    const year = dateString.getFullYear();

  return `${day}.${month}.${year}`;
  };

  return (
    <ModalBackdrop>
      <NoticeModalContainer>
        <NoticeCloseModalButton onClick={() => onClose(isFav)}>
          <NoticeCloseModalButtonImg
            src={close_menu_icon}
            alt="close_menu_icon"
          ></NoticeCloseModalButtonImg>
        </NoticeCloseModalButton>
        <NoticeModalGeneralContainer>
          <NoticeImgContainer>
            <NoticeModalImg src={notice.notice.photo} />
            <NoticeModalCategory>{notice.notice.category}</NoticeModalCategory>
          </NoticeImgContainer>

          <div>
            <NoticeModalTitle>{notice.notice.title}</NoticeModalTitle>
            <NoticeModalList>
              {notice.notice.name && <NoticeModalListItem>
                <NoticeModalTopText>Name:</NoticeModalTopText>
                <NoticeModalBottomText>
                  {notice.notice.name}
                </NoticeModalBottomText>
              </NoticeModalListItem>}

              {notice.notice.birthDate && <NoticeModalListItem>
                <NoticeModalTopText>Birthday:</NoticeModalTopText>
                <NoticeModalBottomText>
                  {birthDate(notice.notice.birthDate)}
                </NoticeModalBottomText>
              </NoticeModalListItem>}
              {notice.notice.breed && <NoticeModalListItem>
                <NoticeModalTopText>Breed:</NoticeModalTopText>
                <NoticeModalBottomText>
                  {notice.notice.breed}
                </NoticeModalBottomText>
              </NoticeModalListItem>}
              <NoticeModalListItem>
                <NoticeModalTopText>Place:</NoticeModalTopText>
                <NoticeModalBottomText>
                  {notice.notice.place}
                </NoticeModalBottomText>
              </NoticeModalListItem>
              <NoticeModalListItem>
                <NoticeModalTopText>The sex:</NoticeModalTopText>
                <NoticeModalBottomText>
                  {notice.notice.sex}
                </NoticeModalBottomText>
              </NoticeModalListItem>
              <NoticeModalListItem>
                <NoticeModalTopText>UserName:</NoticeModalTopText>
                <NoticeModalBottomText>
                  {notice.user.name}
                </NoticeModalBottomText>
              </NoticeModalListItem>
              <NoticeModalListItem>
                <NoticeModalTopText>Email:</NoticeModalTopText>
                <NoticeModalBottomText>
                  {notice.user.email}
                </NoticeModalBottomText>
              </NoticeModalListItem>
              <NoticeModalListItem>
                <NoticeModalTopText>Phone:</NoticeModalTopText>
                <NoticeModalBottomText>
                  {notice.user.mobile}
                </NoticeModalBottomText>
              </NoticeModalListItem>

              {notice.notice.category === "sell" && (
                <NoticeModalListItem>
                  <NoticeModalTopText>Price:</NoticeModalTopText>
                  <NoticeModalBottomText>
                    {`${notice.notice.price}$`}
                  </NoticeModalBottomText>
                </NoticeModalListItem>
              )}
            </NoticeModalList>
          </div>
        </NoticeModalGeneralContainer>

        <NoticeModalComments>
          comments
          <NoticeModalCommentsText>
            : {notice.notice.comments}
          </NoticeModalCommentsText>
        </NoticeModalComments>
        <NoticeModalButtonContainer>
          <NoticeModalAddToFavoriteBtn
            onClick={() => {
              isLoggedIn ? handleClick() : toast(CustomToastWithLink);
            }}
          >
            {!isFav ? "add to" : "del from"}
            <NoticeModalAddToFavoriteBtnImage
              src={isFav ? heartFull : heart}
              alt={isFav ? "heartFull" : "heart"}
            ></NoticeModalAddToFavoriteBtnImage>
          </NoticeModalAddToFavoriteBtn>
          <ToastContainer />
          <NoticeContactBtn href={"tel:" + notice.user.mobile}>
            contact
          </NoticeContactBtn>
        </NoticeModalButtonContainer>
        <link />
      </NoticeModalContainer>
    </ModalBackdrop>
  );
};
