import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import {
  HeaderSearchBar,
  IconSearch,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from "./SearchBar.styled.js";

import PropTypes from "prop-types";
import { useSearchParams } from "react-router-dom";

export const SearchBar = ({ submitForm }) => {
  const [input, setInput] = useState("");
  const [, setSearchParams] = useSearchParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Эта функция которая отвечает за отправку запроса. Приходит в пропсе.
    setSearchParams({ text: input });
    // submitForm(input);
    setInput("");
  };

  const saveInputState = (e) => {
    setInput(e.target.value);
  };

  return (
    <HeaderSearchBar>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormInput
          onChange={saveInputState}
          name="name"
          type="text"
          autocomplete="off"
          placeholder="Search"
          value={input}
        />
        <SearchFormButton type="submit">
          <SearchFormButtonLabel>Search</SearchFormButtonLabel>
          <IconSearch />
        </SearchFormButton>
      </SearchForm>
    </HeaderSearchBar>
  );
};

SearchBar.propTypes = {
  submitForm: PropTypes.func,
};

// // import PropTypes from 'prop-types';
// import { getSearch } from 'react-router-dom';

// export default function SearchBar() {
//   const [value, setValue] = useState("");
//   const [focus, setFocus] = useState(null);
//   const dispatch = useDispatch();
//   const search = useSelector(getSearch);
//   const input = document.getElementById("input");
//   const handleInputFocus = (e) => {
//     // if (e.currentTarget === e.target) {
//     //   console.log("focused self");
//     // } else {
//     //   console.log("focused child", e.target);
//     // }
//     setFocus(true);
//     console.log(focus);
//   };
// }
// const handleInputBlur = (e) => {
//   if (e.currentTarget === e.target) {
//     setFocus(false);
//     if (value === "") {
//       dispatch(foundedNotices(""));
//     }
//   }
// };
// const saveInputState = (e) => {
//   setValue(e.target.value);
// };

// const handleSubmit = (e) => {
//   e.preventDefault();
//   dispatch(foundedNotices(value));
// };
// const onChange1234 = (e) => {
//   e.preventDefault();
//   if (value !== "") {
//     dispatch(foundedNotices(value));
//     setFocus(false);
//     handleInputBlur(e);
//     input.blur();
//   }
//   if (value === "") {
//     dispatch(foundedNotices(""));
//   }
//   return (
//     <HeaderSearchBar>
//       <SearchForm onSubmit={handleSubmit}>
//         <SearchFormInput
//           onChange={saveInputState}
//           name="name"
//           type="text"
//           autocomplete="off"
//           placeholder="Search"
//           onFocus={handleInputFocus}
//           onBlur={handleInputBlur}
//           value={value}
//         />
//         {!focus ? (
//           <SearchFormButton type="submit">
//             <SearchFormButtonLabel>Search</SearchFormButtonLabel>
//             <IconSearch />
//           </SearchFormButton>
//         ) : null}
//         {focus ? (
//           <Button onClick={onChange1234}>
//             <IconSearchReset />
//           </Button>
//         ) : null}
//       </SearchForm>
//     </HeaderSearchBar>
//   );
// };
