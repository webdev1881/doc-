<script setup>
import { ref } from 'vue'

</script>

<template>
    <div class="content-section">
        <div class="s">
            <table><thead><tr><th>Тип даних</th><th>Приклад</th><th>Опис</th></tr></thead><tbody><tr><td><strong>Примітивні типи даних</strong></td><td></td><td></td></tr><tr><td><code>undefined</code></td><td><code>let a;</code><br><code>console.log(a); // undefined</code></td><td>Значення змінної, яка була оголошена, але не ініціалізована.</td></tr><tr><td><code>null</code></td><td><code>let b = null;</code><br><code>console.log(b); // null</code></td><td>Представляє відсутність якогось об'єкта чи значення.</td></tr><tr><td><code>boolean</code></td><td><code>let c = true;</code><br><code>let d = false;</code></td><td>Логічний тип даних, що може приймати значення <code>true</code> або <code>false</code>.</td></tr><tr><td><code>number</code></td><td><code>let e = 42;</code><br><code>let f = 3.14;</code></td><td>Числовий тип, включаючи цілі та дійсні числа.</td></tr><tr><td><code>bigint</code></td><td><code>let g = 9007199254740991n;</code></td><td>Використовується для представлення великих цілих чисел, що виходять за межі типу <code>number</code>.</td></tr><tr><td><code>string</code></td><td><code>let h = "Hello, world!";</code></td><td>Рядки символів.</td></tr><tr><td><code>symbol</code></td><td><code>let i = Symbol("identifier");</code></td><td>Унікальні та незмінні значення, що використовуються як ідентифікатори для властивостей об'єктів.</td></tr><tr><td><strong>Об'єктні типи даних</strong></td><td></td><td></td></tr><tr><td><code>Object</code></td><td><code>let j = { name: "Alice", age: 30 };</code></td><td>Колекція пар ключ-значення.</td></tr><tr><td><code>Array</code></td><td><code>let k = [1, 2, 3, 4, 5];</code></td><td>Впорядкована колекція значень.</td></tr><tr><td><code>Function</code></td><td><code>function l() { console.log("Hello!"); }</code></td><td>Об'єкти, що можуть бути викликані.</td></tr><tr><td><code>Date</code></td><td><code>let m = new Date();</code></td><td>Використовується для роботи з датами та часом.</td></tr><tr><td><code>RegExp</code></td><td><code>let n = /abc/;</code></td><td>Використовується для шаблонного пошуку у рядках.</td></tr><tr><td><code>Error</code></td><td><code>let o = new Error("Something went wrong");</code></td><td>Використовуються для представлення помилок.</td></tr><tr><td><strong>Інші типи даних</strong></td><td></td><td></td></tr><tr><td><code>Map</code></td><td><code>let p = new Map();</code></td><td>Спеціальні об'єкти для зберігання колекцій значень у вигляді пар ключ-значення.</td></tr><tr><td><code>Set</code></td><td><code>let q = new Set();</code></td><td>Колекція унікальних значень.</td></tr><tr><td><code>WeakMap</code></td><td><code>let r = new WeakMap();</code></td><td>Колекція пар ключ-значення, де ключі є об'єктами і мають слабкі посилання.</td></tr><tr><td><code>WeakSet</code></td><td><code>let s = new WeakSet();</code></td><td>Колекція об'єктів з слабкими посиланнями.</td></tr><tr><td><code>Promise</code></td><td><code>let t = new Promise((resolve, reject) =&gt; { /* async operation */ });</code></td><td>Використовуються для асинхронних обчислень.</td></tr></tbody></table>
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
}
.s {
    margin-bottom: 20px;
}
table, thead, tbody, th, td, tr {
    border-collapse: collapse;
    border: 1px solid gray;
    /* border-color: red; */
    /* text-indent: 0; */
}
</style>