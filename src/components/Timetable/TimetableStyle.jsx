import styled from "styled-components";
export const TimeList = styled.ul`
  position: absolute;
  width: 120px;

  left: 0px;
  top: 20px;
  padding: 12px;

  background: #ffffff;
  border: 1px solid #f59256;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  z-index: 1;
`;

export const SpanDay = styled.span`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  display: flex;
  align-items: center;
  text-align: center;

  color: #000000;
`;

export const SpanTimeWrap = styled.div`
  position: absolute;
  top: 12px;
  right: 13px;
`;

export const SpanTime = styled.span`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  display: flex;
  align-items: center;
  text-align: center;
  margin-left: auto;

  color: #000000;
`;
export const TimeItem = styled.li`
  margin-bottom: 4px;
`;
