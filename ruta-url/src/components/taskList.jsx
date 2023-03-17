import React from "react";
import useList from './hooks/useList';
import level from './models/level';

const taskList = ({ user }) => {
    const defaultTask = {
      name: 'Formik',
      description: 'Formulario con Formik',
      level: level.URGENT,
      done: false,
    };

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const tasks = useList([defaultTask]);
    const usuario = JSON.parse(user);
    return (
      <div>
        <h1>Task List - Usuario: {usuario.email}</h1>
        <taskForm onAdd={(values) => tasks.push(values)} />
        {tasks.isEmpty() ? (
          <p>Lista de Tareas Vacío</p>
        ) : (
          tasks.value.map((task, index) => (
            <div key={index} style={{ display: 'flex', alignItems: 'center' }} role="button">
              <input type="checkbox" onClick={() => tasks.remove(index)} checked={false} />
              <p style={{ fontWeight: 'bold', marginRight: '5px' }}>{task.name}</p>
              <p>{task.description}</p>
            </div>
          ))
        )}
      </div>
    );
  };
  
  export default taskList;