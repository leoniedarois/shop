import React, { useState } from 'react'
import FormInput from "./FormInput"
import styled from 'styled-components'

const FormStyled = styled.div`
  background: #eeeeee;
  padding: 20px;
  border-radius: 10px;
`

const Form = props => {
  const [data, setData] = useState({
    email: '',
    name: '',
    password: '',
    confirmPassword: ''
  })

  const handleChange = e => {
    // evite de devoir écrire e.target.name à chaque fois
    const { value, name } = e.target;
    setData({
      // efface les datas précédentes
        ...data,
      // recupère la valeur de chaque input en utilisant son name
      [name]: value,
      });

    console.log(e);
  }

  // permet d'éviter d'avoir à ecrire data.email etc
  const { email, name, password, confirmPassword } = data;

  // ici l'affichage
  return (
    <>
      <h1>
      Sign Up here
      </h1>
      <FormStyled>
        <FormInput
          type='email'
          name='email'
          placeholder='your email ...'
          value={email}
          required
          handleChange={handleChange}
          label="*Email :"
        />
        <FormInput
          type='text'
          name='name'
          placeholder='your name ...'
          value={name}
          required
          handleChange={handleChange}
          label="*Name :"
        />
        <FormInput
          type='password'
          name='password'
          placeholder='your password ...'
          value={password}
          required
          handleChange={handleChange}
          label="*Password :"
        />
        <FormInput
          type='password'
          name='confirmPassword'
          placeholder='your password ...'
          value={confirmPassword}
          required
          handleChange={handleChange}
          label="*Confirm your password :"
        />
      </FormStyled>
    </>
  )
}

export default Form