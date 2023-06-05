import { useFormik } from "formik";
import { basicSchema } from "../schemas";

const onSubmit = async (values,actions) => {
    console.log(values);
    console.log(actions);
    console.log("submitted");
    await new Promise((resolve) => setTimeout(resolve,1000));
   actions.resetForm();
}
const FormFormik = () =>{
const {values, handleChange, handleBlur, isSubmitting, handleSubmit, errors, touched}= useFormik({initialValues:{
    email:"",
    password:"",
    confPassword:"",
    age:'',

},
validationSchema: basicSchema,
onSubmit, 
});
console.log(errors);
return(
    <form onSubmit={handleSubmit} autoComplete="off">
        <label htmlFor="email">Email</label>
        <input
        value={values.email}
        onChange={handleChange}
        id="email"
        type="email"
        onBlur={handleBlur}
        placeholder="Coloca tu correo electronico"
        className={errors.email && touched.email ? "input-error" : ""}
        ></input>
        {errors.email && touched.email && <p className="error">{errors.email}</p>}

        <label htmlFor="password">Password</label>
        <input
        value={values.password}
        onChange={handleChange}
        id="password"
        type="password"
        onBlur={handleBlur}
        className={errors.password && touched.password ? "input-error" : ""}>
        </input>
        {errors.password && touched.password && <p className="error">{errors.password}</p>}

        <label htmlFor="confPassword">Confirm Password</label>
        <input
        value={values.confPassword}
        onChange={handleChange}
        id="confPassword"
        type="password"
        onBlur={handleBlur}
        className={errors.confPassword && touched.confPassword ? "input-error" : ""}>   
        </input>
        {errors.confPassword && touched.confPassword && <p className="error">{errors.confPassword}</p>}
        <label htmlFor="age">Age</label>
       

        <input
        value={values.age}
        onChange={handleChange}
        id="age"
        type="number"
        placeholder="Coloca tu edad"
        onBlur={handleBlur}
        className={errors.age && touched.age ? "input-error" : ""}>
        </input>
        {errors.age && touched.age && <p className="error">{errors.age}</p>}

        <button type="submit" disabled={isSubmitting}>Enviar</button>


    </form>
);


}
export default FormFormik;