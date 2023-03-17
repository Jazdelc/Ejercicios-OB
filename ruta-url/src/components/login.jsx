import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';


const loginSchema = Yup.object().shape(
    {
        email: Yup.string()
                .email('Formato de email inválido')
                .required('Email es requerido'),
        password: Yup.string()
                .required('Contraseña es requerida')
    }
);


const Loginformik = () => {

    const initialCredentials = {
        email: '',
        password: ''
    }

    const navigate = useNavigate();

    return (
        <div>
            <h4>Iniciar Sesión</h4>
            <Formik
                initialValues = { initialCredentials }
                validationSchema = {loginSchema}
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 1000));
                    alert(JSON.stringify(values, null, 2));
                    await localStorage.setItem('credentials', values);
                    navigate.push('/login');
                }}
            >             
                {({ values,
                    touched,
                    errors,
                    isSubmitting,
                    handleChange,
                    handleBlur }) => (
                        <Form>
                            <label htmlFor="email">Email</label>
                            <Field id="email" type="email" name="email" placeholder="example@email.com" />

                            {
                                errors.email && touched.email && 
                                (
                                    <ErrorMessage name="email" component='div'></ErrorMessage>
                                )
                            }

                            <label htmlFor="password">Contraseña</label>
                            <Field
                                id="password"
                                name="password"
                                placeholder="password"
                                type='password'
                            />
                            {
                                errors.password && touched.password && 
                                (
                                    <ErrorMessage name="password" component='div'></ErrorMessage>
                                )
                            }
                            <button type="submit">Login</button>
                            {isSubmitting ? (<p>Iniciando sesión...</p>): null}
                        </Form>
                )}
            </Formik>
        </div>
    );
}

export default Loginformik;
