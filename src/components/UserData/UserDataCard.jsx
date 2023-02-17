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
  Form,
  ImageContainer,
  Label,
} from "./userDataCard.styled";
export const UserDataCard = () => {
  const [isChangeUserAvatar, setIsChangeUserAvatar] = useState(false);
  const [newUserAvatar, setNewUserAvatar] = useState();
  const [isBtnDisabled, setIsBtnDisabled] = useState(false);
  const maxDate = new Date().toISOString().slice(0, 10);

  return (
    <UserBlock>
      <>
        <BoxImg>
          <ImgUser
            id="img_container"
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
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
              <Form>
                <BoxTitle>
                  <Title>Name:</Title>
                  <Block>
                    <UserDataItem
                      isBtnDisabled={isBtnDisabled}
                      setIsBtnDisabled={setIsBtnDisabled}
                      defaultValue={"Rodri"}
                      name={"name"}
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
                      name={"email"}
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
                      defaultValue={"16.06.1995"}
                      name={"birthday"}
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
                      defaultValue={"+380635973039"}
                      name={"phone"}
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
                      name={"city"}
                      type={"text"}
                    />
                  </Block>
                </BoxTitle>
              </Form>
            </Block>
          </BoxTitle>
        </BoxInfo>
      </>
    </UserBlock>
  );
};
