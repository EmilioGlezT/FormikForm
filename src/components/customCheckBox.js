
import { useField } from "formik";


const CustomCheckBox = ({label, ...props}) =>{
    const[field, meta, helpers] = useField(props);
    console.log("field", field)
    console.log("meta", meta)
    console.log("helpers", helpers)

    return(
        <>
        <div className="checkbox">
        <label>{label}</label>
        <input {...field} {...props} className={meta.touched && meta.error ? "input-error" : ""} />
      
        <span>I accept the terms of service</span>
        </div>
        {meta.touched && meta.error ? (<div className="error">{meta.error}</div>) : ""}
        </>
    );
}
export default CustomCheckBox;