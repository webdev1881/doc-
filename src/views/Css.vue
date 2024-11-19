<script setup>
import { ref } from 'vue'

</script>

<template>
    <div class="content-section">
        <div class="s">
            <!-- <h2>Рендеринг в браузере</h2> -->

            <img src="@/assets/img/1.png" alt="" class="img">
            <img src="@/assets/img/2.png" alt="" class="img">
            <img src="@/assets/img/3.png" alt="" class="img">
            
        </div>



    </div>
</template>

<style scoped>


.img {
    width: 32%;

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
    display: flex;
    justify-content: space-between;
}
</style>