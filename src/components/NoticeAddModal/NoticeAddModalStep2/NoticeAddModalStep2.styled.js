import styled from "styled-components";

export const AddNoticeModalContainerSecond = styled.form`
  position: relative;
  width: 608px;
  height: auto;
  background-color: #ffffff;
  border-radius: 40px;
  padding: 40px 80px;
  margin-top: 90px;
`;

export const NoticeAddModalTextSecond = styled.p`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 26px;
  color: #000000;
  margin-bottom: 31px;
`;

export const NoticeModalImgSexList = styled.ul`
  display: flex;
  margin-bottom: 40px;
`;

export const NoticeModalImgSexListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-items: center;
  justify-content: center;
  :not(:last-child) {
    margin-right: 90px;
  }
`;

export const NoticeAddModalmgSex = styled.img`
  width: 54px;
  margin-bottom: 20px;
`;

export const NoticeModalImgListSexLable = styled.label`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 26px;
  color: #000000;
  cursor: pointer;
`;

export const NoticeAddModalSexInput = styled.input`
  display: none;
  transition: ${(p) => p.theme.transition};
  &:checked + ${NoticeModalImgListSexLable} {
    transition: ${(p) => p.theme.transition};
    color:  #F59256;;
`;

export const NoticeAddModalFileLable = styled.label`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 26px;
  color: #000000;
  cursor: pointer;
  width: max-content;
  display: block;
  cursor: pointer;
`;

export const NoticeAddModalFileLableBtn = styled.button`
  width: 140px;
  height: 140px;
  margin-top: 12px;
  background: #fdf7f2;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  :hover {
    border: 1px solid rgba(245, 146, 86, 0.5);
  }
`;

export const NoticeAddModalFileLableImg = styled.img`
  width: 47px;
  hegth: 47px;
`;

export const NoticeAddModalFileInput = styled.input`
  // display: none;
`;

export const NoticeAddModalTextAreaLabel = styled.label`
  display: flex;
  flex-direction: column;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 26px;
  color: #000000;
  cursor: pointer;
  // width: content-box;
`;

export const NoticeAddModalTextArea = styled.textarea`
  margin-top: 12px;
  padding-left: 18px;
  padding-top: 16px;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  color: #000000;
  resize: none;
  outline: none;
  background: #fdf7f2;
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 20px;
  height: 113px;
  cursor: pointer;
  ::placeholder {
    font-family: "Manrope";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    color: rgba(17, 17, 17, 0.6);
  }
`;
