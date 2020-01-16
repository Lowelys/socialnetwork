import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return <header className={s.header}>
        <img src='https://mir-s3-cdn-cf.behance.net/projects/max_808/96faca82769309.Y3JvcCwxNzQ5LDEzNjgsMjk4LDA.png'/>
        <div className={s.loginBlock}>
            {props.isAuth ? props.login
               : <NavLink to={'/login'}>Login</NavLink> }

        </div>
    </header>
};

export default Header;