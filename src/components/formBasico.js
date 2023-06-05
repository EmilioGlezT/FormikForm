import { Form, Formik, Field } from "formik";
import CustomInput from "./customInput";
import CustomSelect from "./customSelect";
import { advancedSchema } from "../schemas";
import CustomCheckBox from "./customCheckBox";

const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
  };
const SecondForm = () => (
    <div>
      <h1>My Form</h1>
      <Formik
        initialValues={{ username: "", trabajo:"", aceptaTerminos: false }}
        validationSchema={advancedSchema}
        onSubmit={onSubmit}
        
      >
        {({isSubmitting}) => (
          <Form>
            <CustomInput
            label="Username"
            name="username"
            type="text"
            placeholder="Coloca tu nombre de usuario"
            
            />
             <CustomSelect 
             label="Trabajo"
            name="trabajo"
            placeholder="Coloca tu trabajo">
           <option value="">Por favor selecciona un trabajo</option>
           <option value="diseñador">Diseñador</option>
           <option value="desarrollador">Desarrollador</option>
           <option value="gerente">Gerente</option>
           <option value="otro">Otro</option>
            </CustomSelect>
            <CustomCheckBox
            type="checkbox"
            name="aceptaTerminos"
            />
            {/* <Field type="text" name="name" placeholder="Name" /> */}
            {/* <input
              type="text"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.name}
              name="name"   
            /> */}
           
            <button disabled={isSubmitting}type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
 export default SecondForm;