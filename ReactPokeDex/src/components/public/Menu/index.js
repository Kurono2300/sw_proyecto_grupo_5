// A todo componente de react se agrega un objeto props
// login
import './menu.css';
import { NavLink } from 'react-router-dom';
import React, { Component } from "react";
//import {useSession} from '../../../hooks/Session';

const Menu = ()=>{
    return (
        <ul className="Menu">
            <li><NavLink activeClassName="active" to='/login'>Login</NavLink></li>
            <li><NavLink activeClassName="active" to='/signin'>Sign In</NavLink></li>
        </ul>
    );
}

export default Menu;
