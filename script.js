// Получаем данные пользователя
const initData = tg.initData;
const user = JSON.parse(initData).user;

// Отображаем Telegram ID пользователя
console.log("Telegram ID:", user.id);
console.log("Скрипт выполняется");
console.log("Данные студента:", studentData);

// В реальном приложении здесь можно отправить запрос на сервер
// для получения данных студента по Telegram ID
// Проверяем, что Telegram Web Apps API загружен
// Проверяем, что Telegram Web Apps API загружен
if (window.Telegram && window.Telegram.WebApp) {
    const tg = window.Telegram.WebApp;

    // Данные студента
    const studentData = {
        fullName: "Иванов Иван Иванович",
        direction: "Программирование",
        course: 2,
        group: "P-202",
        educationalRating: 85,
        activityRating: 45
    };

    // Заполняем данные на странице
    document.getElementById('fullName').textContent = studentData.fullName;
    document.getElementById('direction').textContent = studentData.direction;
    document.getElementById('course').textContent = studentData.course;
    document.getElementById('group').textContent = studentData.group;
    document.getElementById('educationalRating').textContent = studentData.educationalRating;
    document.getElementById('activityRating').textContent = studentData.activityRating;

    // Расширяем приложение на весь экран
    tg.expand();
} else {
    console.log("Приложение запущено вне Telegram. Используем тестовые данные.");

    // Тестовые данные для локального тестирования
    const studentData = {
        fullName: "Иванов Иван Иванович",
        direction: "Программирование",
        course: 2,
        group: "P-202",
        educationalRating: 85,
        activityRating: 45
    };

    // Заполняем данные на странице
    document.getElementById('fullName').textContent = studentData.fullName;
    document.getElementById('direction').textContent = studentData.direction;
    document.getElementById('course').textContent = studentData.course;
    document.getElementById('group').textContent = studentData.group;
    document.getElementById('educationalRating').textContent = studentData.educationalRating;
    document.getElementById('activityRating').textContent = studentData.activityRating;
}
// Функция для инициализации приложения
function initApp() {
    if (window.Telegram && window.Telegram.WebApp) {
        const tg = window.Telegram.WebApp;

        // Данные студента
        const studentData = {
            fullName: "Иванов Иван Иванович",
            direction: "Программирование",
            course: 2,
            group: "P-202",
            educationalRating: 85,
            activityRating: 45
        };

        // Заполняем данные на странице
        document.getElementById('fullName').textContent = studentData.fullName;
        document.getElementById('direction').textContent = studentData.direction;
        document.getElementById('course').textContent = studentData.course;
        document.getElementById('group').textContent = studentData.group;
        document.getElementById('educationalRating').textContent = studentData.educationalRating;
        document.getElementById('activityRating').textContent = studentData.activityRating;

        // Расширяем приложение на весь экран
        tg.expand();
    } else {
        console.error("Telegram Web Apps API не загружен.");
        document.body.innerHTML = "<h1>Ошибка: приложение должно быть запущено в Telegram.</h1>";
    }
}

// Ждем, пока загрузится Telegram Web Apps API
if (window.Telegram && window.Telegram.WebApp) {
    initApp();
} else {
    // Если API не загружен, ждем 1 секунду и проверяем снова
    setTimeout(() => {
        if (window.Telegram && window.Telegram.WebApp) {
            initApp();
        } else {
            console.error("Telegram Web Apps API не загружен.");
            document.body.innerHTML = "<h1>Ошибка: приложение должно быть запущено в Telegram.</h1>";
        }
    }, 1000);
}