<script setup>
import { ref } from 'vue'

</script>

<template>
    <div class="content-section">
        <div class="s">
            <h2>GIT</h2>

            <p>Merge  коли мержимо гітпул, створюється новий commit</p>
            <p>Rebase  НЕ створюється новий commit (беруться коміти які буди ДО і накатується зліпок коду який є) </p>
            <p> моя стратегія Rebase (зручно, історія не захламлена), але коли присилають комент на мій Пулреквест, то краще не свошити, а зробити окремий коміт і вказати що виправив </p>
            <p> Ролбєк - перехід на  коміт, який був раніше. Якщо деплой - з кожної гілки збирається докер-імедж (якщо зробили  погано - віддкотити на старе і теж докер-іменж) </p>
            <p> Форс-пуш - перетирає все (питання доступів - винен не той хто зробив) Можна виключно на свою гілку (аменд/пуш)</p>
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