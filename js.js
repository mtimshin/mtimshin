
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

    const swiper = new Swiper('.reviews .swiper', {
        speed: 0,
        loop: true,
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 0,
        navigation: {
            nextEl: '.reviews_slider_next',
            prevEl: '.reviews_slider_prev',
        },

        breakpoints: {
            320: {
                slidesPerView: 1,
                slidesPerGroup: 1,
            },
            1030: {
                slidesPerView: 2,
                slidesPerGroup: 2,
            }
        }
    })
});






