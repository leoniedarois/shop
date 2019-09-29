import React, { useState } from 'react'
import FormInput from './FormInput'

const Form = props => {
    const [data, setData] = useState({
        email: '', 
        name: '', 
        password: '', 
        confirmPassword: ''
    })
    const handleChange = e => {
        const { value, name } = e.target;
        setData({
          ...data,
          [name]: value
        });
        }
    const handleSubmit = e => {
        e.preventDefault()
    }
    const { email, password, name, confirmPassword } = data;

    return (
        <form onSubmit={handleSubmit}>
            <FormInput 
                type='email' 
                name='email' 
                placeholder='email' 
                value={email} 
                required
                handleChange={handleChange}

            />
            <FormInput 
                type='text' 
                name='name' 
                placeholder='name' 
                value={name} 
                required
                handleChange={handleChange}
                
            />
            <FormInput 
                type='password' 
                name='password' 
                placeholder='password' 
                value={password} 
                required
                handleChange={handleChange}

            />
            <FormInput 
                type='password' 
                name='confirmPassword' 
                placeholder='confirm password' 
                value={confirmPassword} 
                required
                handleChange={handleChange}
            />
        </form>
    )
}

export default Form