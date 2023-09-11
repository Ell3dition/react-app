import {useField, ErrorMessage} from 'formik'

interface Props{
    label:string,
    name:string,
    [x:string]:unknown

}

export const MyCheckbox = ({label, ...props}:Props) => {

   const [field] =  useField({...props, type:'checkbox'})

  return (
    <>
        <label>
            <input {...field} {...props} type='checkbox' />
            {label}
        </label>
        <ErrorMessage name={props.name} component='span'/>
    </>
  )
}