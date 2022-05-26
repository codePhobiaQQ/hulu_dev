import { useEffect, useState } from "react";

const useWindowSize = () => {
  const getWindowSize = () => {
    if (process.browser) {
      return {
        width: window.innerWidth,
        height: window.innerHeight,
      };
    }
    return {
      width: 1920,
      height: 980,
    };
  };

  const [windowSize, setWindowSize] = useState(getWindowSize);

  useEffect(() => {
    const handle = () => setWindowSize(getWindowSize());
    window.addEventListener("resize", handle);
    return () => {
      window.removeEventListener("resize", handle);
    };
  }, []);

  return windowSize;
};

export default useWindowSize;
