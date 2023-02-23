import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useState } from "react";

import {
  Input,
  IconSearch,
  Wrapper,
  NoticesSearchTitle,
  Button,
  Form,
} from "./NoticesSearch-styled";
import foundedNotices from "../../../redux/notices/searchSlice";
import { getSearch } from "../../../redux/notices/selector";

export default function NoticesSearch() {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const search = useSelector(getSearch);
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const onChange = (e) => {
    e.preventDefault();
    dispatch(foundedNotices(value));
  };
  const onChange1234 = (e) => {
    e.preventDefault();
    setValue("");
    dispatch(foundedNotices(""));
  };
  return (
    <>
      <NoticesSearchTitle>Find your favorite pet</NoticesSearchTitle>
      <Wrapper>
        <Form onSubmit={onChange}>
          <Input
            type="text"
            onChange={handleChange}
            value={value}
            placeholder="Search"
          />
          <Button type="submit">
            <IconSearch />
          </Button>
        </Form>
        <button onClick={onChange1234}>CLEAR</button>
      </Wrapper>
    </>
  );
}
