import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Home from '../components/Home';
import Header from '../components/Header'
import Form from '../components/Form'
import Jackets from '../components/Jackets'
export const history = createBrowserHistory();

const AppRouter = () => {
    return(
        <Router history={history}>
            <Header/>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/mens' component={Home} />
                <Route exact path='/mens/jackets' component={Jackets} />
                <Route exact path='/mens/jackets/:id' component={Home} />
                <Route exact path='/womens' component={Home} />
                <Route exact path='/signup' component={Form} />
            </Switch>
        </Router>
    )
}

export default AppRouter