import React from 'react';
import cl from "./home.module.css"
import w1 from "../../media/img/w1.png"
import w2 from "../../media/img/w2.png"
import w3 from "../../media/img/w3.png"
import FeedBackForm from "../../components/feedBackForm";
const HomePage = () => {
    return (
        <section className={cl.home} id={"main"}>
            <h2 className={cl.title}>О компании</h2>
            <div className={cl.about__list}>
                <div className={`${cl.list__item} ${cl.item__odd}`}>
                    <img className={cl.item__img} src={w1} alt=""/>
                    <p className={cl.item__text}>
                        Бренд основан молодой активной девушкой, вдохновленной идеей создать новый сегмент
                        среди уходовых средств для дома, разработанных на основе: инноваций, осмысленного потребления,
                        заботе о самом ценном.
                    </p>
                </div>
                <div className={`${cl.list__item} ${cl.item__even}`}>
                    <img className={cl.item__img} src={w2} alt=""/>
                    <p className={cl.item__text}>
                        В современном мире, где времени все меньше, а выбора больше, мы хотим создать ритуал бытовых рутинных дел,
                        вернуть им ценность как источника для восстановления силы энергии.
                    </p>
                </div>
                <div className={`${cl.list__item} ${cl.item__odd}`}>
                    <img className={cl.item__img} src={w3} alt=""/>
                    <p className={cl.item__text}>
                        <b>AL`MiX</b> инновационная линейка средств ухода для дома - про то,
                        как правильный выбор продукции будет служить вам источником энергии,
                        вдохновения и радости от результата.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default HomePage;