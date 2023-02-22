import { useState } from "react";
import { close_menu_icon, female, male, plus } from "../../../media";
import {
  AddNoticeModalBtn,
  AddNoticeModalBtnImg,
  AddNoticeModalInput,
  AddNoticeModalTitle,
  NoticeAddModalBottomBtn,
  NoticeAddModalBtnList,
  NoticeAddModalBtnListItem,
  NoticeAddModalInputList,
  NoticeAddModalInputListItem,
  NoticeAddModalLabel,
} from "../NoticeAddModalStep1/NoticeAddModalStep1.styled";
import {
  AddNoticeModalContainerSecond,
  NoticeAddModalFileInput,
  NoticeAddModalFileLableImg,
  NoticeAddModalmgSex,
  NoticeAddModalTextArea,
  NoticeAddModalTextAreaLabel,
  NoticeAddModalTextSecond,
  NoticeModalImgSexList,
  NoticeModalImgSexListItem,
  NoticeModalImgListSexLable,
  NoticeAddModalSexInput,
  NoticeAddModalFileLableBtn,
  NoticeAddModalFileLable,
} from "./NoticeAddModalStep2.styled";

export const AddNoticeModalStep2 = ({ onClose, isPrev, notice }) => {
  const [isMale, setIsMale] = useState("");
  const [isLocation, setIsLocation] = useState("");
  const [isPrice, setIsPrice] = useState("");
  const [isImage, setIsImage] = useState(null);
  const [isComments, setIsComments] = useState("");

  const onChangeMale = (evt) => {
    setIsMale(evt.target.value);
  };

  const onChangeLocation = (evt) => {
    setIsLocation(evt.target.value);
  };

  const onChangePrice = (evt) => {
    setIsPrice(evt.target.value);
  };

  const onChangeImage = (evt) => {
    setIsImage(evt.target.value);
  };

  const onChangeComments = (evt) => {
    setIsComments(evt.target.value);
  };

  const hundleSubmit = (evt) => {
    evt.preventDefault();
    const currentNotice = {
      ...notice,
      male: isMale,
      location: isLocation,
      price: isPrice,
      image: isImage,
      comments: isComments,
    };
    console.log(currentNotice);
  };

  return (
    <AddNoticeModalContainerSecond onSubmit={hundleSubmit}>
      <AddNoticeModalBtn type="button" onClick={onClose}>
        <AddNoticeModalBtnImg src={close_menu_icon}></AddNoticeModalBtnImg>
      </AddNoticeModalBtn>
      <AddNoticeModalTitle>Add pet</AddNoticeModalTitle>
      <NoticeAddModalTextSecond>The sex*:</NoticeAddModalTextSecond>
      <NoticeModalImgSexList>
        <NoticeModalImgSexListItem>
          <NoticeAddModalmgSex src={male}></NoticeAddModalmgSex>
          <NoticeAddModalSexInput
            type="radio"
            name="sex"
            id="male"
            value="male"
            onChange={onChangeMale}
          ></NoticeAddModalSexInput>
          <NoticeModalImgListSexLable htmlFor="male">
            Male
          </NoticeModalImgListSexLable>
        </NoticeModalImgSexListItem>
        <NoticeModalImgSexListItem>
          <NoticeAddModalmgSex src={female}></NoticeAddModalmgSex>
          <NoticeAddModalSexInput
            type="radio"
            name="sex"
            id="female"
            value="female"
            onChange={onChangeMale}
          ></NoticeAddModalSexInput>
          <NoticeModalImgListSexLable htmlFor="female">
            Female
          </NoticeModalImgListSexLable>
        </NoticeModalImgSexListItem>
      </NoticeModalImgSexList>
      <NoticeAddModalInputList>
        <NoticeAddModalInputListItem>
          <NoticeAddModalLabel>
            Location*:
            <AddNoticeModalInput
              placeholder="Type location"
              name="place"
              value={isLocation}
              onChange={onChangeLocation}
            />
          </NoticeAddModalLabel>
        </NoticeAddModalInputListItem>
        {notice.category === "sell" && (
          <NoticeAddModalInputListItem>
            <NoticeAddModalLabel>
              Price*:
              <AddNoticeModalInput
                placeholder="Type price"
                name="price"
                value={isPrice}
                onChange={onChangePrice}
              />
            </NoticeAddModalLabel>
          </NoticeAddModalInputListItem>
        )}

        <NoticeAddModalInputListItem>
          <NoticeAddModalFileLable>
            Load the pet’s image:
            <NoticeAddModalFileLableBtn type="button">
              <NoticeAddModalFileLableImg
                src={plus}
              ></NoticeAddModalFileLableImg>
            </NoticeAddModalFileLableBtn>
            <NoticeAddModalFileInput
              type="file"
              name="image"
              onChange={onChangeImage}
            />
          </NoticeAddModalFileLable>
        </NoticeAddModalInputListItem>
        <NoticeAddModalInputListItem>
          <NoticeAddModalTextAreaLabel>
            Comments:
            <NoticeAddModalTextArea
              placeholder="Type comment"
              name="comments"
              value={isComments}
              onChange={onChangeComments}
            ></NoticeAddModalTextArea>
          </NoticeAddModalTextAreaLabel>
        </NoticeAddModalInputListItem>
      </NoticeAddModalInputList>
      <NoticeAddModalBtnList>
        <NoticeAddModalBtnListItem>
          <NoticeAddModalBottomBtn onClick={isPrev}>
            Back
          </NoticeAddModalBottomBtn>
        </NoticeAddModalBtnListItem>
        <NoticeAddModalBtnListItem>
          <NoticeAddModalBottomBtn type="submit">Done</NoticeAddModalBottomBtn>
        </NoticeAddModalBtnListItem>
      </NoticeAddModalBtnList>
    </AddNoticeModalContainerSecond>
  );
};
