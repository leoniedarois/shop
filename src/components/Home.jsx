import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const ButtonLink = styled(Link) `
  padding: 10px;
  display: inline-block;
  margin: 20px;
  color: black;
  text-decoration: none;
  border-radius: 3px;
  background: #eeeeee;
  min-width: 100px;
  &:hover {
    background: #1856ff;
    color: white;
  }
`

const Home = props => {
  return (
    <>
      <h1>Home</h1>
      <ButtonLink to='/mens'>Mens</ButtonLink>
      <ButtonLink to='/womens'>Womens</ButtonLink>
    </>
  )
}

export default Home