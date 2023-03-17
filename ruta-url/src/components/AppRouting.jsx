import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Loginpage from '../pages/loginPage'
import RegisterPage from '../pages/registerPage';
import TaskPage from '../pages/taskPage';

const AppRouting = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/login' element={<Loginpage />} />
                    <Route path='/registro' element={<RegisterPage />} />
                    <Route path='/tasks' element={<TaskPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default AppRouting;
