import React from 'react';
import { withFormik, Field, Form } from 'formik';

const CreatePlayer = (props) => {
  const { isSubmitting } = props;

  const handleInput = (e) => {
    setValues({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleTags = (e, i) => {
    const { tags } = form;
    tags[i] = e.target.value;
    setValues({ ...form, tags });
  };

  return (
    <section className='createPlayer'>
      <section className='createPlayer__container'>
        <h1>Create a player</h1>
        <Form className='createPlayer__container--form'>
          <Field
            className='input'
            name='cover'
            type='text'
            placeholder='Imagen'
          />
          <Field
            className='input'
            name='name'
            type='text'
            placeholder='Nombre'
          />
          <Field
            className='input'
            name='position'
            type='text'
            placeholder='Posición'
          />
          <Field
            className='input'
            name='height'
            type='number'
            step='any'
            required
          />
          <Field
            className='input'
            name='saque'
            type='number'
            placeholder='Saque'
          />
          <Field
            className='input'
            name='rece'
            type='number'
            placeholder='Rece'
          />
          <Field
            className='input'
            name='levante'
            type='number'
            placeholder='Levante'
          />
          <Field
            className='input'
            name='ataque'
            type='number'
            placeholder='Ataque'
          />
          <Field
            className='input'
            name='bloque'
            type='number'
            placeholder='Bloque'
          />
          <Field
            className='input'
            name='defensa'
            type='number'
            placeholder='Defensa'
          />
          <Field
            className='input'
            name='category'
            type='text'
            placeholder='Categoría'
          />
          <Field className='input' name='sexo' type='text' placeholder='Sexo' />
          <button disabled={isSubmitting} type='submit' className='button'>
            Create
          </button>
        </Form>
      </section>
    </section>
  );
};

export default withFormik({
  mapPropsToValues(props) {
    return {
      cover: '',
      name: '',
      position: '',
      height: 0,
      saque: 0,
      rece: 0,
      levante: 0,
      ataque: 0,
      bloque: 0,
      defensa: 0,
      tags: [],
    };
  },
  handleSubmit(values, formikBag) {
    console.log(values);
    formikBag.isSubmitting(false);
  },
})(CreatePlayer);
