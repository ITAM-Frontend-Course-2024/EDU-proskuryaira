<script>
    let currentColor = 'rgb(67, 192, 110)'; // начальный цвет

    function changeColor(color) {
        currentColor = color;
    }
</script>

<style>
    .color-button {
        padding: 10px;
        margin: 5px;
        border: none;
        cursor: pointer;
        color: white;
    }
</style>

<div style="background-color: {currentColor}; height: 100vh; transition: background-color 0.3s;">
    <h1 style="text-align: center;">Выберите цвет фона</h1>
    <div style="text-align: center;">
        <button
            class="color-button"
            style="background-color: rgb(67, 192, 110);"
            on:click={() => changeColor('rgb(67, 192, 110)')}>
            Зеленый
        </button>
        <button
            class="color-button"
            style="background-color: rgb(192, 67, 67);"
            on:click={() => changeColor('rgb(192, 67, 67)')}>
            Красный
        </button>
        <button
            class="color-button"
            style="background-color: rgb(67, 67, 192);"
            on:click={() => changeColor('rgb(67, 67, 192)')}>
            Синий
        </button>
        <button
            class="color-button"
            style="background-color: rgb(255, 215, 0);"
            on:click={() => changeColor('rgb(255, 215, 0)')}>
            Желтый
        </button>
        <button
            class="color-button"
            style="background-color: rgb(0, 0, 0);"
            on:click={() => changeColor('rgb(0, 0, 0)')}>
            Черный
        </button>
    </div>
</div>