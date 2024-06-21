<template>
    <main class="container">
        <div class="main">
            
            <div class="main__top">
                <h2 class="main__top-title">Недавно размещенные лоты</h2>

                <a href="#cards">Смотреть все предложения <img src="../assets/img/arrow.svg" alt=""></a>

            </div>

            <div class="main__cards" id="cards">

                <div class="main__cards-card">

                    <div class="main__card-img">
                        <span>{{ firstCard.price }}</span>
                        <img src="../assets/img/car-1.png" alt="">
                    </div>

                    <h4 class="main__card-title">{{ firstCard.name }}</h4>

                    <output></output>

                    <div class="main__card-info">
                        <div class="main__info-block open">
                            <h5 class="main__block-subtitle">Лот:</h5>
                            <p class="main__block-txt">61322/1<span>(открытый) </span></p>
                        </div>
                        <div class="main__info-block">
                            <h5 class="main__block-subtitle">Город:</h5>
                            <p class="main__block-txt">{{ firstCard.country }}</p>
                        </div>
                        <div class="main__info-block">
                            <h5 class="main__block-subtitle closed">Пробег:</h5>
                            <p class="main__block-txt">{{ firstCard.mile }}</p>
                        </div>
                        <div class="main__info-block">
                            <h5 class="main__block-subtitle closed">КПП:</h5>
                            <p class="main__block-txt">{{ firstCard.checkP }}</p>
                        </div>
                        <div class="main__info-block">
                            <h5 class="main__block-subtitle closed">Двигатель:</h5>
                            <p class="main__block-txt">{{ firstCard.engine }}</p>
                        </div>
                    </div>

                </div>

                <div class="main__cards-card">

                    <div class="main__card-img">
                        <span>{{ secondCar.price }}</span>
                        <img src="../assets/img/car-2.png" alt="">
                    </div>

                    <h4 class="main__card-title">{{ secondCar.name }}</h4>

                    <output></output>

                    <div class="main__card-info">
                        <div class="main__info-block closed">
                            <h5 class="main__block-subtitle">Лот:</h5>
                            <p class="main__block-txt">61322/1<span>(открытый) </span></p>
                        </div>
                        <div class="main__info-block">
                            <h5 class="main__block-subtitle">Город:</h5>
                            <p class="main__block-txt">{{ secondCar.country }}</p>
                        </div>
                        <div class="main__info-block">
                            <h5 class="main__block-subtitle closed">Пробег:</h5>
                            <p class="main__block-txt">{{ secondCar.mile }}</p>
                        </div>
                        <div class="main__info-block">
                            <h5 class="main__block-subtitle closed">КПП:</h5>
                            <p class="main__block-txt">{{ secondCar.checkP }}</p>
                        </div>
                        <div class="main__info-block">
                            <h5 class="main__block-subtitle closed">Двигатель:</h5>
                            <p class="main__block-txt">{{ secondCar.engine }}</p>
                        </div>
                    </div>

                </div>

                <div class="main__cards-card">

                    <div class="main__card-img">
                        <span>{{ thirdCar.price }}</span>
                        <img src="../assets/img/car-3.png" alt="">
                    </div>

                    <h4 class="main__card-title">{{ thirdCar.name }}</h4>

                    <output></output>

                    <div class="main__card-info">
                        <div class="main__info-block open">
                            <h5 class="main__block-subtitle">Лот:</h5>
                            <p class="main__block-txt">61322/1<span>(открытый) </span></p>
                        </div>
                        <div class="main__info-block">
                            <h5 class="main__block-subtitle">Город:</h5>
                            <p class="main__block-txt">{{ thirdCar.country }}</p>
                        </div>
                        <div class="main__info-block">
                            <h5 class="main__block-subtitle closed">Пробег:</h5>
                            <p class="main__block-txt">{{ thirdCar.mile }}</p>
                        </div>
                        <div class="main__info-block">
                            <h5 class="main__block-subtitle closed">КПП:</h5>
                            <p class="main__block-txt">{{ thirdCar.checkP }}</p>
                        </div>
                        <div class="main__info-block">
                            <h5 class="main__block-subtitle closed">Двигатель:</h5>
                            <p class="main__block-txt">{{ thirdCar.engine }}</p>
                        </div>
                    </div>

                </div>

                <div class="main__cards-card">

                    <div class="main__card-img">
                        <span>{{ secondCar.price }}</span>
                        <img src="../assets/img/car-2.png" alt="">
                    </div>

                    <h4 class="main__card-title">{{ secondCar.name }}</h4>

                    <output></output>

                    <div class="main__card-info">
                        <div class="main__info-block closed">
                            <h5 class="main__block-subtitle">Лот:</h5>
                            <p class="main__block-txt">61322/1<span>(открытый) </span></p>
                        </div>
                        <div class="main__info-block">
                            <h5 class="main__block-subtitle">Город:</h5>
                            <p class="main__block-txt">{{ secondCar.country }}</p>
                        </div>
                        <div class="main__info-block">
                            <h5 class="main__block-subtitle closed">Пробег:</h5>
                            <p class="main__block-txt">{{ secondCar.mile }}</p>
                        </div>
                        <div class="main__info-block">
                            <h5 class="main__block-subtitle closed">КПП:</h5>
                            <p class="main__block-txt">{{ secondCar.checkP }}</p>
                        </div>
                        <div class="main__info-block">
                            <h5 class="main__block-subtitle closed">Двигатель:</h5>
                            <p class="main__block-txt">{{ secondCar.engine }}</p>
                        </div>
                    </div>

                </div>

                <div class="main__cards-card">

                    <div class="main__card-img">
                        <span>{{ thirdCar.price }}</span>
                        <img src="../assets/img/car-3.png" alt="">
                    </div>

                    <h4 class="main__card-title">{{ thirdCar.name }}</h4>

                    <output></output>

                    <div class="main__card-info">
                        <div class="main__info-block open">
                            <h5 class="main__block-subtitle">Лот:</h5>
                            <p class="main__block-txt">61322/1<span>(открытый) </span></p>
                        </div>
                        <div class="main__info-block">
                            <h5 class="main__block-subtitle">Город:</h5>
                            <p class="main__block-txt">{{ thirdCar.country }}</p>
                        </div>
                        <div class="main__info-block">
                            <h5 class="main__block-subtitle closed">Пробег:</h5>
                            <p class="main__block-txt">{{ thirdCar.mile }}</p>
                        </div>
                        <div class="main__info-block">
                            <h5 class="main__block-subtitle closed">КПП:</h5>
                            <p class="main__block-txt">{{ thirdCar.checkP }}</p>
                        </div>
                        <div class="main__info-block">
                            <h5 class="main__block-subtitle closed">Двигатель:</h5>
                            <p class="main__block-txt">{{ thirdCar.engine }}</p>
                        </div>
                    </div>

                </div>

                <div class="main__cards-card">

                    <div class="main__card-img">
                        <span>{{ firstCard.price }}</span>
                        <img src="../assets/img/car-1.png" alt="">
                    </div>

                    <h4 class="main__card-title">{{ firstCard.name }}</h4>

                    <output></output>

                    <div class="main__card-info">
                        <div class="main__info-block open">
                            <h5 class="main__block-subtitle">Лот:</h5>
                            <p class="main__block-txt">61322/1<span>(открытый) </span></p>
                        </div>
                        <div class="main__info-block">
                            <h5 class="main__block-subtitle">Город:</h5>
                            <p class="main__block-txt">{{ firstCard.country }}</p>
                        </div>
                        <div class="main__info-block">
                            <h5 class="main__block-subtitle closed">Пробег:</h5>
                            <p class="main__block-txt">{{ firstCard.mile }}</p>
                        </div>
                        <div class="main__info-block">
                            <h5 class="main__block-subtitle closed">КПП:</h5>
                            <p class="main__block-txt">{{ firstCard.checkP }}</p>
                        </div>
                        <div class="main__info-block">
                            <h5 class="main__block-subtitle closed">Двигатель:</h5>
                            <p class="main__block-txt">{{ firstCard.engine }}</p>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    </main>

    <section class="main__customer">
        <div class="container main__customer-content">
            <h2 class="main__customer-title">Уникальная база <br> наших клиентов</h2>

            <div class="main__customer-btns">
                <button>Стать продавцом</button>
                <button>Стать покупателем</button>
            </div>
        </div>
    </section>

</template>

<script>


export default {
    data() {
        return {
            firstCard: {
                img: "../assets/img/car-1.png",
                name: "Abarth 124 GT 2011",
                price: '450 000 ₽',
                country: "Москва",
                mile: "200 000 км",
                checkP: "АКПП",
                engine: "2 см3 (230 л.с.)",
            },
            secondCar: {
                img: "../assets/img/car-2.png",
                name: "Mazda CX-5, 2019 г",
                price: '980 000 ₽',
                country: "Москва",
                mile: "200 000 км",
                checkP: "АКПП",
                engine: "2 см3 (230 л.с.)",
            },
            thirdCar: {
                img: "../assets/img/car-3.png",
                name: "Audi e-tron, 2021 г",
                price: '1 450 000 ₽',
                country: "Москва",
                mile: "200 000 км",
                checkP: "АКПП",
                engine: "2 см3 (230 л.с.)",
            },
        }
    },
}
</script>
