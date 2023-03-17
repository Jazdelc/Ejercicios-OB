import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import roles from './models/roles';

const Register = () => {


    const initialValues = {
        username: '',
        email: '',
        password: '',
        confirm: '',
        role: roles.USER
    }

    const registerSchema = Yup.object().shape(
        {
            username: Yup.string()
                .min(6, 'Usuario muy corto')
                .max(12, 'Usuario muy largo')
                .required('Usuario es requerido'),
            email: Yup.string()
                .email('Formato de email inválido')
                .required('Email es requerido'),
            role: Yup.string()
                .oneOf([roles.USER, roles.ADMIN], 'Debes seleccionar un rol: User / Admin')
                .required('Rol es requerido'),
            password: Yup.string()
                .min(8, 'Contraseña muy corta')
                .required('Contraseña es requerida'),
            confirm: Yup.string()
                .when('contraseña', {
                    is: value => (value && value.length > 0 ? true : false),
                    then: Yup.string().oneOf(
                        [Yup.ref("contraseña")],
                        'Contraseñas deben ser idénticas'
                    )
                }).required('Debes confirmar contraseña')
        }
    )


    return (
        <div>
            <h4>Registro</h4>
            <Formik
                initialValues = {initialValues}
                validationSchema = {registerSchema}
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 1000));
                    alert(JSON.stringify(values, null, 2))
                }}
            >

            {({ values,
                    touched,
                    errors,
                    isSubmitting,
                    handleChange,
                    handleBlur }) => (
                        <Form>
                            <label htmlFor="username">Usuario</label>
                            <Field id="username" type="text" name="username" placeholder="usuario" />
                            
                            {
                                errors.username && touched.username && 
                                (
                                    <ErrorMessage name="username" component='div'></ErrorMessage>
                                )
                            }

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
                                placeholder="contraseña"
                                type='password'
                            />
                            {
                                errors.password && touched.password && 
                                (
                                    <ErrorMessage name="password" component='div'></ErrorMessage>
                                )
                            }

                            <label htmlFor="confirm">Confirmar Contraseña</label>
                            <Field
                                id="confirm"
                                name="confirm"
                                placeholder="confirmar contraseña"
                                type='password'
                            />
                            {
                                errors.confirm && touched.confirm && 
                                (
                                    <ErrorMessage name="confirm" component='div'></ErrorMessage>
                                )
                            }

                            <button type="submit">Registro</button>
                            {isSubmitting ? (<p>Enviando...</p>): null}

                        </Form>
                    )
            }

            </Formik>
        </div>
    );
}

export default Register;
