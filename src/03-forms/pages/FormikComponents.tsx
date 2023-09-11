import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'


export const FormikComponents = () => {


  return (
    <div>
        <h1>FormikComponents</h1>

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
        <label htmlFor="firstName">FirstName</label>
        <Field name="firstname" type='text' />
        <ErrorMessage name="firstname" component="span"  />
        
        <label htmlFor="lastName">lastName</label>
        <Field name="lastName" type='text' />
        <ErrorMessage name="lastName" component="span"  />
        
        <label htmlFor="email">email</label>
        <Field name="email" type='email' />
        <ErrorMessage name="email" component="span"  />

        <label htmlFor="jobType">jobtype</label>
        <Field name="jobType" as='select'>
            <option value="default">Pick Something</option>
            <option value="Developer">Developer</option>
            <option value="Designer">Designer</option>
            <option value="IT Senior">IT Senior</option>
        </Field>
        <ErrorMessage name="jobType" component="span"  />
               
        <label>
            <Field name="terms" type='checkbox' />
            Terms and Conditions
        </label>
        
        <ErrorMessage name="terms" component="span"  />
        
        <button type="submit">Submit</button>
        
    </Form>
  )
           }

        </Formik>

        
    </div>
  )
}