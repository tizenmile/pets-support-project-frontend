import { useState } from "react";
import { Formik, Field, ErrorMessage } from "formik";
import { UserSchema } from "../../helpers/schemaValidation/UserSchemaValidation";
import { useDispatch } from "react-redux";

import { updateUserData } from "../../redux/userAccount/operations";
import {
  EditTextBtn,
  EditTextBtnIcon,
  IconCheck,
  UserDataInput,
  UserForm,
  ErrorText,
} from "./UserDataItem.styled";

export const UserDataItem = ({
  isBtnDisabled,
  setIsBtnDisabled,
  name,
  type,
  defaultValue,
}) => {
  const dispatch = useDispatch();

  const [editMode, setEditMode] = useState(false);
  const [inputValue, setInputValue] = useState(defaultValue ?? "");
  const [valid, setValid] = useState(false);

  const onInputChange = (e) => {
    setInputValue(e.target.value);
    setValid(UserSchema.fields[name].isValidSync(e.target.value));
  };

  const onEditClick = () => {
    setValid(true);
    setEditMode(true);
    setIsBtnDisabled(true);
  };

  const onSubmitClick = () => {
    setIsBtnDisabled(true);

    if (inputValue === defaultValue) {
      setValid(false);
      setEditMode(false);
      setIsBtnDisabled(false);
      return;
    }

    const data = {
      [name]: inputValue,
    };

    dispatch(updateUserData(data));

    setEditMode(false);
    setIsBtnDisabled(false);
  };

  return (
    <Formik
      initialValues={{ [name]: defaultValue ?? "" }}
      validationSchema={UserSchema}
    >
      {(formik) => (
        <UserForm>
          <Field
            as={UserDataInput}
            name={name}
            type={type}
            value={formik.values[name]}
            disabled={!editMode}
            onChange={(e) => {
              onInputChange(e);
              formik.handleChange(e);
            }}
          />
          <ErrorMessage component={ErrorText} name={name} />

          {editMode ? (
            <EditTextBtn
              type="submit"
              disabled={!valid}
              onClick={onSubmitClick}
            >
              <IconCheck />
            </EditTextBtn>
          ) : (
            <EditTextBtn
              type="button"
              onClick={onEditClick}
              disabled={isBtnDisabled}
            >
              <EditTextBtnIcon />
            </EditTextBtn>
          )}
        </UserForm>
      )}
    </Formik>
  );
};
