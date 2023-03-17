import React from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import level from './models/level';

const Tasks = ({ onAdd }) => {
    const TaskSchema = Yup.object().shape({
      name: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
      description: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('Required'),
    });
    return (
      <Formik
        initialValues={{
          name: '',
          description: '',
          level: level.NORMAL,
          done: false,
        }}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            onAdd(values);
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
              <option value={level.NORMAL}>Normal</option>
              <option value={level.URGENT}>Urgent</option>
              <option value={level.BLOCKING}>Blocking</option>
            </Field>
            <button type="submit">Enviar</button>
          </Form>
        )}
      </Formik>
    );
  };
  
  export default Tasks;