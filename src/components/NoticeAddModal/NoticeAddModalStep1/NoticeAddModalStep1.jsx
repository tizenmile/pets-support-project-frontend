import { useState } from "react";
import { date } from "yup";
import { close_menu_icon } from "../../../media";
import {
  AddNoticeModalBtn,
  AddNoticeModalBtnImg,
  AddNoticeModalContainer,
  NoticeAddModalBtnList,
  NoticeAddModalBtnListItem,
  NoticeAddModalBottomBtn,
  NoticeAddModalInputListItem,
  AddNoticeModalInput,
  AddNoticeModalText,
  AddNoticeModalTitle,
  NoticeAddModalInputList,
  NoticeAddModalLabel,
  NoticeAddModalLinkList,
  NoticeAddModalLinkListItem,
  NoticeAddModalRadioInput,
  NoticeAddModalRadioLable,
} from "./NoticeAddModalStep1.styled";

export const AddNoticeModalStep1 = ({ onClose, isNext, onSubmit }) => {
  const [isCategory, setIsCategory] = useState("sell");
  const [isTitle, setIsTitle] = useState("");
  const [isPetName, setIsPetName] = useState("");
  const [isBirthDate, setIsBirthDate] = useState("");
  const [isBreed, setIsBreed] = useState("");

  const onChangeCategory = (evt) => {
    setIsCategory(evt.target.value);
  };
  const onChangeTitle = (evt) => {
    setIsTitle(evt.target.value);
  };
  const onChangePetName = (evt) => {
    setIsPetName(evt.target.value);
  };
  const onChangeBirthDate = (evt) => {
    setIsBirthDate(evt.target.value);
  };
  const onChangeBreed = (evt) => {
    setIsBreed(evt.target.value);
  };

  const getAllField = () => {
    const birthDate = isBirthDate
      ? isBirthDate.split("-").reverse().join(".")
      : "unknown";
    const notice = {
      title: isTitle,
      breed: isBreed,
      name: isPetName,
      birthDate,
      category: isCategory,
    };
    onSubmit(notice);
    isNext();
  };

  return (
    <AddNoticeModalContainer>
      <AddNoticeModalBtn type="button" onClick={onClose}>
        <AddNoticeModalBtnImg src={close_menu_icon}></AddNoticeModalBtnImg>
      </AddNoticeModalBtn>
      <AddNoticeModalTitle>Add pet</AddNoticeModalTitle>
      <AddNoticeModalText>
        Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,
        consectetur
      </AddNoticeModalText>
      <NoticeAddModalLinkList>
        <NoticeAddModalLinkListItem>
          <NoticeAddModalRadioInput
            type="radio"
            name="category"
            value="lost/found"
            id="lost/found"
            onChange={onChangeCategory}
          />
          <NoticeAddModalRadioLable htmlFor="lost/found">
            lost/found
          </NoticeAddModalRadioLable>
        </NoticeAddModalLinkListItem>
        <NoticeAddModalLinkListItem>
          <NoticeAddModalRadioInput
            type="radio"
            name="category"
            value="in good hands"
            id="inGoodHands"
            onChange={onChangeCategory}
          />
          <NoticeAddModalRadioLable htmlFor="inGoodHands">
            in good hands
          </NoticeAddModalRadioLable>
        </NoticeAddModalLinkListItem>
        <NoticeAddModalLinkListItem>
          <NoticeAddModalRadioInput
            type="radio"
            name="category"
            defaultChecked
            value="sell"
            id="sell"
            onChange={onChangeCategory}
          />
          <NoticeAddModalRadioLable htmlFor="sell">
            sell
          </NoticeAddModalRadioLable>
        </NoticeAddModalLinkListItem>
      </NoticeAddModalLinkList>
      <NoticeAddModalInputList>
        <NoticeAddModalInputListItem>
          <NoticeAddModalLabel>
            Tittle of ad*:
            <AddNoticeModalInput
              type="text"
              placeholder="Type name"
              name="title"
              value={isTitle}
              onChange={onChangeTitle}
            />
          </NoticeAddModalLabel>
        </NoticeAddModalInputListItem>
        <NoticeAddModalInputListItem>
          <NoticeAddModalLabel>
            Name pet:
            <AddNoticeModalInput
              type="text"
              placeholder="Type name pet"
              name="name"
              value={isPetName}
              onChange={onChangePetName}
            />
          </NoticeAddModalLabel>
        </NoticeAddModalInputListItem>
        <NoticeAddModalInputListItem>
          <NoticeAddModalLabel>
            Date of birth:
            <AddNoticeModalInput
              type="date"
              placeholder="Type date of birth"
              name="birthDate"
              value={isBirthDate}
              onChange={onChangeBirthDate}
            />
          </NoticeAddModalLabel>
        </NoticeAddModalInputListItem>
        <NoticeAddModalInputListItem>
          <NoticeAddModalLabel>
            Breed:
            <AddNoticeModalInput
              placeholder="Type breed"
              name="breed"
              value={isBreed}
              onChange={onChangeBreed}
            />
          </NoticeAddModalLabel>
        </NoticeAddModalInputListItem>
      </NoticeAddModalInputList>
      <NoticeAddModalBtnList>
        <NoticeAddModalBtnListItem>
          <NoticeAddModalBottomBtn type="button" onClick={onClose}>
            Cancel
          </NoticeAddModalBottomBtn>
        </NoticeAddModalBtnListItem>
        <NoticeAddModalBtnListItem>
          <NoticeAddModalBottomBtn type="button" onClick={getAllField}>
            Next
          </NoticeAddModalBottomBtn>
        </NoticeAddModalBtnListItem>
      </NoticeAddModalBtnList>
    </AddNoticeModalContainer>
  );
};
