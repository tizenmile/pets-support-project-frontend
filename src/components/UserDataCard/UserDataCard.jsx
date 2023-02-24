import { UserDataItem } from "../UserDataItem/UserDataItem";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  selectUserData,
  selectIsLoading,
} from "../../redux/userAccount/useerSelector";
import { useDispatch } from "react-redux";
import { updateUserAvatar } from "../../redux/userAccount/operations";
import { fetchUserData } from "../../redux/userAccount/operations";
import {
  UserBlock,
  BoxImg,
  EditImgBtn,
  IconEditImgBtn,
  ImgUser,
  BoxInfo,
  BoxTitle,
  Title,
  Block,
  UserForms,
  ImageContainer,
  Label,
} from "./userDataCard.styled";

import AnimationLoader from "../AnimationLoader";
export const UserDataCard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);

  const data = useSelector(selectUserData);
  const { name, email, mobile, birthday, city, avatarURL } = data;
  const [newUserAvatar, setNewUserAvatar] = useState();
  const [previewImageUrl, setPreviewImageUrl] = useState("");
  const [isBtnDisabled, setIsBtnDisabled] = useState(false);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    setPreviewImageUrl(avatarURL);
  });

  const handleAvatarChange = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
      reader.onloadend = () => {
        const image = reader.result;
        if (
          image.includes("image/png") ||
          image.includes("image/jpg") ||
          image.includes("image/jpeg")
        ) {
          setNewUserAvatar(image);
          const file = new FormData();
          file.append("image", e.target.files[0]);
          dispatch(updateUserAvatar(file));
        }
      };
    }
  };

  return (
    <UserBlock>
      {isLoading ? (
        <AnimationLoader />
      ) : (
        <>
          <BoxImg>
            {newUserAvatar ? (
              <ImgUser id="img_container" src={newUserAvatar} alt="avatar" />
            ) : (
              <ImgUser id="img_container" src={previewImageUrl} alt="avatar" />
            )}

            <EditImgBtn>
              <ImageContainer>
                <form>
                  <input
                    name="userAvatar"
                    type="file"
                    id="userAvatar"
                    accept="image/jpg, image/png, image/jpeg, image/bmp"
                    onChange={handleAvatarChange}
                  />
                </form>
              </ImageContainer>
              <Label htmlFor="userAvatar">
                <IconEditImgBtn />
                Edit photo
              </Label>
            </EditImgBtn>
          </BoxImg>

          <BoxInfo>
            <BoxTitle>
              <Block>
                <UserForms>
                  <BoxTitle>
                    <Title>Name:</Title>
                    <Block>
                      <UserDataItem
                        isBtnDisabled={isBtnDisabled}
                        setIsBtnDisabled={setIsBtnDisabled}
                        defaultValue={name}
                        name="name"
                        type={"text"}
                      />
                    </Block>
                  </BoxTitle>
                  <BoxTitle>
                    <Title>Email:</Title>
                    <Block>
                      <UserDataItem
                        isBtnDisabled={isBtnDisabled}
                        setIsBtnDisabled={setIsBtnDisabled}
                        defaultValue={email}
                        name="email"
                        type={"email"}
                      />
                    </Block>
                  </BoxTitle>
                  <BoxTitle>
                    <Title>Birthday:</Title>
                    <Block>
                      <UserDataItem
                        isBtnDisabled={isBtnDisabled}
                        setIsBtnDisabled={setIsBtnDisabled}
                        defaultValue={birthday}
                        name="birthday"
                        type={"date"}
                        min="1940-01-01"
                      />
                    </Block>
                  </BoxTitle>
                  <BoxTitle>
                    <Title>Phone:</Title>
                    <Block>
                      <UserDataItem
                        isBtnDisabled={isBtnDisabled}
                        setIsBtnDisabled={setIsBtnDisabled}
                        defaultValue={mobile}
                        name="mobile"
                        type={"tel"}
                      />
                    </Block>
                  </BoxTitle>
                  <BoxTitle>
                    <Title>City:</Title>
                    <Block>
                      <UserDataItem
                        isBtnDisabled={isBtnDisabled}
                        setIsBtnDisabled={setIsBtnDisabled}
                        defaultValue={city}
                        name="city"
                        type={"text"}
                      />
                    </Block>
                  </BoxTitle>
                </UserForms>
              </Block>
            </BoxTitle>
          </BoxInfo>
        </>
      )}
    </UserBlock>
  );
};
