import { useState } from "react";
// @ts-ignore
import { Range } from "react-range";

const Line = () => {
  const [values, setValues] = useState<number[]>([50]);

  return (
    <div className="line">
      <div className="number">15</div>
      <div className="range">
        <Range
          step={0.1}
          min={0}
          max={100}
          values={values}
          onChange={(values) => setValues(values)}
          renderTrack={({ props, children }) => (
            <div
              {...props}
              style={{
                ...props.style,
                height: "1px",
                width: "100%",
                backgroundColor: "#01C497",
              }}
            >
              {children}
            </div>
          )}
          renderThumb={({ props }) => (
            <div
              className={"rangeCircle"}
              {...props}
              style={{
                ...props.style,
                height: "18px",
                width: "18px",
                backgroundColor: "#01C497",
              }}
            />
          )}
        />
      </div>
      <div className="result">2800 euro</div>
    </div>
  );
};

export default Line;
