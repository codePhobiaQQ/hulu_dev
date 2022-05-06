import { useState, useEffect } from "react";

interface HookI {
  width: number;
  height: number;
}

// Hook
export function useWindowSize() {
  const [windowSize, setWindowSize] = useState<HookI>({
    width: 1920,
    height: 630,
  });
  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };
      // Add event listener
      window.addEventListener("resize", handleResize);
      // Call handler right away so state gets updated with initial window size
      handleResize();
      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}
