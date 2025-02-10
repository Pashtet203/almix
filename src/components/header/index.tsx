import React from 'react';
import Icon from "../Icon";
import cl from "./header.module.css"
import logo from "../../media/img/newlogo.png"

const Header = () => {
    return (
        <header className={cl.header}>
            <div className={cl.header__wrapper}>
                {/*<Icon id={"logo"} className={cl.logo} width={300} height={200} />*/}
                <img src={logo} className={cl.logo} alt=""/>
                <hr className={cl.wand}/>
                <div className={cl.header__info}>
                    <b className={cl.name}>AL`MiX</b> -  инновационная линейка средств ухода для дома - про то, как правильный выбор продукции
                    будет служить вам источником энергии, вдохновения и радости от результата»
                    <div className={cl.header__contact}>
                        <p className={cl.contact__item}>
                            Почта:<a className={cl.header__link} href="mailto:zabota@al-mix.ru "> zabota@al-mix.ru </a>
                        </p>
                        {/*<p className={cl.contact__item}>*/}
                        {/*    Телефон:<a className={cl.header__link} href="tel:"> 9999999999999 </a>*/}
                        {/*</p>*/}
                    </div>
                </div>
            </div>
            <a className={cl.btn} href={"#main"}>
                <Icon id={"arrow__down"} width={50} height={50} className={cl.btn__icon}/>
            </a>
        </header>
    );
};

export default Header;