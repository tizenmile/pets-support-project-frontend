import { UserDataItem } from "../UserDataItem/UserDataItem";
import { useState } from "react";
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
export const UserDataCard = () => {
  const [newUserAvatar, setNewUserAvatar] = useState();
  const [previewImageUrl, setPreviewImageUrl] = useState(null);
  const [isBtnDisabled, setIsBtnDisabled] = useState(false);

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewImageUrl(reader.result);
      };
      reader.readAsDataURL(file);
      setNewUserAvatar(file);
    }
  };

  return (
    <UserBlock>
      <>
        <BoxImg>
          <ImgUser
            id="img_container"
            src={
              previewImageUrl ||
              "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
            }
            alt="avatar"
          />

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
                      defaultValue={"Rodri"}
                      name="userName"
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
                      defaultValue={"rodri@mail.com"}
                      name="email"
                      type={"email"}
                    />
                  </Block>
                </BoxTitle>
                {/* <BoxTitle>
                  <Title>Birthday:</Title>
                  <Block>
                    <UserDataItem
                      isBtnDisabled={isBtnDisabled}
                      setIsBtnDisabled={setIsBtnDisabled}
                      defaultValue={"16.06.1995"}
                      name="birthday"
                      type={"date"}
                      min="1940-01-01"
                    />
                  </Block>
                </BoxTitle> */}
                <BoxTitle>
                  <Title>Phone:</Title>
                  <Block>
                    <UserDataItem
                      isBtnDisabled={isBtnDisabled}
                      setIsBtnDisabled={setIsBtnDisabled}
                      defaultValue={"+380635973039"}
                      name="phone"
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
                      defaultValue={"Liverpool"}
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
    </UserBlock>
  );
};
