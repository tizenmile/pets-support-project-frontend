import styled from "styled-components";

export const AddNoticeModalContainer = styled.form`
  position: relative;
  width: 608px;
  min-height: 885px;
  background-color: #ffffff;
  border-radius: 40px;
  padding: 40px 80px;
`;

export const AddNoticeModalBtn = styled.button`
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
`;

export const AddNoticeModalBtnImg = styled.img`
  display: block;
  width: 20px;
  height: 20px;
`;

export const AddNoticeModalTitle = styled.h2`
  text-align: center;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 26px;
  color: #000000;
  margin-bottom: 20px;
`;

export const AddNoticeModalText = styled.p`
  text-align: center;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 27px;
  letter-spacing: -0.01em;
  color: #000000;
  margin-bottom: 28px;
`;

export const NoticeAddModalLinkList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 28px;
`;

export const NoticeAddModalLinkListItem = styled.li`
  :not(:last-child) {
    margin-right: 12px;
  }
  :first-child {
    margin-bottom: 16px;
  }
`;

export const NoticeAddModalRadioLable = styled.label`
  padding: 10px 28px;
  background: #ffffff;
  border: 2px solid #f59256;
  border-radius: 40px;
  width: max-content;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 27px;
  display: flex;
  align-items: center;
  letter-spacing: 0.04em;
  color: #000000;
  cursor: pointer;
`;

export const NoticeAddModalRadioInput = styled.input`
  display: none;
  transition: ${(p) => p.theme.transition};
  &:checked + ${NoticeAddModalRadioLable} {
    transition: ${(p) => p.theme.transition};
    background: #F59256;
`;

export const NoticeAddModalInputList = styled.ul`
  margin-bottom: 40px;
`;

export const NoticeAddModalLabel = styled.label`
  display: block;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 26px;
  color: #000000;
  cursor: pointer;
`;

export const AddNoticeModalInput = styled.input`
  height: 48px;
  width: 100%;
  background: #fdf7f2;
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 40px;
  margin-top: 12px;
  padding-left: 16px;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  color: #000000;
  cursor: pointer;
  ::placeholder {
    margin: 0;
    font-family: "Manrope";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: rgba(17, 17, 17, 0.6);
  }
`;

export const NoticeAddModalInputListItem = styled.li`
  margin-bottom: 28px;
`;

export const NoticeAddModalBtnList = styled.ul`
  display: flex;
  justify-content: center;
`;

export const NoticeAddModalBtnListItem = styled.li`
  :not(:last-child) {
    margin-right: 20px;
  }
`;

export const NoticeAddModalBottomBtn = styled.button`
  width: 180px;
  height: 44px;
  background: #ffffff;
  border: 2px solid #f59256;
  border-radius: 40px;
  display: flex;
  justify-content: center;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 27px;
  display: flex;
  align-items: center;
  letter-spacing: 0.04em;
  color: #000000;

  transition: ${(p) => p.theme.transition};
  :hover {
    background: #f59256;
    color: #ffffff;
    transition: ${(p) => p.theme.transition};
  }
`;
