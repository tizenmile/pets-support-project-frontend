import { ThreeCircles } from "react-loader-spinner";
import { LoaderWrapper } from "./Loader.styled";

const Loader = () => {
  return (
    <LoaderWrapper>
      <ThreeCircles
        height="100"
        width="100"
        color="rgba(245, 146, 86, 1)"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="three-circles-rotating"
        outerCircleColor=""
        innerCircleColor=""
        middleCircleColor=""
      />
    </LoaderWrapper>
  );
};

export default Loader;
