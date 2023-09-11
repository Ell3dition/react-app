import {useFormik, FormikErrors} from 'formik'

interface FormValues{
    firstname:string,
    lastName:string,
    email:string
}

export const FormikBasicPage = () => {
    const validate = (values: FormValues) =>{
        const errors: FormikErrors<FormValues> = {}

        if(!values.firstname){
            errors.firstname = 'Required'
        }else if(values.firstname.length >= 15){
            errors.firstname = 'Must be 15 characters or less'
        }

        if(!values.lastName){
            errors.lastName = 'Required'
        }else if(values.lastName.length >= 10){
            errors.lastName = 'Must be 10 characters or less'
        }

        if (!values.email) {
            errors.email = 'Required';
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
          }
        return errors
    }

    const {handleChange, values,  handleSubmit, errors, touched, handleBlur} = useFormik({
        initialValues:{
            firstname:'',
            lastName:'',
            email:''
        },
        onSubmit: values =>{
            console.log(values)
        },
        validate
    })

  return (
    <div>
        <h1>Formik Basic tutorial</h1>

        <form noValidate onSubmit={handleSubmit}>
            <label htmlFor="firstName">FirstName</label>
            <input 
                type="text" 
                name="firstname"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.firstname}
            />
            {touched.firstname && errors.firstname && <span>{errors.firstname}</span>}

            <label htmlFor="lastName">lastName</label>
            <input 
                type="text" 
                name="lastName"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.lastName}
            />
             {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}

            <label htmlFor="email">email</label>
            <input 
                type="email" 
                name="email"
                onBlur={handleBlur}
                onChange={handleChange} 
                value={values.email}
            />
             {touched.email && errors.email && <span>{errors.email}</span>}

            <button type="submit">Submit</button>
        </form>
    </div>
  )
}