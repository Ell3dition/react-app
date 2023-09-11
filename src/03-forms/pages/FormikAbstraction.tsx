import {Formik, Form} from 'formik'
import * as Yup from 'yup'
import { MyCheckbox, MySelect, MyTextInputs } from '../components'



export const FormikAbstractions = () => {


  return (
    <div>
        <h1>FormikAbstractions</h1>

        <Formik
            initialValues={{
                firstname:'',
                lastName:'',
                email:'',
                terms:false,
                jobType:''
            }}
            onSubmit={(values)=>{
                    console.log(values)
            }}

            validationSchema={Yup.object({
                firstname:Yup.string().max(15, 'Debe de tener 15 caracter').required('Requerido'),
                lastName:Yup.string().max(10, 'Debe de tener 10 caracter').required('Requerido'),
                email:Yup.string().email('Debe ser un email valido').required('Requerido'),
                terms:Yup.boolean().oneOf([true],'Debe de aceptar las condiciones'),
                jobType:Yup.string().notOneOf(['default'],'Debe seleccionar una opcion')
            })}
        
        >

           {
  (formik)=>(
    <Form>
        <MyTextInputs 
            label='FirstName' 
            name='firstname'
            placeholder='First Name'
        />
     
        <MyTextInputs 
            label='lastName' 
            name='lastName'
            placeholder='lastName'
        />

        <MyTextInputs 
            label='email' 
            name='email'
            placeholder='email'
            type='email'
        />
     

        <MySelect name="jobType" label='Job Type'>
            <option value="default">Pick Something</option>
            <option value="Developer">Developer</option>
            <option value="Designer">Designer</option>
            <option value="IT Senior">IT Senior</option>
        </MySelect>

               
        <MyCheckbox label={'Terms and Conditions'} name={'terms'} />
        
        <button type="submit">Submit</button>
        
    </Form>
  )
           }

        </Formik>

        
    </div>
  )
}