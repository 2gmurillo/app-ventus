import React from 'react';
import { withFormik, Field, Form } from 'formik';

const CreatePlayer = (props) => {
  const { isSubmitting, values } = props;

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
            value={values.cover}
          />
          <Field
            className='input'
            name='name'
            type='text'
            placeholder='Nombre'
            value={values.name}
          />
          <Field
            className='input'
            name='position'
            type='text'
            placeholder='Posición'
            value={values.position}
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
            value={values.saque}
          />
          <Field
            className='input'
            name='rece'
            type='number'
            placeholder='Rece'
            value={values.rece}
          />
          <Field
            className='input'
            name='levante'
            type='number'
            placeholder='Levante'
            value={values.levante}
          />
          <Field
            className='input'
            name='ataque'
            type='number'
            placeholder='Ataque'
            value={values.ataque}
          />
          <Field
            className='input'
            name='bloque'
            type='number'
            placeholder='Bloque'
            value={values.bloque}
          />
          <Field
            className='input'
            name='defensa'
            type='number'
            placeholder='Defensa'
            value={values.defensa}
          />
          <Field
            className='input'
            name='tags[1]'
            type='text'
            placeholder='Categoría'
            value={values.tags[1]}
          />
          <Field
            className='input'
            name='tags[0]'
            type='text'
            placeholder='Sexo'
            value={values.tags[0]}
          />
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
      tags: ['', ''],
    };
  },
  // handleTags(e, i) {
  //   const { tags } = form;
  //   tags[i] = e.target.value;
  //   setValues({ ...form, tags });
  // },
  handleSubmit(values, formikBag) {
    console.log(values);
    formikBag.isSubmitting(false);
  },
})(CreatePlayer);
