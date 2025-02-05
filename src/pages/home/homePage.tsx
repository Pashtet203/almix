import React from 'react';
import cl from "./home.module.css"
import w1 from "../../media/img/w1.png"
import w3 from "../../media/img/w3.jpg"
import w4 from "../../media/img/w4.jpg"
import FeedBackForm from "../../components/feedBackForm";
const HomePage = () => {
    return (
        <section className={cl.home}>
            {/*<h2 className={cl.title}>О компании</h2>*/}
            {/*<div className={cl.about__list}>*/}
            {/*    <div className={cl.list__item}>*/}
            {/*        <img className={cl.item__img} src={w1} alt=""/>*/}
            {/*        <p className={cl.item__text}>*/}
            {/*            Бренд основан молодой активной девушкой, вдохновленной идеей создать новый сегмент*/}
            {/*            среди уходовых средств для дома, разработанных на основе: инноваций, осмысленного потребления,*/}
            {/*            заботе о самом ценном.*/}
            {/*        </p>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <FeedBackForm/>
        </section>
    );
};

export default HomePage;