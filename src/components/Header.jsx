import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const HeaderStyled = styled.div`
  background: #1856ff;
  margin-bottom: 20px;
  padding: 20px 0;
  display: flex;
`

const LinkStyled = styled(Link)`
  color: white;
  padding: 0 10px;
  text-decoration: none;
`

const Header = props => {
  console.log(props)
  return (
    <HeaderStyled>
      <LinkStyled to='/'>Home</LinkStyled>
      <LinkStyled to='/mens/jackets'>Mens</LinkStyled>
      <LinkStyled to='/womens'>Womens</LinkStyled>
      <LinkStyled to='/signup'>Sign Up</LinkStyled>
    </HeaderStyled>
  )
}

export default Header