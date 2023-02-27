import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: rgba(253, 247, 242, 1);
  @media (${(p) => p.theme.media.mobileMax}) {
    padding: 45px 20px 100px 20px;
  }
  @media (${(p) => p.theme.media.tablet}) {
    padding: 90px 32px 100px 32px;
  }
  @media (${(p) => p.theme.media.desktop}) {
    padding: 49px 16px 200px 16px;
  }
`;

export const Title = styled.h2`
  @media (${(p) => p.theme.media.mobileMax}) {
    text-align: center;
    margin-bottom: 8px;
    font-size: 24px;
    line-height: 1.36;
  }
  @media (${(p) => p.theme.media.tablet}) {
    text-align: center;
    margin-bottom: 8px;
    font-size: 48px;
    line-height: 66px;
  }

  @media (${(p) => p.theme.media.desktop}) {
    text-align: center;
    margin-bottom: 40px;
    font-size: 48px;
    line-height: 66px;
  }
`;

export const ListCard = styled.ul`
  @media (${(p) => p.theme.media.tablet}) {
    display: flex;
    flex-wrap: wrap;
  }
  @media (${(p) => p.theme.media.desktop}) {
    display: flex;
    flex-wrap: wrap;
  }
`;

export const ItemCard = styled.li`
  @media (${(p) => p.theme.media.mobileMax}) {
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 40px;

    &:nth-last-child() {
      margin-bottom: 0px;
    }
  }
  @media (${(p) => p.theme.media.tablet}) {
    width: calc((100% - 32px) / 2);
    margin-left: 32px;
    margin-bottom: 60px;
    margin-right: 0px;
    &:nth-child(2n + 1) {
      margin-left: 0px;
    }
  }
  @media (${(p) => p.theme.media.desktop}) {
    width: calc((100% - 64px) / 3);
    &:nth-child(2n + 1) {
      margin-left: 32px;
    }
    &:nth-child(3n + 1) {
      margin-left: 0px;
    }
  }
`;

export const WrapperList = styled.div`
  margin-left: auto;
  margin-right: auto;
  @media (${(p) => p.theme.media.mobileMax}) {
    width: 280px;
  }
  @media (${(p) => p.theme.media.tablet}) {
    width: 700px;
  }
  @media (${(p) => p.theme.media.desktop}) {
    width: 1200px;
  }
`;

export const SearchBar = styled.form`
  @media (${p => p.theme.media.mobileMax}) {
    position: relative;
    margin-bottom: 40px;
    margin-left: auto;
    margin-right: auto;
    width: 280px;
    height: 40px;
  }
  @media( ${p => p.theme.media.tablet}) {
    margin-bottom: 60px;
    width: 608px;
    height: 44px;
  }
  @media (${p => p.theme.media.desktop}) {
    margin-bottom: 60px;
    width: 608px;
    height: 44px;
  }
`;

export const NewsCard = styled.div`
@media (${(p) => p.theme.media.desktop}) {
  width: 395px;
  height: 254px;
}
`;