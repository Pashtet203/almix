import React from 'react';
import cl from "./feedBackForm.module.css"
const FeedBackForm = () => {
    return (
        <form className={cl.form}>
            <div className={cl.form__group}>
                <input
                    className={cl.form__field}
                    placeholder={"Имя и Фамилия"}
                    type="text"
                    id="name"
                />
                <label htmlFor="name" className={cl.form__label}>Имя и Фамилия</label>
            </div>
            <div className={cl.form__group}>
                <input
                    className={cl.form__field}
                    placeholder={"Откуда вы ?"}
                    type="text"
                    id="from"
                />
                <label htmlFor="from" className={cl.form__label}>Откуда вы ?</label>
            </div>
            <div className={cl.form__group}>
                <textarea
                    className={`${cl.form__field} ${cl.textarea}`}
                    style={{fontSize: "1.3rem", minHeight: "200px"}}
                    placeholder={"Расскажите свою историю (какой аромат напоминает вам родные места?)"}
                    id="from"
                />
                <label htmlFor="from" className={cl.form__label}>Расскажите свою историю (какой аромат напоминает вам
                    родные места?)</label>
            </div>
            <div className={cl.form__group}>
                <input
                    className={cl.form__field}
                    placeholder={"Как с вами связаться? (телефон, e-mail или соцсети)"}
                    type="text"
                    id="connection"
                />
                <label htmlFor="connection" className={cl.form__label}>Как с вами связаться?</label>
            </div>
            <button className={cl.form__btn}>
                Отправить историю
            </button>
        </form>
    );
};

export default FeedBackForm;