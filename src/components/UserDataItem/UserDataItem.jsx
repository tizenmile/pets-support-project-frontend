import { useState } from "react";
import { Formik, Field, ErrorMessage } from "formik";
import { UserSchema } from "../../UserSchemaValidation/UserSchemaValidation";
import { toast } from "react-toastify";
import {
  EditTextBtn,
  EditTextBtnIcon,
  IconCheck,
  UserDataInput,
  UserForm,
} from "./UserDataItem.styled";

export const UserDataItem = ({
  isBtnDisabled,
  setIsBtnDisabled,
  name,
  type,
  defaultValue,
}) => {
  const [active, setActive] = useState(false);

  const handleClick = (e, values, isValid) => {
    console.log("click");
    e.preventDefault();
    setIsBtnDisabled(true);
    if (active === true && values[name].length !== 0) {
      setActive(false);
      setIsBtnDisabled(false);
      if (values[name] === defaultValue) {
        return;
      }
      const data = {
        [name]: values[name],
      };
      console.log("59", data);
      return;
    }
    setActive(true);
  };

  return (
    <Formik
      initialValues={{ [name]: defaultValue ?? "" }}
      validationSchema={UserSchema}
      onSubmit={(values, { setSubmitting }) => {
        console.log(setSubmitting);
        setSubmitting(false);
      }}
    >
      {({ values, isValid }) => (
        <UserForm>
          <Field
            as={UserDataInput}
            name={name}
            type={type}
            value={values[name]}
            disabled={!active}
          />
          <ErrorMessage name={name} />
          <EditTextBtn
            onClick={(e) => handleClick(e, values, isValid)}
            disabled={!active && isBtnDisabled}
          >
            {active ? <IconCheck /> : <EditTextBtnIcon />}
          </EditTextBtn>
        </UserForm>
      )}
    </Formik>
  );
};
