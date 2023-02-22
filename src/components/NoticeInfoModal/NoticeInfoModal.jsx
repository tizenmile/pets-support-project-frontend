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
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";

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
  // const isLoggedIn = true

  const [notice, setNotice] = useState(null);
  const [isFav, setIsFav] = useState(isFavorite);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(
      isFav ? delNoticeFromFavorite(itemId) : addNoticeToFavorite(itemId)
    );
    setIsFav((prev) => !prev);
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
    let dd = new Date(birthDate).getDate();
    if (dd < 10) dd = "0" + dd;
    let mm = new Date(birthDate).getMonth();
    if (mm < 10) mm = "0" + mm;
    let yy = new Date(birthDate).getFullYear();
    if (yy < 10) yy = "0" + yy;
    return dd + "." + mm + "." + yy;
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
              <NoticeModalListItem>
                <NoticeModalTopText>Name:</NoticeModalTopText>
                <NoticeModalBottomText>
                  {notice.notice.name}
                </NoticeModalBottomText>
              </NoticeModalListItem>

              <NoticeModalListItem>
                <NoticeModalTopText>Birthday:</NoticeModalTopText>
                <NoticeModalBottomText>
                  {birthDate(notice.notice.birthDate)}
                </NoticeModalBottomText>
              </NoticeModalListItem>
              <NoticeModalListItem>
                <NoticeModalTopText>Breed:</NoticeModalTopText>
                <NoticeModalBottomText>
                  {notice.notice.breed}
                </NoticeModalBottomText>
              </NoticeModalListItem>
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
