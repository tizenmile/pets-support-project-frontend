import styled from "styled-components";

export const AddButtonNotice = styled.div`
  width: 0px;
  height: 0px;
  @media (${(p) => p.theme.media.tablet}) {
    background-color: ${(p) => p.theme.colors.accent};
    width: 129px;
    height: 44px;
    margin-left: auto;
  }
`;
