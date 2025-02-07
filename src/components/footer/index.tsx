import React from 'react';
import cl from "./footer.module.css"
import FeedBackForm from "../feedBackForm";
import flower1 from "../../media/img/flower1.png"
import flower2 from "../../media/img/flower2.png"
import flower3 from "../../media/img/flower3.png"

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
                    <p className={cl.prizes__info} >
                        Что получите ?
                    </p>
                    <ul className={cl.prizes__list}>
                        <li className={cl.list__item} style={{listStyleImage:"url(" + flower1 +")"}}>
                            ЭКО-подарки всем участникам
                        </li>
                        <li className={cl.list__item} style={{listStyleImage:"url(" + flower2 +")"}}>
                            Возможность увидеть свой рассказ на упаковке
                        </li>
                        <li className={cl.list__item} style={{listStyleImage:"url(" + flower3 +")"}}>
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