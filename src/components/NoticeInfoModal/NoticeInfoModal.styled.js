import styled from "styled-components";

export const NoticeModalContainer = styled.div`
  position: relative;
  width: 704px;
  height: auto;
  background: #ffffff;
  padding-left: 20px;
  padding-top: 32px;
  padding-right: 24px;
  border-radius: 40px;
  @media (min-width: 320px) and (max-width: 767px) {
    margin-top: 150px;
    width: 280px;
  }
`;

export const NoticeCloseModalButton = styled.button`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 12px;
  right: 20px;
  width: 44px;
  height: 44px;
  background-color: #fdf7f2;
  backdrop-filter: blur(2px);
  border-radius: 50px;
  transition: ${(p) => p.theme.transition};
  :hover {
    background: #f59256;
    color: #ffffff;
    transition: ${(p) => p.theme.transition};
  }
  @media (min-width: 320px) and (max-width: 767px) {
    width: 34px;
    height: 34px;
    top: 20px;
    right: 20px;
  }
`;

export const NoticeCloseModalButtonImg = styled.img`
  display: block;
  width: 20px;
  height: 20px;
`;

export const NoticeModalGeneralContainer = styled.div`
  display: flex;
  margin-bottom: 28px;
  @media (min-width: 320px) and (max-width: 767px) {
    flex-direction: column;
    width: 240px;
    margin-top: 30px;
  }
`;

export const NoticeImgContainer = styled.div`
  position: relative;
  margin-right: 20px;
  width: 288px;
  height: 328px;
  border-radius: 0px 0px 40px 40px;
  overflow: hidden;
  @media (min-width: 320px) and (max-width: 767px) {
    width: 240px;
    height: 240px;

    border-radius: 0px 0px 40px 40px;
  }
`;

export const NoticeModalImg = styled.img`
  @media (min-width: 320px) and (max-width: 767px) {
    margin-top: -40px;
  }
`;

export const NoticeModalCategory = styled.p`
  position: absolute;
  top: 20px;
  min-width: 158px;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(50px);
  text-align: center;
  padding-top: 6px;
  padding-bottom: 6px;
  border-radius: 0px 40px 40px 0px;
  font-family: ${(p) => p.theme.fonts.main};
  font-style: normal;
  font-weight: ${(p) => p.theme.fontWeights.semiBold};
  font-size: 12px;
  line-height: 1.36;
  letter-spacing: 0.04em;
`;

export const NoticeModalTitle = styled.h2`
  font-family: ${(p) => p.theme.fonts.main};
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 1.36;
  letter-spacing: -0.01em;
  margin-bottom: 20px;
  color: #000000;
  @media (min-width: 320px) and (max-width: 767px) {
    margin-top: 16px;
  }
`;

export const NoticeModalTopText = styled.p`
  font-family: ${(p) => p.theme.fonts.main};
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 1.36;
  width: 131px;
  color: #000000;
  @media (min-width: 320px) and (max-width: 767px) {
    font-size: 14px;
  }
`;

export const NoticeModalBottomText = styled.p`
  font-family: ${(p) => p.theme.fonts.main};
  font-style: normal;
  font-weight: ${(p) => p.theme.fontWeights.semiBold};
  font-size: 16px;
  line-height: 1.36;
  color: #000000;
  @media (min-width: 320px) and (max-width: 767px) {
    font-size: 14px;
  }
`;

export const NoticeInfoModalLink = styled.a`
  font-family: ${(p) => p.theme.fonts.main};
  font-style: normal;
  font-weight: ${(p) => p.theme.fontWeights.semiBold};
  font-size: 16px;
  line-height: 1.36;
  /* text-decoration: none; */
  color: #000000;
  :hover {
    cursor: pointer;
    color: #f59256;
  }
  @media (min-width: 320px) and (max-width: 767px) {
    font-size: 14px;
  }
`;

export const NoticeModalList = styled.ul`
`;

export const NoticeModalListItem = styled.li`
  display: flex;
  :not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const NoticeModalComments = styled.p`
  font-family: ${(p) => p.theme.fonts.main};
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 1.36;
  color: #000000;
  margin-top: 28px;
  @media (min-width: 320px) and (max-width: 767px) {
    font-size: 14px;
  }
`;

export const NoticeModalCommentsText = styled.span`
  font-family: ${(p) => p.theme.fonts.main};
  font-style: normal;
  font-weight: ${(p) => p.theme.fontWeights.semiBold};
  font-size: 16px;
  line-height: 1.36;
  color: #000000;
  @media (min-width: 320px) and (max-width: 767px) {
    font-size: 14px;
  }
`;

export const NoticeModalButtonContainer = styled.div`
  margin-bottom: 32px;
  margin-top: 32px;
  display: flex;
  flex-direction: raw;
  justify-content: flex-end;
  margin-right: 40px;
  @media (min-width: 320px) and (max-width: 767px) {
    flex-direction: column;
    margin-top: 40px;
  }
`;

export const NoticeModalAddToFavoriteBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 160px;
  height: 40px;
  background: #ffffff;
  border: 2px solid #f59256;
  border-radius: 40px;
  margin-right: 12px;
  font-family: ${(p) => p.theme.fonts.main};
  font-style: normal;
  font-weight: ${(p) => p.theme.fontWeights.semiBold};
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.04em;
  color: #111111;
  transition: ${(p) => p.theme.transition};
  :hover {
    transition: ${(p) => p.theme.transition};
    background: #f59256;
    color: #ffffff;
  }
  @media (min-width: 320px) and (max-width: 767px) {
    width: 240px;
  }
`;

export const NoticeModalAddToFavoriteBtnImage = styled.img`
  display: block;
  width: 14px;
  height: 12px;
  margin-left: 10px;
`;

export const NoticeContactBtn = styled.a`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 160px;
  height: 40px;
  background: #ffffff;
  border: 2px solid #f59256;
  border-radius: 40px;
  font-family: ${(p) => p.theme.fonts.main};
  font-style: normal;
  font-weight: ${(p) => p.theme.fontWeights.semiBold};
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.04em;
  color: #111111;
  transition: ${(p) => p.theme.transition};
  :hover {
    transition: ${(p) => p.theme.transition};
    background: #f59256;
    color: #ffffff;
  }
  @media (min-width: 320px) and (max-width: 767px) {
    width: 240px;
    margin-top: 12px;
  }
`;
