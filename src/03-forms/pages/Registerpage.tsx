import { FormEvent } from 'react'
import '../styles/styles.css'
import { useForm } from '../hooks/useForm'

interface FormType{
  name:string,
  email:string,
  passwordUno:string,
  passwordDos:string,

}

export const Registerpage = () => {

  const {handleInput, email,name,passwordDos,passwordUno, formData, resetForm, isValidEmail} = useForm<FormType>({
    name:'',
    email:'',
    passwordUno:'',
    passwordDos:'',
  })
  

  const onSubmit = (event : FormEvent<HTMLFormElement>)=>{
    event.preventDefault()
    console.log(formData)
  }

  return (
    <div>
        <h1>registrer page</h1>
        <form action="" noValidate autoComplete='false' onSubmit={onSubmit}>
          <input 
            type="text" 
            placeholder="name" 
            name='name' 
            value={name} 
            onChange={handleInput} 
            className={`${name.trim().length <=0 && 'has-error'}`}
          />
          {name.trim().length <=0 && <span>Este campo es necesario</span>}
          <input 
            type="email" 
            placeholder="email" 
            name='email' 
            value={email} 
            onChange={handleInput}
            className={`${!isValidEmail(email)&& 'has-error'}`}
          />
          {!isValidEmail(email)&& <span>Email no es valido</span>}
          <input 
            type="password" 
            placeholder="password" 
            name='passwordUno' 
            value={passwordUno} 
            onChange={handleInput}
          />
             {passwordUno.trim().length <=0 && <span>Este campo es necesario</span>}
             {passwordUno.trim().length <6 && passwordUno.trim().length >0 && <span>El minimo es 6</span>}

          <input type="password" placeholder="repeat pass" name='passwordDos' value={passwordDos} onChange={handleInput}/>
          {passwordDos.trim().length <=0 && <span>Este campo es necesario</span>}
          {passwordDos.trim().length >0 && passwordUno !== passwordDos && <span>Las contrasenias no son iguales</span>}

          <button type="submit">Create</button>
          <button type="button" onClick={resetForm}>Reset</button>
        </form>
    </div>
  )
}