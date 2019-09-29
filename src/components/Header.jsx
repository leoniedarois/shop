import React from 'react'
import { Link } from 'react-router-dom'

import { history } from '../router/AppRouter';

const Header = props => {
    console.log(props)
    return (
        <div>
            <Link to='/mens'>mens</Link>
            <Link to='/womens'>womens</Link>
            <Link to='/signup'>sign up</Link>
        </div>
    )

}
export default Header
// function Header (props) {

// }