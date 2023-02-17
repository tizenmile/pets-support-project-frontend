import { useState } from "react";
import {
  EditTextBtn,
  EditTextBtnIcon,
  IconCheck,
  UserDataInput,
} from "./UserDataItem.styled";

export const UserDataItem = ({
  isBtnDisabled,
  setIsBtnDisabled,
  name,
  type,
  defaultValue,
}) => {
  const [active, setActive] = useState(false);
  const [inputValue, setInputValue] = useState(defaultValue ?? "");

  const [isValid, setIsValid] = useState(true);
  const onInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    setIsBtnDisabled(true);
    // if (name === "birthday") {
    //   let inputValue = new Date(inputValue).toISOString().slice(0, 10);
    //   if (new Date(inputValue) < new Date(min)) {
    //     setActive(false);
    //     setIsBtnDisabled(false);
    //     setInputValue(min);
    //     return;
    //   }
    //   if (new Date(inputValue) > new Date(max)) {
    //     setActive(false);
    //     setIsBtnDisabled(false);
    //     setInputValue(max);
    //     return;
    //   }
    //   setInputValue(inputValue);
    // }
    // const isValidValue = pattern.test(inputValue);

    // if (!isValidValue) {
    //   setIsValid(false);
    //   return;
    // }
    if (active === true && inputValue.length !== 0) {
      setActive(false);
      setIsBtnDisabled(false);
      if (inputValue === defaultValue) {
        return;
      }

      const data = {
        [name]: inputValue,
      };
      console.log("59", data);
      setIsValid(true);
      dispatch(updateUser(data));
      return;
    }
    setIsValid(true);
    setActive(true);
  };
  return (
    <>
      <UserDataInput
        disabled={!active}
        onChange={onInputChange}
        name={name}
        type={type}
        value={inputValue}
      />
      <EditTextBtn onClick={handleClick} disabled={!active && isBtnDisabled}>
        {active ? <IconCheck /> : <EditTextBtnIcon />}
      </EditTextBtn>
    </>
  );
};
