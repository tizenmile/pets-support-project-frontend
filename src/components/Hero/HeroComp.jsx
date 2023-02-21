import {
  HeroContainer,
  HeroContentContainer,
  LeftContainer,
  RightContainer,
  HeroTitle,
} from "./HeroCompStyle";
const Hero = () => {
  return (
    <HeroContainer>
      <HeroContentContainer>
        <LeftContainer>
          <HeroTitle>Take good care of your small pets</HeroTitle>
        </LeftContainer>
        <RightContainer></RightContainer>
      </HeroContentContainer>
    </HeroContainer>
  );
};
export default Hero;
