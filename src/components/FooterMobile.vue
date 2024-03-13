<script setup>

import CartPlus from 'vue-material-design-icons/CartPlus.vue';
import Account from 'vue-material-design-icons/Account.vue';
import Menu from 'vue-material-design-icons/Star.vue';

</script>

<template>

<footer>
    <div class="texto">
        <div class="icone">
            <Account/>

        </div>
        <div class="icone">
            <CartPlus/>

        </div>
        <div class="icone">
            <Menu/>

        </div>
    </div>
</footer>

</template>

<style scoped>

footer {
    width: 100%;
    height: 100px;
    background-color: red;
    text-align: center;
    bottom: 0px;
    position: fixed;
}

.texto {
    display: flex;
    margin-top: 30px;
    flex-direction: row;
    justify-content: space-evenly;

}

.icone {
    border-bottom: 5px black solid;
}

</style>

