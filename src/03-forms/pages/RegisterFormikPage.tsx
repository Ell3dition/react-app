import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import { MyTextInputs } from '../components'
import '../styles/styles.css'

export const RegisterFormikPage = () => {



  return (
    <div>
        <h1>RegisterFormikPages</h1>

<Formik

  initialValues={
    {
      name:'',
      email:'',
      passwordUno:'',
      passwordDos:'',
    }
  }
  onSubmit={(values)=>{
    console.log(values)
}}
  validationSchema={Yup.object({
    name:Yup.string()
            .max(15, 'Debe de tener 15 caracter')
            .required('Requerido')
            .min(2,'El minimo es de 2 caracteres'),
    email:Yup.string().email('Debe ser un email valido').required('Requerido'),
    passwordUno:Yup.string().min(6, 'El minimo es de 6 caracteres').required('Requerido'),
    passwordDos:Yup.string().equals([Yup.ref('passwordUno')] ,'Las contrasenias deben coincidir').required('Requerido')
})}


>
  
{    ({handleReset})=>(
      
        <Form>
          <MyTextInputs label={'Nombre'} name={'name'} />
          <MyTextInputs label={'E-mail'} name={'email'} type='email'/>
          <MyTextInputs label={'Pass'} name={'passwordUno'} type='password'/>
          <MyTextInputs label={'Repita Pass'} name={'passwordDos'} type='password'/>

          <button type="submit">Create</button>
          <button type="button" onClick={handleReset}>Reset</button>
        </Form>
    )}



</Formik>

    </div>
  )
}