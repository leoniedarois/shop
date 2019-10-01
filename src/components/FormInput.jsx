import React from 'react'
import styled from 'styled-components'

const FormInput = ({ handleChange, label, ...otherProps }) => {

  const Input = styled.input ` 
     padding: 5px 10px;
     border: none;
     border-radius: 5px;
     width: 400px;
  `

  const Label = styled.label`
    margin-right: 20px;
  `

  const InputGroup = styled.div`
    margin-bottom: 10px;
  `

  return (
    <InputGroup className="group">
      {
        label ? (<Label className="form-input-label"> { label } </Label>) : null
      }
      <Input className="form-input" onChange={ handleChange } { ...otherProps } />

    </InputGroup>
  )
}

export default FormInput