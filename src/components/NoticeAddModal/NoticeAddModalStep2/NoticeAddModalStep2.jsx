import axios from "axios";
import React from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
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
  NoticeAddModalFileLableImg1,
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
  NoticeAddModalFileLableImg2,
} from "./NoticeAddModalStep2.styled";
import { useDispatch } from "react-redux";
import { getOwnNotices } from "../../../redux/notices/operation";
import { refreshUser } from "../../../redux/auth/operations";

import { AnimationLoader } from "../../AnimationLoader/AnimationLoader";

function getNotices() {
  const noticeNext = JSON.parse(window.localStorage.getItem("noticeNextPart"));
  return noticeNext;
}

export const AddNoticeModalStep2 = ({ onClose, isPrev, notice }) => {
  const noticeNext = getNotices();
  const token = useSelector((state) => state.auth.token);
  const filePicker = useRef(null);
  const [isMale, setIsMale] = useState(noticeNext ? noticeNext.sex : "");
  const [isLocation, setIsLocation] = useState(
    noticeNext ? noticeNext.place : ""
  );
  const [isPrice, setIsPrice] = useState(noticeNext ? noticeNext.price : "");
  const [isImage, setIsImage] = useState(noticeNext ? noticeNext.image : null);
  const [isImageName, setIsImageName] = useState(
    noticeNext ? noticeNext.imageName : null
  );
  const [isImageUrl, setIsImageUrl] = useState(
    noticeNext ? noticeNext.imageUrl : null
  );
  const [isComments, setIsComments] = useState(
    noticeNext ? noticeNext.comments : ""
  );
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem(
      "noticeNextPart",
      JSON.stringify({
        image: isImage,
        imageName: isImageName,
        imageUrl: isImageUrl,
        sex: isMale,
        place: isLocation,
        price: isPrice,
        comments: isComments,
      })
    );
  }, [
    isComments,
    isImage,
    isImageName,
    isImageUrl,
    isMale,
    isLocation,
    isPrice,
  ]);

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

  // const handleBackdropClick = (event) => {
  //   if (event.currentTarget === event.target) {
  //     onClose();
  //   }
  // };

  const onChangeMale = (evt) => {
    setIsMale(evt.target.value);
  };

  const onChangeLocation = (evt) => {
    setIsLocation(evt.target.value);
  };

  const onChangePrice = (evt) => {
    setIsPrice(evt.target.value);
  };

  const onChangeImg = (evt) => {
    const { files } = evt.target;
    if (files[0].size > 5242880) {
      return notifyInfo();
    }
    setIsImage(files[0]);
    files[0] && setIsImageName(files[0].name);
    if (files) {
      setIsImageUrl(URL.createObjectURL(files[0]));
    }
  };

  const onChangeComments = (evt) => {
    setIsComments(evt.target.value);
  };

  const handlePick = () => {
    filePicker.current.click();
  };

  const hundleSubmit = async (evt) => {
    setIsLoading(true);
    evt.preventDefault();
    const formData = new FormData();
    formData.append("image", isImage);
    formData.append("sex", isMale);
    formData.append("place", isLocation);
    formData.append("price", isPrice ? isPrice : 1);
    formData.append("comments", isComments);
    formData.append("title", notice.title);
    formData.append("breed", notice.breed);
    formData.append("birthDate", notice.birthDate);
    formData.append("category", notice.category);
    formData.append("name", notice.name);

    try {
      const data = await axios.post(
        `https://pet.tizenmile.keenetic.pro/api/notices/notice`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // dispatch(getOwnNotices(0));
      dispatch(refreshUser())
      localStorage.removeItem("notice");
      localStorage.removeItem("noticeNextPart");

      reset();
      notifySuccess();
      onClose();
      notifySuccess();

      // return data;
    } catch (error) {
      notifyError(error.response.data.message[0].message);
    }
    setIsLoading(false);
  };

  const reset = () => {
    setIsImageUrl(null);
    setIsImageName(null);
    setIsImage(null);
    setIsMale("");
    setIsLocation("");
    setIsPrice("");
    setIsComments("");
  };

  const notifyError = (error) => toast.error(error);
  const notifySuccess = () => toast.success("Notice created!");
  const notifyInfo = () => toast.error("The file must not exceed 5.2 mb!");

  return (
    <>
      <ToastContainer />
      {isLoading ? (
        <AnimationLoader />
      ) : (
        <>
          <AddNoticeModalContainerSecond name="newForm" onSubmit={hundleSubmit}>
            <AddNoticeModalBtn type="button" onClick={onClose}>
              <AddNoticeModalBtnImg
                src={close_menu_icon}
              ></AddNoticeModalBtnImg>
            </AddNoticeModalBtn>
            <AddNoticeModalTitle>Add pet</AddNoticeModalTitle>
            <NoticeAddModalTextSecond>The sex*:</NoticeAddModalTextSecond>
            <NoticeModalImgSexList>
              <NoticeModalImgSexListItem>
                <NoticeAddModalSexInput
                  type="radio"
                  name="sex"
                  id="male"
                  checked={isMale === "male" ? true : false}
                  value="male"
                  onChange={onChangeMale}
                ></NoticeAddModalSexInput>
                <NoticeModalImgListSexLable htmlFor="male">
                  <NoticeAddModalmgSex src={male}></NoticeAddModalmgSex>
                  Male
                </NoticeModalImgListSexLable>
              </NoticeModalImgSexListItem>
              <NoticeModalImgSexListItem>
                <NoticeAddModalSexInput
                  type="radio"
                  name="sex"
                  id="female"
                  checked={isMale === "female" ? true : false}
                  value="female"
                  onChange={onChangeMale}
                ></NoticeAddModalSexInput>
                <NoticeModalImgListSexLable htmlFor="female">
                  <NoticeAddModalmgSex src={female}></NoticeAddModalmgSex>
                  Female
                </NoticeModalImgListSexLable>
              </NoticeModalImgSexListItem>
            </NoticeModalImgSexList>
            <NoticeAddModalInputList>
              <NoticeAddModalInputListItem>
                <NoticeAddModalLabel>
                  <p>
                    Location<span style={{ color: "#F59256" }}>*</span>:
                  </p>
                  <AddNoticeModalInput
                    type=""
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
                    Price<span style={{ color: "#F59256" }}>*</span>:
                    <AddNoticeModalInput
                      type="number"
                      pattern="[1-9]*[.]?[1-9]+"
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
                  <NoticeAddModalFileLableBtn
                    type="button"
                    onClick={handlePick}
                  >
                    {isImageUrl ? (
                      <NoticeAddModalFileLableImg2
                        src={isImageUrl}
                      ></NoticeAddModalFileLableImg2>
                    ) : (
                      <NoticeAddModalFileLableImg1
                        src={plus}
                      ></NoticeAddModalFileLableImg1>
                    )}
                  </NoticeAddModalFileLableBtn>
                  <NoticeAddModalFileInput
                    type="file"
                    name="image"
                    ref={filePicker}
                    accept="image/*,.png,.jpg,.gif,.web"
                    onChange={onChangeImg}
                  />
                </NoticeAddModalFileLable>
              </NoticeAddModalInputListItem>
              <NoticeAddModalInputListItem>
                <NoticeAddModalTextAreaLabel>
                  <p style={{ fontSize: "18px" }}>
                    Comments<span style={{ color: "#F59256" }}>*</span>:
                  </p>

                  <NoticeAddModalTextArea
                    type="text"
                    minlength="8"
                    maxlength="120"
                    required
                    placeholder="Type breed"
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
                <NoticeAddModalBottomBtn
                  style={{ color: "#fff", backgroundColor: "#F59256" }}
                  type="submit"
                >
                  Done
                </NoticeAddModalBottomBtn>
              </NoticeAddModalBtnListItem>
            </NoticeAddModalBtnList>
          </AddNoticeModalContainerSecond>
        </>
      )}
    </>
  );
};
