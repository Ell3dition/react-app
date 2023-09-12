import{Formik, Form} from 'formik'
import fromJson from '../data/custom-form.json'
import { MySelect, MyTextInputs } from '../components'
import * as Yup from 'yup'

const initialValues:{[key:string]:string } ={}
const requiredfields:{[key:string]:any } ={}

for (const input of fromJson) {
    initialValues[input.name] = input.value
    if(!input.validation) continue

    let scheme = Yup.string()

    for (const rule of input.validation) {
        
        if(rule.type === 'required'){
            scheme = scheme.required('Este campo es requerido')
        }

        if(rule.type === 'minLength'){
            scheme = scheme.min((rule as any).value || 2,`El minimo es de ${(rule as any).value || 2}`)
        }
        if(rule.type === 'email'){
            scheme = scheme.email('Debe ser un email valido')
        }

    }

    requiredfields[input.name] = scheme
}

const validatationSchema = Yup.object({...requiredfields})

export const DynamicForm = () => {
  return (
    <div>
        <h1>Dynamic form</h1>

        <Formik 
            initialValues={initialValues}

            onSubmit={(values)=>console.log(values)}
            validationSchema={validatationSchema}
        >
            {()=>(
                <Form noValidate>
                    {
                        fromJson.map(({label, name, placeholdder, type, options})=>{


                            if(type === 'input' ||type === 'password'||type === 'email' ){
                                return <MyTextInputs 
                                        key={name}
                                        label={label} 
                                        name={name} 
                                        placeholder={placeholdder} 
                                        type={(type as any)}
                                    />
                            }

                            return <MySelect label={label} name={name} key={name}>
                                    <option value="">Select an option</option>
                                    {
                                        options?.map((opt)=>(
                                            <option key={opt.id} value={opt.id}>{opt.label}</option>
                                        ))
                                    }
                            </MySelect>
                        })
                    }
                    <button type='submit'>Submit</button>
                </Form>
            )}
        </Formik>
    </div>
  )
}