import { useState } from "react";
// @ts-ignore
import { Range } from "react-range";

const Line = () => {
  const [values, setValues] = useState<number[]>([50]);

  return (
    <div className="line">
      <div className="number">15</div>
      <div className="range"></div>
      <div className="result">2800 euro</div>
    </div>
  );
};

export default Line;
