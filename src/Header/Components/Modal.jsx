import React, {useState} from 'react';
import s from './Styles/Modal.module.css'

const Modal = (props) => {
    const [phone, setPhone] = useState('+7')
    const inputHandler = (e) => {
        setPhone(e.target.value)
        if (phone.length < 2) {
            setPhone("+7")
        }
    }
    return (
        <div className={s.container}>
            <div className={s.content}>
                <h2 className={s.title}>Вход на сайт</h2>
                <p className={s.label}>Укажите свой телефон</p>
                <input type="tel" className={s.input} value={phone} onChange={inputHandler} maxLength={12}/>
                {phone.length === 12 ? <button className={s.btnActive}>Получить код в смс</button> :
                    <button className={s.btnActive} disabled={true}>Получить код в смс</button>}
                <p className={s.description}>Нажимая кнопку «Получить код в SMS» вы соглашаетесь с условиями <span>Пользовательского соглашения</span>
                </p>
                <p className={s.closeModal} onClick={props.closeModal}>X</p>
            </div>
        </div>
    );
};

export default Modal;