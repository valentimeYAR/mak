import React from 'react';
import Logo from "../UI/Logo";
import s from './Styles/Header.module.css'
import {NavLink} from "react-router-dom";
import Location from "./Components/Location";

const Header = () => {
    return (
        <div className={s.container}>
            <div className={s.left}>
                <Logo width={'244px'} height={'27px'}/>
            </div>
            <div className={s.center}>
                <NavLink to={'/menu'} className={s.navLink}>Меню</NavLink>
                <NavLink to={'/sales'} className={s.navLink}>Акции</NavLink>
                <NavLink to={'/cafe'} className={s.navLink}>Кафе</NavLink>
                <NavLink to={'/kids-combo'} className={s.navLink}>Кидз Комбо</NavLink>
                <NavLink to={'/quality'} className={s.navLink}>Качество</NavLink>
                <NavLink to={'/on-map'} className={s.navLink}>Мы на карте</NavLink>
                <NavLink to={'/new'} className={s.navLink}>Новинки</NavLink>
                <NavLink to={'/news'} className={s.navLink}>Новости</NavLink>
                <NavLink to={'/about-us'} className={s.navLink}>О нас</NavLink>
            </div>
            <div className={s.right}>
                <Location/>
                <button className={s.loginBtn}>Войти</button>
            </div>
        </div>
    );
};

export default Header;