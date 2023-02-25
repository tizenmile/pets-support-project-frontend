import styled from "styled-components";

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(p) => p.theme.colors.muted};
  backdrop-filter: blur(10px);
  z-index: 1200;
`;
