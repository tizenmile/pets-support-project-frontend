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
    setFocus(true);
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
    setValue("");
    setFocus(false);
    dispatch(foundedNotices(""));
  };
  return (
    <>
      <NoticesSearchTitle>Find your favorite pet</NoticesSearchTitle>
      <Wrapper>
        <Form onChange={onChange} onFocus={handleInputFocus} onBlur={handleInputBlur}>
          <Input
            id="input"
            type="text"
            onChange={handleChange}
            value={value}
            placeholder="Search"
            
          />
          {!focus ? (
            <Button type="submit">
              <IconSearch />
            </Button>
          ) : (
            <Button onClick={onChange1234}>
              <IconSearchReset />
            </Button>
          )}
        </Form>
      </Wrapper>
    </>
  );
}
