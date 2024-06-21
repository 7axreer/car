<template>
    <nav class="nav">
        <div class="container">
            <div class="nav__content">

                <div class="hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <div class="nav__content-block">
                    <img src="../assets/img/nav__title.svg" alt="" class="nav__content-block-img">
                    <div class="nav__block-txt">
                        <p>В партнерстве с</p>
                        <img src="../assets/img/logo-bottom.png" alt="">
                    </div>
                </div>

                <h3 class="nav__content-title">Проведено торгов: <span>{{ sold }}</span> </h3>

                <form class="nav__content-frm">
                    <img src="../assets/img/search.svg" alt="" class="nav__frm-search-i">
                    <div class="nav__frm-search">
                        <img src="../assets/img/search.svg" alt="">
                        <input type="search" placeholder="Поиск по лотам" v-model="search">
                    </div>
                    <button class="nav__frm-btm">Личный кабинет</button>
                    <img src="../assets/img/sign.png" alt="" class="nav__content-frm-sign">
                </form>

            </div>
        </div>
    </nav>
    <Header />
</template>

<script>
import Header from '@/components/Header.vue'


export default {
    components: {
        Header
    },
    data() {
        return {
            sold: '12 345',
            search: '',
        }
    },
}
</script>
