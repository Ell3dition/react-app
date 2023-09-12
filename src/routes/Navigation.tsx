import { BrowserRouter } from 'react-router-dom';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';

import logo from '../logo.svg'
import { 
    DynamicForm,
    FormikAbstractions, 
    FormikBasicPage, 
    FormikComponents, 
    FormikYupPage, 
    RegisterFormikPage, 
    Registerpage,

} from '../03-forms/pages';


export const Navigation = () => {
    return (
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={ logo } alt="React Logo" />
                    <ul>
                        <li>
                            <NavLink to="/register" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Register</NavLink>
                        </li>
                        <li>
                            <NavLink to="/formik-basic" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>formik basic</NavLink>
                        </li>
                        <li>
                            <NavLink to="/formik-yup" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>formik yup</NavLink>
                        </li>
                        <li>
                            <NavLink to="/formik-component" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>formik Components</NavLink>
                        </li>
                        <li>
                            <NavLink to="/formik-abstractions" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>formik Abstractations</NavLink>
                        </li>
                        <li>
                            <NavLink to="/formik-register" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>formik register</NavLink>
                        </li>
                        <li>
                            <NavLink to="/dynamic-form" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Dynamic Form</NavLink>
                        </li>
                    </ul>
                </nav>


                <Routes>
                    <Route path="formik-basic" element={ <FormikBasicPage/>} />
                    <Route path="formik-yup" element={ <FormikYupPage/>} />
                    <Route path="formik-component" element={ <FormikComponents/>} />
                    <Route path="formik-abstractions" element={ <FormikAbstractions/>} />
                    <Route path="dynamic-form" element={ <DynamicForm /> } />
                    <Route path="register" element={ <Registerpage/>} />
                    <Route path="formik-register" element={ <RegisterFormikPage/>} />
                    
                    <Route path="/*" element={ <Navigate to="/home" replace /> } />
                </Routes>

            </div>
        </BrowserRouter>
    )
}
