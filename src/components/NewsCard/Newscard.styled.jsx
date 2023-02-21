import styled from 'styled-components';

export const Wrapper = styled.div`
  /* display: block; */
  width: 280px;
  margin-left: auto;
  margin-right: auto;
  /*; */
`;

// export const WrapperContent = styled.div`
 
// `;

export const Strip = styled.div`
  display: block;
  width: 200px;
  height: 4px;
  background: linear-gradient(90deg, #ff634e 0%, #ffdf48 105.44%);
  border-radius: 40px;
  margin-top: 40px;
`;

export const Title = styled.h3`
  margin-top: 4px;
  font-weight: 700;
  font-size: 28px;
  line-height: 1.36;
  letter-spacing: -0.01em;
  /* text-align: justify; */
`;

export const Content = styled.div`
  margin-top: 10px;
  font-weight: 400;
  font-size: 24px;
  line-height: 1.36;
  color: rgba(17, 19, 33, 1);
`;

export const Div = styled.div`
display: block ;
/* margin-bottom: auto; */
`

export const Span = styled.span`
  display: none;
  opacity: 0;
  max-height: 0;
  font-size: 0;
  transition: 0.25s ease;
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
    content: 'Show more';
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
      content: 'Show less';
    }
  }
`;

export const P = styled.p`
  display: inline-block;
  text-align: justify;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

export const Data = styled.div`
  font-weight: 400;
  font-size: 24px;
  line-height: 1.36;
  color: rgba(49, 21, 4, 0.07);
`;

export const Link = styled.a`
  font-weight: 500;
  font-size: 24px;
  line-height: 1.36;
  text-align: right;
  text-decoration-line: underline;
  color: rgba(245, 146, 86, 1);
  :hover {
    color: rgba(255, 97, 1, 1);
  }
`;