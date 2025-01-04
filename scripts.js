let tg = window.Telegram.WebApp;
tg.expand();

let score = 0;
let clickPower = 1;
// ... другие переменные, например, для улучшений

// Загрузка данных из localStorage
function loadData() {
    score = parseInt(localStorage.getItem('score')) || 0;
    clickPower = parseInt(localStorage.getItem('clickPower')) || 1;
    // ... загрузка других данных
    updateScore();
}

// Сохранение данных в localStorage
function saveData() {
    localStorage.setItem('score', score);
    localStorage.setItem('clickPower', clickPower);
    // ... сохранение других данных
}

// Обновление отображения счета
function updateScore() {
    document.getElementById('score').textContent = "Монеты: " + score;
}

// Обработка нажатия на монетку
function tap() {
    score += clickPower;
    updateScore();
    saveData();

    // Можно добавить анимацию монетки здесь
    const coin = document.getElementById('coin');
    coin.style.transform = 'scale(0.95)';
    setTimeout(() => {
        coin.style.transform = 'scale(1)';
    }, 100);
}

// Функции для улучшений (пример)
function upgradeClickPower() {
    // ... логика покупки улучшения
}

// Добавляем обработчик нажатия на монетку
document.getElementById('coin').addEventListener('click', tap);

// Инициализация при загрузке
loadData();
