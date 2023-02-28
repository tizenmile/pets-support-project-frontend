import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { close_menu_icon, heart, heartFull } from "../../media";
import { ModalBackdrop } from "../ModalBackdrop/ModalBackdrop";
import { transformDate } from "../../helpers/transformDate";
import {
  addNoticeToFavorite,
  delNoticeFromFavorite,
  getFavNotices,
} from "../../redux/notices/operation";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { getStatusFilter, selectPage } from "../../redux/notices/selector";
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
  NoticeInfoModalLink,
} from "./NoticeInfoModal.styled";
import { AllModalWrapper } from "../NoticeAddModal/NoticeAddModal.styled";

export const NoticeInfoModal = ({ onClose, itemId, isFavorite }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const statusFilter = useSelector(getStatusFilter);
  const page = useSelector(selectPage);
  const [notice, setNotice] = useState(null);
  const [isFav, setIsFav] = useState(isFavorite);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = (event) => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

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

  return (
    <ModalBackdrop>
      <AllModalWrapper onClick={handleBackdropClick}>
        <NoticeModalContainer>
          <NoticeCloseModalButton
            onClick={() => {
              onClose(isFav);
              if (statusFilter === "fav-notice") {
                dispatch(getFavNotices(page));
              }
            }}
          >
            <NoticeCloseModalButtonImg
              src={close_menu_icon}
              alt="close_menu_icon"
            ></NoticeCloseModalButtonImg>
          </NoticeCloseModalButton>
          <NoticeModalGeneralContainer>
            <NoticeImgContainer>
              <NoticeModalImg src={notice.notice.photo} />
              <NoticeModalCategory>
                {notice.notice.category}
              </NoticeModalCategory>
            </NoticeImgContainer>

            <div>
              <NoticeModalTitle>{notice.notice.title}</NoticeModalTitle>
              <NoticeModalList>
                {notice.notice.name && (
                  <NoticeModalListItem>
                    <NoticeModalTopText>Name:</NoticeModalTopText>
                    <NoticeModalBottomText>
                      {notice.notice.name}
                    </NoticeModalBottomText>
                  </NoticeModalListItem>
                )}

                {notice.notice.birthDate && (
                  <NoticeModalListItem>
                    <NoticeModalTopText>Birthday:</NoticeModalTopText>
                    <NoticeModalBottomText>
                      {transformDate(notice.notice.birthDate)}
                    </NoticeModalBottomText>
                  </NoticeModalListItem>
                )}
                {notice.notice.breed && (
                  <NoticeModalListItem>
                    <NoticeModalTopText>Breed:</NoticeModalTopText>
                    <NoticeModalBottomText>
                      {notice.notice.breed}
                    </NoticeModalBottomText>
                  </NoticeModalListItem>
                )}
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
                  <NoticeModalTopText>Owner:</NoticeModalTopText>
                  <NoticeModalBottomText>
                    {notice.user.name}
                  </NoticeModalBottomText>
                </NoticeModalListItem>
                <NoticeModalListItem>
                  <NoticeModalTopText>Email:</NoticeModalTopText>
                  <NoticeInfoModalLink href={"mailto:" + notice.user.email}>
                    {notice.user.email}
                  </NoticeInfoModalLink>
                </NoticeModalListItem>
                <NoticeModalListItem>
                  <NoticeModalTopText>Phone:</NoticeModalTopText>
                  <NoticeInfoModalLink href={"tel:" + notice.user.mobile}>
                    {notice.user.mobile}
                  </NoticeInfoModalLink>
                </NoticeModalListItem>

                {notice.notice.category === "sell" && (
                  <NoticeModalListItem>
                    <NoticeModalTopText>Price:</NoticeModalTopText>
                    <NoticeModalBottomText>
                      {`${notice.notice.price} ₴`}
                    </NoticeModalBottomText>
                  </NoticeModalListItem>
                )}
              </NoticeModalList>
            </div>
          </NoticeModalGeneralContainer>

          <NoticeModalComments>
            Comments
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
      </AllModalWrapper>
    </ModalBackdrop>
  );
};
