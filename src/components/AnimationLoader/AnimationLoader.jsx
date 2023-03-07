import Lottie from "lottie-react";
import animationData from "../../media/loader.json";
export const AnimationLoader = () => (
  <Lottie animationData={animationData} loop={true} />
);
