<!DOCTYPE html>
<html lang="ru">
<head>
   <title>Сайт с панелью слева</title>
</head>
<body>
    <div class="sidebar">
        <h2>Навигация</h2>
        <ul>
            <li><a href="#section1">Раздел 1</a></li>
            <li><a href="#section2">Раздел 2</a></li>
            <li><a href="#section3">Раздел 3</a></li>
            <li><a href="#section4">Раздел 4</a></li>
        </ul>
    </div>
    <div class="content">
        <h1>Добро пожаловать</h1>
        <p>Это главный контент страницы.</p>
        <h2 id="section1">Раздел 1</h2>
        <p>Контент раздела 1...</p>
        <h2 id="section2">Раздел 2</h2>
        <p>Контент раздела 2...</p>
        <h2 id="section3">Раздел 3</h2>
        <p>Контент раздела 3...</p>
        <h2 id="section4">Раздел 4</h2>
        <p>Контент раздела 4...</p>
    </div>
</body>
</html>

<style>
body {
    display: flex; /* Используем flexbox для расположения панели и контента */
    margin: 0;
    font-family: Arial, sans-serif;
}

.sidebar {
    width: 250px; /* Ширина панели */
    background-color: #f4f4f4; /* Цвет фона панели */
    padding: 15px; /* Отступы внутри панели */
    box-shadow: 2px 0 5px rgba(0,0,0,0.1); /* Тень панели */
}

.sidebar h2 {
    text-align: center;
}

.sidebar ul {
    list-style: none; /* Убираем маркеры списка */
    padding: 0;
}

.sidebar ul li {
    margin: 10px 0; /* Отступы между элементами списка */
}

.sidebar ul li a {
    text-decoration: none; /* Убираем подчеркивание */
    color: #333;
    display: block; /* Чтобы ссылка занимала всю ширину элемента */
    padding: 8px; /* Отступы для ссылок */
    border-radius: 4px; /* Закругленные углы */
}

.sidebar ul li a:hover {
    background-color: #ddd; /* Цвет при наведении */
}

.content {
    flex-grow: 1; /* Заполняет оставшееся пространство */
    padding: 20px; /* Отступы внутри контента */
}
</style>