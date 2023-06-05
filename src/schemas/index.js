import * as yup from "yup";

//const passwordRules = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])$/;
// un digito numerico, una minuscula, una mayuscula de 8 a 32  digitos.
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.
export const basicSchema = yup.object().shape({
  email: yup.string().email("Por favor coloca un email valido").required("Dato requerido"),
  age: yup.number().positive().integer().required("Dato requerido"),  
  password: yup
  .string()
  .min(8)
  .matches(passwordRules, {message:"Por favor coloca una contraseña mas complicada"})
  .required("Campo requerido"),
  confPassword: yup
  .string()
  .oneOf([yup.ref("password"),null], "La contraseña debe coincidir")
  .required("Campo requerido")
});

export const advancedSchema = yup.object().shape({
username : yup.string().min(8,"Debe tener minimo 8 caracteres").required("Campo requerido"),
trabajo : yup.string()
.oneOf(["diseñador", "desarrollador", "gerente", "otro"],"Solo puede seleccionar estos tipos")
.required("Campo requerido"),
aceptaTerminos : yup.boolean()
.oneOf([true],"Debe aceptar los terminos y condi...")
})