import React from 'react';
import Icon from "../Icon";
import cl from "./header.module.css"

const Header = () => {
    return (
        <header className={cl.header}>
            <div className={cl.header__wrapper}>
                <Icon id={"logo"} className={cl.logo} width={300} height={300} />
                <hr className={cl.wand}/>
                <div className={cl.header__info}>
                    <b className={cl.name}>AL`MiX</b> -  инновационная линейка средств ухода для дома - про то, как правильный выбор продукции
                    будет служить вам источником энергии, вдохновения и радости от результата»
                </div>
            </div>
            <a className={cl.btn} href={"#main"}>
                <Icon id={"arrow__down"} width={50} height={50} className={cl.btn__icon} />
            </a>
        </header>
    );
};

export default Header;