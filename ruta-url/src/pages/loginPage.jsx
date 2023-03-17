import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Loginformik from '../components/login';

const Loginpage = () => {

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
            <Loginformik onSubmit={(e) => setCredentials(e)} />
            <Link to='/registro'>Registrarse</Link>
        </div>
    );
}

export default Loginpage;
