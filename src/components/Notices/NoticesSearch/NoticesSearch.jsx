import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useState } from "react";

import {
  Input,
  IconSearch,
  IconSearchReset,
  Wrapper,
  NoticesSearchTitle,
  Button,
  Form,
} from "./NoticesSearch-styled";
import foundedNotices from "../../../redux/notices/searchSlice";
import { getSearch } from "../../../redux/notices/selector";

export default function NoticesSearch() {
  const [value, setValue] = useState("");
  const [focus, setFocus] = useState(null);
  const dispatch = useDispatch();
  const search = useSelector(getSearch);
  const input = document.getElementById("input");
  const handleInputFocus = (e) => {
    // if (e.currentTarget === e.target) {
    //   console.log("focused self");
    // } else {
    //   console.log("focused child", e.target);
    // }
    setFocus(true);
    console.log(focus);
  };
  const handleInputBlur = (e) => {
    if (e.currentTarget === e.target) {
      setFocus(false);
      if (value === "") {
        dispatch(foundedNotices(""));
      }
    }
  };
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const onChange = (e) => {
    e.preventDefault();
    dispatch(foundedNotices(value));
  };
  const onChange1234 = (e) => {
    e.preventDefault();
    if (value !== "") {
      dispatch(foundedNotices(value));
      setFocus(false);
      handleInputBlur(e);
      input.blur();
    }
    if (value === "") {
      dispatch(foundedNotices(""));
    }
  };
  return (
    <>
      <NoticesSearchTitle>Find your favorite pet</NoticesSearchTitle>
      <Wrapper>
        <Form onSubmit={onChange}>
          <Input
            id="input"
            type="text"
            onChange={handleChange}
            value={value}
            placeholder="Search"
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
          />
          {!focus ? (
            <Button type="submit">
              <IconSearch />
            </Button>
          ) : null}

          {focus ? (
            <Button onClick={onChange1234}>
              <IconSearchReset />
            </Button>
          ) : null}
        </Form>
      </Wrapper>
    </>
  );
}
