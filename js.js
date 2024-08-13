let isScrolling = false;

window.addEventListener('wheel', function(event) {
    // Проверяем, находимся ли мы на первом экране
    if (window.scrollY === 0) {
        event.preventDefault(); // Отключаем стандартное поведение прокрутки

        if (!isScrolling) {
            isScrolling = true;

            // Определяем направление прокрутки
            const delta = event.deltaY > 0 ? 1 : -1;
            const nextSection = window.scrollY + (delta * window.innerHeight);

            // Прокручиваем к следующему экрану
            window.scrollTo({
                top: nextSection,
                behavior: 'smooth'
            });

            // Ждем завершения прокрутки
            setTimeout(() => {
                isScrolling = false;
            }, 800); // Время должно соответствовать времени анимации прокрутки
        }
    }
});


document.addEventListener("DOMContentLoaded", function() {
    const items = document.querySelectorAll('.services_list__item');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate'); // Добавляем класс для анимации
                observer.unobserve(entry.target); // Убираем наблюдение после анимации
            }
        });
    });

    items.forEach(item => {
        observer.observe(item); // Наблюдаем за каждым элементом списка
    });
});


// Бордер для активной ссылки меню

document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('.link');

    // Функция для обновления активной ссылки
    function updateActiveLink() {
        let found = false;

        links.forEach(link => {
            const section = document.querySelector(link.getAttribute('href'));
            const rect = section.getBoundingClientRect();

            if (rect.top >= 0 && rect.top <= window.innerHeight && !found) {
                links.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
                found = true; // Останавливаем дальнейший поиск, если уже нашли активный элемент
            }
        });
    }

    // Слушаем событие прокрутки
    window.addEventListener('scroll', updateActiveLink);

    // Слушаем клик по ссылкам
    links.forEach(link => {
        link.addEventListener('click', function() {
            // Удаляем активный класс со всех ссылок
            links.forEach(l => l.classList.remove('active'));
            // Добавляем активный класс к текущей ссылке
            this.classList.add('active');
        });
    });
});
