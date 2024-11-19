<script setup>
import { ref } from 'vue'

</script>

<template>
    <div class="content-section">
        <div class="s">
            <table><thead><tr><th>Метод</th><th>Опис</th><th>Приклад використання</th></tr></thead><tbody><tr><td><code>Object.assign()</code></td><td>Копіює значення всіх перелічуваних власних властивостей з одного або більше вихідних об'єктів у цільовий об'єкт.</td><td><code>const target = {a: 1}; const source = {b: 2}; const result = Object.assign(target, source); console.log(result); // {a: 1, b: 2}</code></td></tr><tr><td><code>Object.create()</code></td><td>Створює новий об'єкт з вказаним прототипом об'єкта та властивостями.</td><td><code>const proto = {greet() {return 'hello';}}; const obj = Object.create(proto); console.log(obj.greet()); // 'hello'</code></td></tr><tr><td><code>Object.defineProperty()</code></td><td>Визначає нову або змінює існуючу властивість безпосередньо на об'єкті.</td><td><code>const obj = {}; Object.defineProperty(obj, 'key', {value: 42}); console.log(obj.key); // 42</code></td></tr><tr><td><code>Object.defineProperties()</code></td><td>Визначає нові або змінює існуючі властивості безпосередньо на об'єкті.</td><td><code>const obj = {}; Object.defineProperties(obj, {prop1: {value: 1}, prop2: {value: 2}}); console.log(obj.prop1, obj.prop2); // 1 2</code></td></tr><tr><td><code>Object.entries()</code></td><td>Повертає масив власних перелічуваних пар [ключ, значення] заданого об'єкта.</td><td><code>const obj = {a: 1, b: 2}; console.log(Object.entries(obj)); // [['a', 1], ['b', 2]]</code></td></tr><tr><td><code>Object.freeze()</code></td><td>Заморожує об'єкт, не дозволяючи змінювати його властивості.</td><td><code>const obj = {a: 1}; Object.freeze(obj); obj.a = 2; console.log(obj.a); // 1</code></td></tr><tr><td><code>Object.fromEntries()</code></td><td>Перетворює масив пар [ключ, значення] в об'єкт.</td><td><code>const entries = [['a', 1], ['b', 2]]; const obj = Object.fromEntries(entries); console.log(obj); // {a: 1, b: 2}</code></td></tr><tr><td><code>Object.getOwnPropertyDescriptor()</code></td><td>Повертає дескриптор властивості для зазначеної властивості об'єкта.</td><td><code>const obj = {a: 1}; const descriptor = Object.getOwnPropertyDescriptor(obj, 'a'); console.log(descriptor); // {value: 1, writable: true, ...}</code></td></tr><tr><td><code>Object.getOwnPropertyDescriptors()</code></td><td>Повертає всі дескриптори властивостей власних властивостей об'єкта.</td><td><code>const obj = {a: 1}; const descriptors = Object.getOwnPropertyDescriptors(obj); console.log(descriptors); // {a: {value: 1, writable: true, ...}}</code></td></tr><tr><td><code>Object.getOwnPropertyNames()</code></td><td>Повертає масив всіх власних властивостей об'єкта (включаючи не перелічувані).</td><td><code>const obj = {a: 1}; console.log(Object.getOwnPropertyNames(obj)); // ['a']</code></td></tr><tr><td><code>Object.getOwnPropertySymbols()</code></td><td>Повертає масив всіх власних символьних властивостей об'єкта.</td><td><code>const symbol = Symbol('a'); const obj = {[symbol]: 1}; console.log(Object.getOwnPropertySymbols(obj)); // [Symbol(a)]</code></td></tr><tr><td><code>Object.getPrototypeOf()</code></td><td>Повертає прототип (внутрішню властивість [[Prototype]]) зазначеного об'єкта.</td><td><code>const obj = {}; const proto = Object.getPrototypeOf(obj); console.log(proto); // Object.prototype</code></td></tr><tr><td><code>Object.is()</code></td><td>Визначає, чи є два значення одним і тим же значенням.</td><td><code>console.log(Object.is('foo', 'foo')); // true</code></td></tr><tr><td><code>Object.isExtensible()</code></td><td>Визначає, чи є об'єкт розширюваним (тобто чи можна додавати до нього нові властивості).</td><td><code>const obj = {}; console.log(Object.isExtensible(obj)); // true</code></td></tr><tr><td><code>Object.isFrozen()</code></td><td>Визначає, чи є об'єкт замороженим.</td><td><code>const obj = Object.freeze({}); console.log(Object.isFrozen(obj)); // true</code></td></tr><tr><td><code>Object.isSealed()</code></td><td>Визначає, чи є об'єкт запечатаним.</td><td><code>const obj = Object.seal({}); console.log(Object.isSealed(obj)); // true</code></td></tr><tr><td><code>Object.keys()</code></td><td>Повертає масив власних перелічуваних імен властивостей об'єкта.</td><td><code>const obj = {a: 1, b: 2}; console.log(Object.keys(obj)); // ['a', 'b']</code></td></tr><tr><td><code>Object.preventExtensions()</code></td><td>Запобігає майбутнім розширенням об'єкта.</td><td><code>const obj = {}; Object.preventExtensions(obj); obj.a = 1; console.log(obj.a); // undefined</code></td></tr><tr><td><code>Object.seal()</code></td><td>Запечатує об'єкт, запобігаючи додаванню нових властивостей і роблячи всі існуючі властивості незмінними (але їх значення можуть змінюватися).</td><td><code>const obj = {a: 1}; Object.seal(obj); obj.b = 2; delete obj.a; console.log(obj); // {a: 1}</code></td></tr><tr><td><code>Object.setPrototypeOf()</code></td><td>Встановлює прототип (внутрішню властивість [[Prototype]]) зазначеного об'єкта.</td><td><code>const proto = {}; const obj = Object.create(proto); console.log(Object.getPrototypeOf(obj) === proto); // true</code></td></tr><tr><td><code>Object.values()</code></td><td>Повертає масив значень власних перелічуваних властивостей об'єкта.</td><td><code>const obj = {a: 1, b: 2}; console.log(Object.values(obj)); // [1, 2]</code></td></tr></tbody></table>
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