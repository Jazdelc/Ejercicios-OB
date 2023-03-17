/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Tasks from '../components/tasks';

const TaskPage = () => {

    const taskDashboard = () => {

        const navigate = useNavigate();
        const user = localStorage.getItem('user') || null;

        useEffect(() => {
            if (!user) {
                navigate('/');
            }
        });
    }

    return (
        <div>
            <Tasks user={user} />
        </div>
    );
}

export default TaskPage;
