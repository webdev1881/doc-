<script setup>
import { ref } from 'vue'

</script>

<template>
    <div class="content-section">
        <div class="s">
            <h2>Рендеринг в браузере</h2>
            <ol>
                <li>
                    <strong>Парсинг HTML:</strong>
                    <ul>
                        <li>Браузер получает HTML и начинает его парсить</li>
                        <li>Создаёт токены из HTML-разметки</li>
                        <li>Обрабатывает теги и их атрибуты</li>
                    </ul>
                </li>
                <li>
                    <strong>DOM-дерево:</strong>
                    <ul>
                        <li>Из токенов формируется DOM-дерево</li>
                        <li>Каждый элемент становится узлом дерева</li>
                        <li>Устанавливаются связи между элементами</li>
                    </ul>
                </li>
                <li>
                    <strong>Render Tree:</strong>
                    <ul>
                        <li>Объединяется информация из DOM и CSSOM</li>
                        <li>Создаётся дерево видимых элементов</li>
                        <li>display: none элементы не попадают в Render Tree</li>
                    </ul>
                </li>
                <li>
                    <strong>Layout:</strong>
                    <ul>
                        <li>Вычисление размеров и позиций элементов</li>
                        <li>Учёт отступов, границ и позиционирования</li>
                        <li>Определение геометрии каждого элемента</li>
                    </ul>
                </li>
                <li>
                    <strong>Painting:</strong>
                    <ul>
                        <li>Отрисовка пикселей на экране</li>
                        <li>Применение стилей и цветов</li>
                        <li>Отрисовка текста и изображений</li>
                    </ul>
                </li>
                <li>
                    <strong>Composition:</strong>
                    <ul>
                        <li>Объединение слоёв</li>
                        <li>Обработка прозрачности</li>
                        <li>Финальная композиция страницы</li>
                    </ul>
                </li>
            </ol>
        </div>

        <div class="s">
            <h2>Рендеринг в браузере</h2>
            <ol>
                <li>
                    <strong>Парсинг HTML:</strong>
                    <ul>
                        <li>Браузер получает HTML и начинает его парсить</li>
                        <li>Создаёт токены из HTML-разметки</li>
                        <li>Обрабатывает теги и их атрибуты</li>
                    </ul>
                </li>
                <li>
                    <strong>DOM-дерево:</strong>
                    <ul>
                        <li>Из токенов формируется DOM-дерево</li>
                        <li>Каждый элемент становится узлом дерева</li>
                        <li>Устанавливаются связи между элементами</li>
                    </ul>
                </li>
                <li>
                    <strong>Render Tree:</strong>
                    <ul>
                        <li>Объединяется информация из DOM и CSSOM</li>
                        <li>Создаётся дерево видимых элементов</li>
                        <li>display: none элементы не попадают в Render Tree</li>
                    </ul>
                </li>
                <li>
                    <strong>Layout:</strong>
                    <ul>
                        <li>Вычисление размеров и позиций элементов</li>
                        <li>Учёт отступов, границ и позиционирования</li>
                        <li>Определение геометрии каждого элемента</li>
                    </ul>
                </li>
                <li>
                    <strong>Painting:</strong>
                    <ul>
                        <li>Отрисовка пикселей на экране</li>
                        <li>Применение стилей и цветов</li>
                        <li>Отрисовка текста и изображений</li>
                    </ul>
                </li>
                <li>
                    <strong>Composition:</strong>
                    <ul>
                        <li>Объединение слоёв</li>
                        <li>Обработка прозрачности</li>
                        <li>Финальная композиция страницы</li>
                    </ul>
                </li>
            </ol>
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
</style>