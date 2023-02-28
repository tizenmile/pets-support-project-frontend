import styled from "styled-components";
import laptop_hero_img from "../../media/laptop_hero_img.svg";
import tablet_hero_img from "../../media/tablet_hero_img.svg";
import mobile_hero_img from "../../media/mobile_hero_img.svg";
import laptop_girl_img from "../../media/bg1-home-laptop-min.png";
import tablet_girl_img from "../../media/bg1-home-tablet-min.png";
import mobile_girl_img from "../../media/bg1-home-mobile-min.png";

export const HeroContainer = styled.div`
  background-position: center bottom -20px;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-image: url(${mobile_hero_img});
  position: fixed;
  @media ${(p) => p.theme.media.tablet} and (max-width: 1279px) {
    background-image: url(${tablet_hero_img});
    background-position: center bottom -20px;
  }
  @media ${(p) => p.theme.media.desktop} {
    background-image: url(${laptop_hero_img});
    background-position: center bottom;
  }
`;

export const HeroContentContainer = styled.div`
  position: relative;
  max-width: 1280px;
  padding: 0px 16px 0px 16px;
  margin-top: 46px;
  display: flex;

  flex-direction: column;
  align-items: center;
  text-align: center;

  @media ${(p) => p.theme.media.tablet} and (max-width: 1279px) {
    padding: 0px 32px 0px 32px;
    margin-top: 64px;
  }
  @media ${(p) => p.theme.media.desktop} {
    flex-direction: row;
    margin-left: auto;
    margin-right: auto;
    justify-content: space-between;
  }
`;
export const HeroTitle = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 44px;

  max-width: 407px;

  color: ${(p) => p.theme.colors.mainText};
  @media ${(p) => p.theme.media.tablet} and (max-width: 1279px) {
    font-size: 68px;
    line-height: 100px;
    max-width: 600px;
  }
  @media ${(p) => p.theme.media.desktop} {
    font-size: 68px;
    line-height: 100px;
    text-align: left;
    max-width: 588px;
  }
`;
export const LeftContainer = styled.div`
  z-index: 10;
  @media (min-width: 1280px) {
    margin-top: 90px;
  }
`;
export const RightContainer = styled.div`
  width: 320px;
  height: 337px;
  position: absolute;
  bottom: 80px;
  left: 50%;
  margin-left: -160px;
  z-index: 1;
  background-image: url(${mobile_girl_img});

  @media ${(p) => p.theme.media.tablet} and (max-width: 1279px) {
    background-image: url(${tablet_girl_img});
    width: 645px;
    height: 715px;
    left: 50%;
    margin-left: -322px;
  }
  @media ${(p) => p.theme.media.desktop} {
    background-image: url(${laptop_girl_img});
    width: 590px;
    height: 640px;
    margin-left: 0;
  }
`;
