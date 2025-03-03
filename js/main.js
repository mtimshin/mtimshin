/* Прелоадер */
;(function (){
    window.addEventListener("load", function () {
        const preloader = document.querySelector('.preloader');
        if (preloader) {
            preloader.style.opacity = 0
            setTimeout(function () {
                preloader.style.display = 'none';
            }, 500)
        }
    });
}())

/* lazy loading */
;(function (){
    const options = {
        // родитель целевого элемента - область просмотра
        root: null,
        // без отступов
        rootMargin: '100% 0px 100% 0px',
        // процент пересечения - половина изображения
        threshold: 0
    }

    // создаем наблюдатель
    const observer = new IntersectionObserver((entries, observer) => {
        // для каждой записи-целевого элемента
        entries.forEach(entry => {
            // если элемент является наблюдаемым
            if (entry.isIntersecting) {
                const lazyImg = entry.target

                let dataSrc = lazyImg.getAttribute(['data-src'])

                if (lazyImg.tagName === "IMG" || lazyImg.tagName === "VIDEO") {
                    lazyImg.setAttribute('src', dataSrc)
                } else if (lazyImg.tagName === "SOURCE") {
                    lazyImg.setAttribute('srcset', dataSrc)
                } else {
                    lazyImg.style.backgroundImage = 'url("' + dataSrc + '")'
                }

                // прекращаем наблюдение
                observer.unobserve(lazyImg)
            }
        })
    }, options)

    const arr = document.querySelectorAll('.lazyImg[data-src]') // будет работать с данными элементами
    arr.forEach(i => {
        observer.observe(i)
    })
}())

window.scrollLock.setFillGapMethod('none') // Changes the method of filling the right page gap.

/* Lenis */
;(function (){
    const lenisHeader = document.querySelector('.cont-head-bg');

    new Lenis({
        autoRaf: true,
        anchors: {
            offset: lenisHeader ? -lenisHeader.offsetHeight : 0
        },
    });
}())

/* Якоря */
;(function (){
    const anchors = Array.from(document.querySelectorAll('.cont-head-anchor')).map((item) => {
        return {
            link: item,
            section: document.querySelector(item.getAttribute('href'))
        }
    }).reverse()

    function updateActiveLink() {
        let isFound = false

        anchors.forEach((item) => {
            if (item.section.getBoundingClientRect().top < window.innerHeight / 2 &&
                item.section.getBoundingClientRect().bottom > 0 && !isFound) {
                item.link.classList.add('active')
                isFound = true
            } else {
                item.link.classList.remove('active')
            }

        })
    }
    window.addEventListener('scroll', updateActiveLink);
}())

;(function (){

}())

/* Услуги */
;(function (){
    const items = document.querySelectorAll('.services_list__item_stripe');

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
}())

/* Рекомендации */
;(function (){
    new Swiper('.reviews .swiper', {
        loop: true,
        speed: 800,
        slidesPerView: 1,
        slidesPerGroup: 1,
        simulateTouch: false,
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
}())




// Плавное появление фона у прилипающего меню
const contHeadBg = document.querySelector('.cont-head-bg');

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;

    if (scrollPosition >= 200) {
        contHeadBg.style.opacity = 1;
        contHeadBg.style.transition = 'opacity 0.3s ease-in-out';
    } else {
        contHeadBg.style.opacity = 0;
        contHeadBg.style.transition = 'opacity 0.3s ease-in-out';
    }
});

// Скрываем элемент по умолчанию
contHeadBg.style.opacity = 0;

// Modals
function openModal(modalId) {
    const modal = document.getElementById(modalId)
    const closer = modal.querySelector('.modal__closer')

    if (!modal) return

    modal.classList.add('displayed')
    modal.scrollTop = 0
    window.scrollLock.disablePageScroll();
    setTimeout(() => {
        modal.classList.add('visible')
    })

    if (closer) {
        closer.addEventListener('click', closeModal)
    }

    function closeModal()  {
        closer.removeEventListener('click', closeModal)
        modal.classList.remove('visible')
        setTimeout(() => {
            modal.classList.remove('displayed')
            window.scrollLock.enablePageScroll();
        }, 500)
    }
}