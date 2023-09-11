import {useField, ErrorMessage} from 'formik'

interface Props{
    label:string,
    name:string,
    placeholder?:string
    [x:string]:unknown

}

export const MySelect = ({label, ...props}:Props) => {

   const [field] =  useField(props)

  return (
    <>
        <label htmlFor={props.name}>{label}</label>
        <select {...field} {...props} />
        <ErrorMessage name={props.name} component='span'/>
    </>
  )
}