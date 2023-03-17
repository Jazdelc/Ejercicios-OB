import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Register from '../components/register';

const RegisterPage = () => {

    const [credentials, setCredentials] = useState(null);
    const navigate = useNavigate();
    const user = localStorage.getItem('user') || null;

    useEffect(() => {
        if (user) {
           navigate('/dashboard'); 
        }
    });

    useEffect(() => {
        if (credentials) {
            const c = JSON.stringify(credentials);
            localStorage.setItem('user', c);
            navigate('/dashboard'); 
        }
    });

    return (
        <div>
            <Register onSubmit={(e) => setCredentials(e)} />
            <Link to="/login">Login</Link>
        </div>
    );
}

export default RegisterPage;
