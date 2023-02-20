import axios from "axios";
import { useEffect, useState } from "react";
import { close_menu_icon, heart, heartFull } from "../../media";
import { ModalBackdrop } from "../ModalBackdrop/ModalBackdrop";
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

export const NoticeInfoModal = ({ onClose, itemId }) => {
  const [notice, setNotice] = useState(null);

  useEffect(() => {
    const info = axios
      .get(`https://pet.tizenmile.keenetic.pro/api/notices/notice/${itemId}`)
      .then((info) => {
        const data = info.data.data;
        console.log(data);
        setNotice(data);
      });
  }, []);

  if (!notice) {
    return;
  }
  console.log(notice.notice.favorite);

  return (
    <ModalBackdrop>
      <NoticeModalContainer>
        <NoticeCloseModalButton onClick={onClose}>
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
                  {notice.notice.birthDate}
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
                  {notice.notice.location}
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
                    {notice.notice.price}
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
          <NoticeModalAddToFavoriteBtn>
            add to
            <NoticeModalAddToFavoriteBtnImage
              src={notice.notice.favorite ? heartFull : heart}
              alt={notice.notice.favorite ? "heartFull" : "heart"}
            ></NoticeModalAddToFavoriteBtnImage>
          </NoticeModalAddToFavoriteBtn>
          <NoticeContactBtn href={"tel:" + notice.user.mobile}>
            contact
          </NoticeContactBtn>
        </NoticeModalButtonContainer>
        <link />
      </NoticeModalContainer>
    </ModalBackdrop>
  );
};
