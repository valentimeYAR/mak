import React, {useState} from 'react';
import s from './Styles/Header.module.css'
import Logo from "../UI/Logo";
import Location from "./Components/Location";
import NavLinks from "./Components/NavLinks";
import Modal from "./Components/Modal";

const Header = () => {
    const [modal, setModal] = useState(false)
    const smsGenerator = () => {
        let newCode = []
        for(let i = 0; newCode.length <= 4; i++){
            let res = Math.floor(Math.random() * 10)
            newCode.push(res)
        }
    }
    const modalHandler = (e) => {
        setModal(!modal)
    }
    return (
        <div className={s.container}>
            <div className={s.left}>
                <Logo width={'244px'} height={'27px'}/>
            </div>
            <div className={s.center}>
                <NavLinks/>
            </div>
            <div className={s.right}>
                <Location/>
                <button className={s.loginBtn} onClick={modalHandler}>Войти</button>
            </div>
            {modal && <Modal closeModal={modalHandler}/>}
        </div>
    );
};

export default Header;