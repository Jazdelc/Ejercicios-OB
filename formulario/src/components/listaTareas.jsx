import React from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import Niveles from '../models/niveles';
import useList from './hooks/usoLista';

const Tasklist = () => {
  const TaskSchema = Yup.object().shape({
    name: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
    description: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('Required'),
  });
  const defaultTask = {
    name: 'Actividad',
    description: 'Tarea a Realizar',
    level: Niveles.URGENT,
    done: false,
  };
  const tasks = useList([defaultTask]);

  return (
    <div>
      <h1>Lista de Tareas</h1>
      <Formik
        initialValues={{
          name: '',
          description: '',
          level: Niveles.NORMAL,
          done: false,
        }}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            tasks.push(values);
            actions.resetForm({});
            actions.setSubmitting(false);
          }, 500);
        }}
        validationSchema={TaskSchema}
      >
        {({ errors }) => (
          <Form>
            <Field name="name" placeholder="Task Name" />
            {errors && errors.name}
            <Field name="description" placeholder="Task Description" />
            {errors && errors.description}

            <Field as="select" name="level">
              <option value={Niveles.NORMAL}>Normal</option>
              <option value={Niveles.URGENT}>Urgent</option>
              <option value={Niveles.BLOCKING}>Blocking</option>
            </Field>
            <button type="submit">Crear</button>
          </Form>
        )}
      </Formik>
      {tasks.isEmpty() ? (
        <p>Lista de Tareas Vacío</p>
      ) : (
        tasks.value.map((task, index) => (
          <li key={index} style={{ display: 'flex', alignItems: 'center' }}>
            <input type="checkbox" onClick={() => tasks.remove(index)} checked={false} />
            <p style={{ fontWeight: 'bold', marginRight: '5px' }}>{task.name}</p>
            <p>{task.description}</p>
          </li>
        ))
      )}
    </div>
  );
};

export default Tasklist;