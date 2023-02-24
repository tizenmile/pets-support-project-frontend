import axios from "axios";
import { useRef, useState } from "react";
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

// const token = {
//   set(token) {
//     axios.defaults.headers.common.Authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2VmZmY5NTAyOWVmNjIxMTZmNmQ2YmEiLCJpYXQiOjE2NzcxNTQ3OTQsImV4cCI6MTY3NzE5MDc5NH0.nsr1hgbQscCgatXGScxuivU5RcHsX9e-I3OaGiNjMnE`;
//   },
//   unset() {
//     axios.defaults.headers.common.Authorization = ``;
//   },
// };

export const AddNoticeModalStep2 = ({ onClose, isPrev, notice }) => {
  const filePicker = useRef(null);
  const [isMale, setIsMale] = useState("");
  const [isLocation, setIsLocation] = useState("");
  const [isPrice, setIsPrice] = useState("");
  const [isImage, setIsImage] = useState(null);
  const [isImageName, setIsImageName] = useState(null);
  const [isImageUrl, setIsImageUrl] = useState(null);
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

  const onChangeImg = (evt) => {
    const { files } = evt.target;
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

    const data = await axios.post(
      `http://localhost:3002/api/notices/notice`,
      formData,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2VmZmY5NTAyOWVmNjIxMTZmNmQ2YmEiLCJpYXQiOjE2NzcxNjczMjAsImV4cCI6MTY3NzIwMzMyMH0.mdIhH5Eswm5yS7M1EAFVp5EGJCwBcbUaybMjx3cORPs",
        },
      }
    );
    console.log(formData);

    console.log(data);
  };

  return (
    <AddNoticeModalContainerSecond name="newForm" onSubmit={hundleSubmit}>
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
                type="number"
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
            <NoticeAddModalFileLableBtn type="button" onClick={handlePick}>
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
