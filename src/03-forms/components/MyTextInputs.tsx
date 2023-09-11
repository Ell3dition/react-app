import {useField, ErrorMessage} from 'formik'

interface Props{
    label:string,
    name:string,
    type?:'text' | 'email' | 'password',
    placeholder?:string
    [x:string]:unknown

}

export const MyTextInputs = ({label, ...props}:Props) => {

   const [field] =  useField(props)

  return (
    <>
        <label htmlFor={props.name}>{label}</label>
        <input className='text-input' {...field} {...props} />
        <ErrorMessage name={props.name} component='span'/>
    </>
  )
}