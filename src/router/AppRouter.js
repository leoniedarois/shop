import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import Form from '../components/Form'
import Jackets from '../components/Jackets'
import Header from '../components/Header'
import Home from '../components/Home'
import { createBrowserHistory } from "history"
import styled from 'styled-components'

export const history = createBrowserHistory();

const Container = styled.div `
  width: 1250px;
  margin: 0 auto;
   @media (max-width: 768px) {
   width: 100%;
  }
`



const AppRouter = () => {

  return (
    <Router history={history}>
      <Header/>
      <Container>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/signup' component={ Form} />
        <Route exact path='/mens' component={ Home }/>
        <Route exact path='/mens/jackets' component={ Jackets }/>
        <Route exact path='/mens/jackets/:id' component={ Home }/>
        <Route exact path='/womens' component={ Home }/>
      </Switch>
      </Container>
    </Router>
  )
}

export default AppRouter