import styled from 'styled-components';
import { BiSearchAlt2 } from 'react-icons/bi';

export const HeaderSearchBar = styled.div`
  top: 0;
  left: 0;
  /* position: sticky; */
  /* z-index: 100; */
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(253, 247, 242, 1);
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 280px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  overflow: hidden;
 
`;

export const SearchFormButton = styled.button`
  display: flex;
  width: 40px;
  height: 40px;
  border: 0;
  background-color: rgba(255, 255, 255, 1);
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  :hover {
    opacity: 1;
  }

`;

export const SearchFormButtonLabel = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  border: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  clip-path: inset(50%);
`;

export const SearchFormInput = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 24px;
  line-height: 1.36;
  border: none;
  outline: none;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  ::placeholder {
    font: inherit;
    font-size: 20px;
    line-height: 1.36;
  }

`;

export const IconSearch = styled(BiSearchAlt2)`
  width: 20px;
  height: 20px;
  margin: auto;
`;