// @ts-ignore
import { getTrackBackground, Range } from "react-range";

interface IRangeWrapper {
  step: number;
  min: number;
  max: number;
  values: any;
  setValue: any;
}

// @ts-ignore
const RangeWrapper = ({ step, max, min, setValue, values }: IRangeWrapper) => {
  // @ts-ignore
  return (
    <Range
      step={step}
      min={min}
      max={max}
      values={values}
      onChange={(values) => setValue(values)}
      renderTrack={({ props, children }) => (
        <div
          className="sliderLine"
          // ref={props.ref}
          {...props}
          style={{
            background: getTrackBackground({
              values: values,
              colors: ["#01C497", "#666"],
              min: min,
              max: max,
            }),
          }}
        >
          {children}
        </div>
      )}
      renderThumb={({ props }) => <div className="circlingRange" {...props} />}
    />
  );
};

export default RangeWrapper;
