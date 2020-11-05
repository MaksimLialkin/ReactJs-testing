import React from 'react';
import { NavLink } from 'react-router-dom'
import classes from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}><NavLink to="/main" activeClassName={classes.active}>Обо мне</NavLink></div>
            <div className={classes.item}><NavLink to="/dialogs" activeClassName={classes.active}>Сообщения</NavLink></div>
            <div className={classes.item}><a href="#">Мой опыт</a></div>
            <div className={classes.item}><a href="#">Мои работы</a></div>
            <div className={classes.item}><a href="#">Прайс-лист</a></div>
        </nav>
    )
}

export default Navbar