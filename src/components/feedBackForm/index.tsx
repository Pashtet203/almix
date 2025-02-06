import React, {ChangeEventHandler, useState} from 'react';
import cl from "./feedBackForm.module.css"
import {TUserDataForm} from "../../utils/types";
import Swal from "sweetalert2";
import {useFetching} from "../../hooks/useFetching";
import {sendMessage} from "../../utils/api/sendMessage";
const FeedBackForm = () => {


    const [userData,setUserData] = useState<TUserDataForm>({
        name:"",
        from:"",
        story:"",
        connection:"",
    })
    const onSubmit  = async (event:any) => {
        event.preventDefault();



        const formData = new FormData(event.target);
        formData.append("name",userData.name);
        formData.append("from",userData.from);
        formData.append("story",userData.story);
        formData.append("connection",userData.connection);
        formData.append("access_key", "e5615027-944a-46b3-a4d0-efb21d9e5892");

        const res = await sendMessage(formData)

        if (res.success) {
            Swal.fire({
                title:"Сообщение отправлено",
                icon:"success"
            })
            setUserData({
                name:"",
                from:"",
                story:"",
                connection:""
            })
        }
        else {
            Swal.fire({
                title:"Что то пошло не так, попробуйте позже",
                icon:"error"
            })
        }

    };
    const inputHandler = (e:any)=>{
        setUserData({...userData, [e.target.name]: e.target.value})
    }

    return (
        <form className={cl.form} onSubmit={onSubmit}>
            <div className={cl.form__group}>
                <input
                    className={cl.form__field}
                    placeholder={"Имя и Фамилия"}
                    type="text"
                    id="name"
                    value={userData.name}
                    name="name"
                    onChange={(e)=>{inputHandler(e)}}
                />
                <label htmlFor="name" className={cl.form__label}>Имя и Фамилия</label>
            </div>
            <div className={cl.form__group}>
                <input
                    className={cl.form__field}
                    placeholder={"Откуда вы ?"}
                    type="text"
                    id="from"
                    value={userData.from}
                    name="from"
                    onChange={(e)=>{inputHandler(e)}}
                />
                <label htmlFor="from" className={cl.form__label}>Откуда вы ?</label>
            </div>
            <div className={cl.form__group}>
                <textarea
                    className={`${cl.form__field} ${cl.textarea}`}
                    style={{fontSize: "1.3rem", minHeight: "200px"}}
                    placeholder={"Расскажите свою историю (какой аромат напоминает вам родные места?)"}
                    id="from"
                    value={userData.story}
                    name="story"
                    onChange={(e)=>{inputHandler(e)}}
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
                    value={userData.connection}
                    name="connection"
                    onChange={(e)=>{inputHandler(e)}}
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