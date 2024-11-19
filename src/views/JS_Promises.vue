<script setup>
import { ref } from 'vue'

</script>

<template>
    <div class="content-section">
        <div class="s">
            <h2>JS_Promises</h2>
            
            <p> async/await (в Ноді await без функцій, хай левел) </p>

            <p> Promise ALL  - всі проміси виконані? якщо в любому помилка Не виконається </p>
            
            
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
table, thead, tbody, th, td, tr {
    border-collapse: collapse;
    border: 1px solid gray;
    /* border-color: red; */
    /* text-indent: 0; */
}
</style>