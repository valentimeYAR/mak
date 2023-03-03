import React from 'react';
import {NavLink} from "react-router-dom";
import s from "../Styles/Header.module.css";

const NavLinks = () => {
    return (
        <div style={{
            display: "flex",
            gap: '0 15px'
        }}>
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
    );
};

export default NavLinks;