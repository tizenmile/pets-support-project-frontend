import styled from "styled-components";
import { BiSearchAlt2 } from "react-icons/bi";
import { TbSearch } from "react-icons/tb";
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
  margin-left: auto;
  margin-right: auto;
  position: relative;
  @media ${(p) => p.theme.media.mobileMax} {
    max-width: 280px;
    height: 40px;
    margin-bottom: 28px;
    font-size: ${(p) => p.theme.fontSizes.s};
  }
  @media ${(p) => p.theme.media.tablet} {
    width: 608px;
    height: 44px;
    margin-bottom: 40px;
    font-size: ${(p) => p.theme.fontSizes.xm};
  }
`;

export const SearchFormButton = styled.button`
  padding: 0px 0px;
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
  outline: none;
  width: 100%;
  height: 100%;
  font-family: ${(p) => p.theme.fonts.main};
  font-weight: ${(p) => p.theme.fontWeights.semiBold};
  color: ${(p) => p.theme.colors.searchText};
  border-radius: 40px;
  border: solid 2px #fff;
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  &:hover,
  &:focus,
  &:active {
    border: solid 2px ${(p) => p.theme.colors.accent};
  }

  @media ${(p) => p.theme.media.mobileMax} {
    padding-left: 12px;
  }
  @media ${(p) => p.theme.media.tablet} {
    padding-left: 20px;
  }
`;

export const IconSearch = styled(TbSearch)`
  position: absolute;
  top: 50%;
  right: 12px;
  transform: translateY(-50%);

  color: black;
  &:hover {
    color: ${(p) => p.theme.colors.accent};
    scale: 1.15;
  }

  @media ${(p) => p.theme.media.mobileMax} {
    width: 17px;
    height: 17px;
  }
  @media ${(p) => p.theme.media.tablet} {
    width: 20px;
    height: 20px;
  }
`;
