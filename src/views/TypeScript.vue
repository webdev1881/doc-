<script setup>
import { ref } from 'vue'

const showExample = ref(false)
</script>

<template>
    <div class="html-content">
        <h1>TYPESCRIPT Fundamentals</h1>

        <section class="section">
            <h2>НЕДОЛІКИ</h2>
            <p>Доводиться викорисовувати певні Хаки коли ми точно знаємо що елемент існує. Напр: document.getElementById - null або елемент </p>
            <p> якщо знаємо що у лейауті точно є - доводиться робити тайп-есьоршн (ексламейшн марк), або писати перевірки </p>

            <p> якщо простий лендінг - напр JQuery анімації - треба багато типів описувати - погано для бізнесу </p>
            <p> ІНДЕКСАЦІФЯ типів - на великих проектах навіть на і7 процесорі Треба чекати... (говорили планують переписати на ГО) </p>

        </section>

        <section class="section">
            <h2>Key Concepts</h2>
            <ul>
                <li>Elements and Tags</li>
                <li>Document Structure</li>
                <li>Semantic HTML</li>
                <li>Forms and Input</li>
            </ul>
        </section>

        <section class="section">
            <h2>Interactive Example</h2>
            <button @click="showExample = !showExample" class="example-button">
                {{ showExample ? 'Hide' : 'Show' }} Example
            </button>

            <div v-if="showExample" class="example-code">
                <pre><code>
.html-content {
    padding: 1rem;
}
.example-button {
    background-color: #4CAF50;
    color: white;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-bottom: 1rem;
}
                </code></pre>
            </div>
        </section>
    </div>
</template>

<style scoped>
.html-content {
    padding: 1rem;
}

.section {
    margin-bottom: 2rem;
}

.example-button {
    background-color: #4CAF50;
    color: white;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-bottom: 1rem;
}

.example-code {
    background-color: #f8f9fa;
    color: black;
    padding: 0.2rem;
    border-radius: 4px;
    overflow-x: auto;
}
</style>