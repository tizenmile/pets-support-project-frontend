import styled from "styled-components";

export const Wrapper = styled.div`
  @media (${(p) => p.theme.media.mobileMax}) {
    display: flex;
    flex-direction: column;
    /* ::before {
      content: " ";
      height: 4px;
      margin-bottom: 4px;
      background: linear-gradient(90deg, #ff634e 0%, #ffdf48 105.44%);
      border-radius: 40px;
      width: 200px;
    } */
  }
  @media (${(p) => p.theme.media.tablet}) {
    ::before {
      content: " ";
      height: 8px;
      width: 280px;
    }
  }
  @media (${(p) => p.theme.media.desktop}) {
    ::before {
      content: " ";
      width: 340px;
    }
  }
`;

export const Span = styled.span`
  display: inline-block;
  text-align: justify;
`;

export const Strip = styled.div`
  display: block;
  /* width: 200px; */
  height: 4px;
  background: linear-gradient(90deg, #ff634e 0%, #ffdf48 105.44%);
  border-radius: 40px;
  margin-top: 20px;
  margin-bottom: 4px;
`;

export const Title = styled.h3`
  @media ${(p) => p.theme.media.mobileMax} {
    margin-top: 0px;
    padding-bottom: 16px;
    font-weight: 700;
    font-size: 24px;
    line-height: 1.36;
    letter-spacing: -0.01em;

    span {
      display: none;
      padding: 2px 3px;
      margin-left: 0px;

      @media ${(p) => p.theme.media.tablet} {
        width: calc(((100% - 32px) / 2) * 0.9);
        height: auto;
      }
      @media ${(p) => p.theme.media.desktop} {
        width: calc((100% - 64px) / 3);
      }
    }
    :hover span {
      display: inline-block;
      position: absolute;
      background: #fdf7f2;
      border: 1px solid #f59256;
      font-size: 18px;
      border-radius: 10px;
      color: #535353;
    }
  }
  @media ${(p) => p.theme.media.desktop} {
    letter-spacing: -0.01em;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Div = styled.div`
  display: block;
  /* margin-bottom: auto; */
`;
export const SpanDots = styled.span`
  display: inline;
`;

export const Label = styled.label`
  color: rgba(245, 146, 86, 1);
  cursor: pointer;
  :hover {
    color: rgba(83, 83, 83, 1);
  }
  :before {
    display: block;
    margin-top: 15px;
    content: "Show more";
  }
`;

export const Checkbox = styled.input`
  display: none;
  :checked ~ ${Span} {
    display: inline;
    opacity: 1;
    font-size: inherit;
    max-height: 999em;
  }
  :checked ~ ${SpanDots} {
    display: none;
  }
  :checked ~ ${Label} {
    :before {
      content: "Show less";
    }
  }
`;

export const P = styled.p`
  height: 110px;
  margin-top: 16px;
  overflow-y: hidden;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: rgb(17, 19, 33);
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

export const Data = styled.div`
  font-family: "Manrope";
  font-weight: 400;
  font-size: 16px;
  line-height: 1.36;
  color: rgba(17, 17, 17, 0.6);
`;

export const Link = styled.a`
  font-family: "Manrope";
  font-weight: 500;
  font-size: 16px;
  line-height: 1.36;
  text-align: right;
  text-decoration-line: underline;
  color: rgba(245, 146, 86, 1);
  :hover {
    color: rgba(255, 97, 1, 1);
  }
`;
