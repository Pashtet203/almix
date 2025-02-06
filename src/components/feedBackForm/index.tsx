import React from 'react';
import cl from "./feedBackForm.module.css"
const FeedBackForm = () => {

    const onSubmit = async (event:any) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "e5615027-944a-46b3-a4d0-efb21d9e5892");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            console.log("Success", res);
        }
    };


    return (
        <form className={cl.form} onSubmit={onSubmit}>
            <div className={cl.form__group}>
                <input
                    className={cl.form__field}
                    placeholder={"Имя и Фамилия"}
                    type="text"
                    id="name"
                    name="name"
                />
                <label htmlFor="name" className={cl.form__label}>Имя и Фамилия</label>
            </div>
            <div className={cl.form__group}>
                <input
                    className={cl.form__field}
                    placeholder={"Откуда вы ?"}
                    type="text"
                    id="from"
                    name="from"
                />
                <label htmlFor="from" className={cl.form__label}>Откуда вы ?</label>
            </div>
            <div className={cl.form__group}>
                <textarea
                    className={`${cl.form__field} ${cl.textarea}`}
                    style={{fontSize: "1.3rem", minHeight: "200px"}}
                    placeholder={"Расскажите свою историю (какой аромат напоминает вам родные места?)"}
                    id="from"
                    name="story"
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
                    name="connection"
                />
                <label htmlFor="connection" className={cl.form__label}>Как с вами связаться?</label>
            </div>
            <button type="submit" className={cl.form__btn}>
                Отправить историю
            </button>
        </form>
    );
};

export default FeedBackForm;