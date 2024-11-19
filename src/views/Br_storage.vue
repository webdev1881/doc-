<script setup>
import { ref } from 'vue'

</script>

<template>
    <div class="content-section">
        <div class="s">
            <h2>Br_storage</h2>

            <p>LocalStorage - зберігається в браузері (є Сторедж івент - для роботи між вкладками)</p>
            <p>SessionStorage - сессія / вкладка</p>
            <p>IndexedDB - сценарії, файли, структури даних, документи, і для роботи з PWA</p>
            <p>Куки ...</p>
            <p>URL - в параметрах  </p>

            <hr>
            
            
        </div>


    </div>
</template>

<style scoped>
p {
    margin-bottom: 15px;
}
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