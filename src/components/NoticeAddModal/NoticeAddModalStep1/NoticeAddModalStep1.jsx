import { ToastContainer, toast } from "react-toastify";
import { useEffect, useState } from "react";
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

function getNotices() {
  const notice = JSON.parse(window.localStorage.getItem("notice"));
  return notice;
}

export const AddNoticeModalStep1 = ({ onClose, isNext, onSubmit }) => {
  const notice = getNotices();

  const [isCategory, setIsCategory] = useState(
    notice ? notice.category : "sell"
  );
  const [isTitle, setIsTitle] = useState(notice ? notice.title : "");
  const [isPetName, setIsPetName] = useState(notice ? notice.name : "");
  const [isBirthDate, setIsBirthDate] = useState(
    notice ? notice.birthDate : ""
  );
  const [isBreed, setIsBreed] = useState(notice ? notice.breed : "");

  useEffect(() => {
    localStorage.setItem(
      "notice",
      JSON.stringify({
        title: isTitle,
        breed: isBreed,
        name: isPetName,
        birthDate: isBirthDate,
        category: isCategory,
      })
    );
  }, [isTitle, isBreed, isPetName, isBirthDate, isCategory]);

  const onChangeCategory = (evt) => {
    setIsCategory(evt.target.value);
  };
  const onChangeTitle = (evt) => {
    const { value } = evt.target;
    setIsTitle(value);
  };
  const onChangePetName = (evt) => {
    setIsPetName(evt.target.value);
  };
  const onChangeBirthDate = (evt) => {
    const { value } = evt.target;
    if (Date.parse(value) > Date.now()) {
      notifyError();
      return;
    } else {
      setIsBirthDate(value);
    }
  };
  const onChangeBreed = (evt) => {
    setIsBreed(evt.target.value);
  };

  const getAllField = () => {
    const notice = {
      title: isTitle,
      breed: isBreed,
      name: isPetName,
      birthDate: isBirthDate,
      category: isCategory,
    };
    onSubmit(notice);
    isNext();
  };

  const notifyError = () =>
    toast.error("Wrong date!!!! Are you from the future??");

  return (
    <>
      <ToastContainer />
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
              checked={isCategory === "lost-found" ? true : false}
              value="lost-found"
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
              checked={isCategory === "for-free" ? true : false}
              value="for-free"
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
              checked={isCategory === "sell" ? true : false}
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
              <p>
                Tittle of ad<span style={{ color: "#F59256" }}>*</span>:
              </p>

              <AddNoticeModalInput
                type="text"
                minlength="2"
                maxlength="48"
                required
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
                minlength="2"
                maxlength="16"
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
                type="text"
                minlength="2"
                maxlength="24"
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
    </>
  );
};
