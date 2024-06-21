<template>
    <footer class="footer">
        <div class="container">
            <div class="footer__content">

                <div class="footer__content-left">

                    <ul class="footer__left-list">
                        <li><a href="#abc" class="footer__list-items">Партнеры</a></li>
                        <li><a href="#abc" class="footer__list-items">Новости</a></li>
                        <li><a href="#abc" class="footer__list-items">О компании</a></li>
                        <li><a href="#abc" class="footer__list-items">Документация / Регламенты</a></li>
                        <li><a href="#abc" class="footer__list-items">Вход</a></li>
                        <li><a href="#abc" class="footer__list-items">Регистрация</a></li>
                        <li><a href="#abc" class="footer__list-items">Проверка транспортного средства</a></li>
                    </ul>

                    <div class="footer__left-payment">
                        <img src="../assets/img/visa.png" alt="">
                        <img src="../assets/img/master.png" alt="">
                        <img src="../assets/img/mir-logo.png" alt="">
                    </div>

                    <p>2009 - 2021 © Все права защищены.</p>

                </div>

                <div class="footer__content-right">

                    <div class="footer__right-top">
                        <div class="footer__top-box">
                            <h3>{{ contact.number }}</h3>
                            <p>Звонок по России бесплатный</p>
                        </div>
                        <h3>{{ contact.gmail }}</h3>
                        <h3>{{ contact.email }}</h3>
                    </div>

                    <div class="footer__right-social">
                        <img src="../assets/img/vk.png" alt="">
                        <img src="../assets/img/facebook.png" alt="">
                        <img src="../assets/img/insta.png" alt="">
                        <img src="../assets/img/youtube.png" alt="">
                        <p>Мы в соцсетях</p>
                    </div>

                    <p class="footer__right-p">{{ contact.about }}</p>

                </div>

            </div>
        </div>
    </footer>
</template>

<script>
export default {
    data() {
        return {
            contact: {
                number: '8 800 550-26-65',
                gmail: 'assist@sd-assist.ru',
                email: 'auction@sd-assist.ru ',
                about: 'Свидетельство о регистрации электронного СМИ ЭЛ № ФС 77 - 76018 выдано Федеральной службой по надзору в сфере связи, информационных технологий и массовых коммуникаций 24.06.2019 года',
            }
        }
    },
}
</script>
