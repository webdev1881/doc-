<script setup>
import { ref } from 'vue'

</script>

<template>
    <div class="content-section">
        <div class="s">
            <img src="@/assets/img/1str.png" alt="" class="img">
        </div>


    </div>
</template>

<style scoped>

.img {
    /* width: 70%; */

}


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