import {useFormik} from 'formik'
import * as Yup from 'yup'


export const FormikYupPage = () => {

    const {handleSubmit, errors, touched, getFieldProps} = useFormik({
        initialValues:{
            firstname:'',
            lastName:'',
            email:''
        },
        onSubmit: values =>{
            console.log(values)
        },
        validationSchema: Yup.object({
            firstname:Yup.string().max(15, 'Debe de tener 15 caracter').required('Requerido'),
            lastName:Yup.string().max(10, 'Debe de tener 10 caracter').required('Requerido'),
            email:Yup.string().email('Debe ser un email valido').required('Requerido')
        })
    })


  return (
    <div>
        <h1>Formik YUP tutorial</h1>

        <form noValidate onSubmit={handleSubmit}>
            <label htmlFor="firstName">FirstName</label>
            <input 
                type="text" 
                {
                    ...getFieldProps('firstname')
                }

            />
            {touched.firstname && errors.firstname && <span>{errors.firstname}</span>}

            <label htmlFor="lastName">lastName</label>
            <input 
                type="text" 
                {
                    ...getFieldProps('lastName')
                }
            />
             {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}

            <label htmlFor="email">email</label>
            <input 
                type="email" 
                {
                    ...getFieldProps('email')
                }
            />
             {touched.email && errors.email && <span>{errors.email}</span>}

            <button type="submit">Submit</button>
        </form>
    </div>
  )
}