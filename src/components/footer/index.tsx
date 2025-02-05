import React from 'react';
import cl from "./footer.module.css"
import FeedBackForm from "../feedBackForm";

const Footer = () => {
    return (
        <footer className={cl.footer}>
            <div className={cl.footer__wrapper}>
                <p className={cl.footer__text}>
                    Расскажите, какой аромат ассоциируется у вас с родным регионом.
                    Это может быть запах хвойного леса, свежескошенного сена, морского бриза или цветущих лугов.
                    Лучшие истории попадут на этикетки наших новых средств!
                </p>
                <div className={cl.prizes}>
                    <p className={cl.prizes__info}>
                        Что получите ?
                    </p>
                    <ul className={cl.prizes__list}>
                        <li className={cl.list__item}>
                            ЭКО-подарки всем участникам
                        </li>
                        <li className={cl.list__item}>
                            Возможность увидеть свой рассказ на упаковке
                        </li>
                        <li className={cl.list__item}>
                            Самых интересных героев мы приедем снимать в их родной край!
                        </li>
                    </ul>
                </div>
            </div>
            <div className={cl.form__wrapper}>
                <FeedBackForm/>
            </div>
        </footer>
    );
};

export default Footer;