import { Field } from "formik";

const CheckedComp = (props: any) => {
  return (
    <div className="round">
      <Field id={props.id} type="checkbox" name="politic" />
      <label className={"innerLable"} htmlFor={props.id}></label>
    </div>
  );
};

export default CheckedComp;
