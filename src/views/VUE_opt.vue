<script setup>
import { ref } from 'vue'

</script>

<template>
    <div class="content-section">
        <div class="s">
            <h2>VUE - оптимизация</h2>
            <p> lazy loading для компонентів </p>
            <hr>
            <p> KeepAlive :max="10" поводиться як кеш LRU </p>
            <hr>
            <p> route-based code splitting за допомогою Webpack "SplitChunksPlugin" </p>
            <hr>
            <p> динамических импортов в качестве точек входа component: () => import('./components/Home.vue') </p>
            <hr>
            <p> необходимо использовать router.onReady как на сервере, так и на клиенте перед возвратом / монтированием
                приложения </p>
            <hr>
            <p> тип компонентов, подходящих для кэширования — те, что повторяются в больших v-for циклах </p>
            <hr>
            <p> микро-кэширование, обычно реализуется на уровне Nginx </p>
            <hr>
            <p> Для забезпечення кросбраузерної сумісності ми використовували PostCSS і Babel для транспіляції сучасного
                JavaScript в код, який підтримується старими браузерами. Для CSS використовували Autoprefixer </p>
            <hr>

            <h2>Vue.js та Nuxt.js</h2>
            <hr>
            <p> Options API - це традиційний підхід, де логіка компонента організована за опціями (data, methods,
                computed тощо). Composition API дозволяє організувати код за логічними блоками функціональності, що
                покращує повторне використання коду та типізацію. </p>
            <hr>
            <p> Pinia має кілька ключових переваг:

                Краща підтримка TypeScript з коробки
                Відсутність необхідності в mutations
                Можливість створювати кілька сховищ
                Легша відладка завдяки простішій структурі
                Підтримка декомпозиції actions та state</p>
            <hr>
            <p> Composition API краще використовувати для:

                Великих компонентів зі складною логікою
                Коли потрібна краща підтримка TypeScript
                При створенні повторно використовуваних функцій

                Options API підходить для:

                Простих компонентів
                Початківців, яким важливіша чітка структура
                Невеликих проектів </p>

            <hr>
            <p> code-splitting у Nuxt.js додатку?
                Кандидат:

                Використання динамічного імпорту компонентів:

                typescriptCopyconst MyComponent = () => import('@/components/MyComponent.vue')

                Налаштування lazy loading для сторінок
                Використання Nuxt модулів для оптимізації зображень
                Налаштування chunking у конфігурації Vite/Webpack </p>

                <hr>

                <img src="@/assets/img/test.png" alt="" class="img">
                <img src="@/assets/img/sec.png" alt="" class="img">


        </div>


    </div>
</template>

<style scoped>
.content-section {
    display: flex;
    gap: 15px;
}

h2 {
    color: white;
    margin-bottom: 25px;
}

.s {
    margin-bottom: 20px;
}

table,
thead,
tbody,
th,
td,
tr {
    border-collapse: collapse;
    border: 1px solid gray;
    /* border-color: red; */
    /* text-indent: 0; */
}
</style>