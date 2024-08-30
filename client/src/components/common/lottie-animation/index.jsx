import { animationDefaultOptions } from "@/lib/lottie-utils";
import Lottie from "react-lottie";

const LottieAnimation = () => {
  return (
    <Lottie
      isClickToPauseDisabled={false}
      options={animationDefaultOptions}
      height={200}
      width={200}
    />
  );
};

export default LottieAnimation;