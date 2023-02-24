import Lottie from "react-lottie";
import animationData from "../../media/loader.json";
export const AnimationLoader = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    renderer: "svg",
  };
  return (
    <div>
      <Lottie options={defaultOptions} height={300} width={300} />
    </div>
  );
};
