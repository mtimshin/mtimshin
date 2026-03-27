<script setup>
// Scripts and global styles are handled in nuxt.config.ts
</script>

<template>
    <div>
        <div class="preloader">
            <img class="preloader__logo" src="/img/logo.svg" alt="Максим Тимшин" />
        </div>

        <div class="cont-head" id="first">
            <header class="header">
                <a href="#first"><img src="/img/logo.svg" alt="Максим Тимшин — Создание цифровых продуктов" /></a>
                <ul class="header_menu">
                    <li>
                        <a href="#services" class="link cont-head-anchor">Услуги</a>
                    </li>
                    <li>
                        <a href="#cases" class="link cont-head-anchor">Кейсы</a>
                    </li>
                    <li>
                        <a href="#stages" class="link cont-head-anchor">Этапы</a>
                    </li>
                    <li>
                        <a href="#reviews" class="link cont-head-anchor">Рекомендации</a>
                    </li>
                    <li>
                        <a href="/price" class="link">Цены</a>
                    </li>
                </ul>
                <a href="#contacts" class="btn">Связаться со мной</a>
            </header>
            <div class="cont-head-bg"></div>
            <header class="header-mob">
                <a href="#first">
                    <img src="/img/logo.svg" alt="Максим Тимшин — Проводник в мир интерфейсов" /></a>
                <a onclick="openModal('case-modal_menu-drop')">
                    <img src="/img/burger.svg" alt="Меню" />
                </a>
            </header>
        </div>

        <ContentDoc />


        <div class="cont">
            <div class="stripe"></div>
            <div class="stages" id="stages">
                <h2>Этапы</h2>
                <a class="stages_play" role="button" onclick="openModal('case-modal-video')">
                    <img src="/img/play_stages.svg" alt="play" />
                </a>
                <video autoplay muted loop data-src="/bg-video.mp4" class="stages_video lazyImg"></video>
                <img src="/img/bg-stages.svg" alt="тонировка" class="stages_bg-ton1" />
                <div class="stages_bg-ton2"></div>
                <div class="case-modal modal" id="case-modal-video" data-lenis-prevent data-scroll-lock-scrollable>
                    <div class="case-modal__header">
                        <div role="button" class="case-modal__closer modal__closer">
                            <img src="/img/close.svg" alt="" />
                        </div>
                    </div>
                    <div class="case-modal__wrapper">
                        <div class="case-modal__body">
                            <div style="position: relative; padding-top: 56.25%; width: 100%"><iframe
                                    data-src="https://kinescope.io/embed/p2VvrZj8NA4W3fyDjZPuU9?autoplay=1"
                                    allow="autoplay; fullscreen; picture-in-picture; encrypted-media; gyroscope; accelerometer; clipboard-write; screen-wake-lock;"
                                    frameborder="0" allowfullscreen
                                    style="position: absolute; width: 100%; height: 100%; top: 0; left: 0;"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="cont">
            <div class="stripe"></div>
            <div class="reviews" id="reviews">
                <h2 class="reviews_h2">Рекомендации</h2>
                <h2 class="reviews_h2-mob">Отзывы</h2>
                <div class="reviews_slider">
                    <button class="reviews_slider_prev"></button>
                    <div class="swiper reviews_slider_swiper">
                        <div class="reviews_slider_list swiper-wrapper">
                            <div class="reviews_slider_slide swiper-slide">
                                <a href="#">
                                    <img src="/img/play.svg" alt="play" class="reviews_slider_slide_play" />
                                    <div class="reviews_slider_slide_text">
                                        <h3>Вадим Антоневич 1</h3>
                                        <p>руководитель отдела сервиса компании «RVS»</p>
                                    </div>
                                    <div class="reviews_slider_slide_bg2"></div>
                                    <picture>
                                        <source class="lazyImg" data-src="/img/review1.webp" type="image/webp" />
                                        <img class="reviews_slider_slide_bg1 lazyImg" data-src="/img/review1.png"
                                            alt="отзыв" />
                                    </picture>
                                </a>
                            </div>
                            <div class="reviews_slider_slide swiper-slide">
                                <a href="#">
                                    <img src="/img/play.svg" alt="play" class="reviews_slider_slide_play" />
                                    <div class="reviews_slider_slide_text">
                                        <h3>Вадим Антоневич 2</h3>
                                        <p>руководитель отдела сервиса компании «RVS»</p>
                                    </div>
                                    <div class="reviews_slider_slide_bg2"></div>
                                    <picture>
                                        <source class="lazyImg" data-src="/img/review1.webp" type="image/webp" />
                                        <img class="reviews_slider_slide_bg1 lazyImg" data-src="/img/review1.png"
                                            alt="отзыв" />
                                    </picture>
                                </a>
                            </div>
                            <div class="reviews_slider_slide swiper-slide">
                                <a href="#">
                                    <img src="/img/play.svg" alt="play" class="reviews_slider_slide_play" />
                                    <div class="reviews_slider_slide_text">
                                        <h3>Вадим Антоневич</h3>
                                        <p>руководитель отдела сервиса компании «RVS»</p>
                                    </div>
                                    <div class="reviews_slider_slide_bg2"></div>
                                    <picture>
                                        <source class="lazyImg" data-src="/img/review1.webp" type="image/webp" />
                                        <img class="reviews_slider_slide_bg1 lazyImg" data-src="/img/review1.png"
                                            alt="отзыв" />
                                    </picture>
                                </a>
                            </div>
                            <div class="reviews_slider_slide swiper-slide">
                                <a href="#">
                                    <img src="/img/play.svg" alt="play" class="reviews_slider_slide_play" />
                                    <div class="reviews_slider_slide_text">
                                        <h3>Вадим Антоневич</h3>
                                        <p>руководитель отдела сервиса компании «RVS»</p>
                                    </div>
                                    <div class="reviews_slider_slide_bg2"></div>
                                    <picture>
                                        <source class="lazyImg" data-src="/img/review1.webp" type="image/webp" />
                                        <img class="reviews_slider_slide_bg1 lazyImg" data-src="/img/review1.png"
                                            alt="отзыв" />
                                    </picture>
                                </a>
                            </div>
                            <div class="reviews_slider_slide swiper-slide">
                                <a href="#">
                                    <img src="/img/play.svg" alt="play" class="reviews_slider_slide_play" />
                                    <div class="reviews_slider_slide_text">
                                        <h3>Вадим Антоневич</h3>
                                        <p>руководитель отдела сервиса компании «RVS»</p>
                                    </div>
                                    <div class="reviews_slider_slide_bg2"></div>
                                    <picture>
                                        <source class="lazyImg" data-src="/img/review1.webp" type="image/webp" />
                                        <img class="reviews_slider_slide_bg1 lazyImg" data-src="/img/review1.png"
                                            alt="отзыв" />
                                    </picture>
                                </a>
                            </div>
                            <div class="reviews_slider_slide swiper-slide">
                                <a href="#">
                                    <img src="/img/play.svg" alt="play" class="reviews_slider_slide_play" />
                                    <div class="reviews_slider_slide_text">
                                        <h3>Вадим Антоневич</h3>
                                        <p>руководитель отдела сервиса компании «RVS»</p>
                                    </div>
                                    <div class="reviews_slider_slide_bg2"></div>
                                    <picture>
                                        <source class="lazyImg" data-src="/img/review1.webp" type="image/webp" />
                                        <img class="reviews_slider_slide_bg1 lazyImg" data-src="/img/review1.png"
                                            alt="отзыв" />
                                    </picture>
                                </a>
                            </div>
                        </div>
                    </div>

                    <button class="reviews_slider_next"></button>
                </div>
            </div>
        </div>

        <div class="cont">
            <div class="stripe"></div>
            <div class="contacts" id="contacts">
                <h2>Контакты</h2>
                <div class="popup_menu__body_links">
                    <div class="popup_menu__body_links_1">
                        <a href="https://dprofile.ru/mtimshin" target="_blank">Dprofile</a>
                        <a href="https://www.behance.net/mtimshin" target="_blank">Behance</a>
                    </div>
                    <div class="popup_menu__body_links_2">
                        <a href="https://t.me/mtimshin" target="_blank">Telegram</a>
                        <a href="https://vk.com/m_timshin" target="_blank">VK</a>
                    </div>
                </div>
                <footer class="contacts_bottom">
                    <div class="contacts_bottom_block1">
                        <div class="contacts_bottom_block1-1">
                            <a href="#" target="_blank">
                                <h3>Instagram</h3>
                            </a>
                        </div>
                        <div class="contacts_bottom_block1-2">
                            <a href="#" target="_blank">
                                <h3>Youtube</h3>
                            </a>
                        </div>
                    </div>
                    <div class="contacts_bottom_block2">
                        <a href="mailto:max@mtimshin.ru">
                            <h3>max@mtimshin.ru</h3>
                        </a>
                    </div>
                </footer>
            </div>
        </div>
        <div class="case-modal modal" id="case-modal_menu-drop" data-lenis-prevent data-scroll-lock-scrollable>
            <div class="header-mob" style="position: relative; z-index: 20; background-color: #0A0A0A;">
                <img src="/img/logo.svg" alt="Максим Тимшин — Создание цифровых продуктов" />
                <a class="case-modal__closer" style="cursor: pointer" onclick="window.closeAnyModal()">
                    <img src="/img/close.svg" alt="Закрыть меню" />
                </a>
            </div>
            <div class="popup_menu__body_links">
                <div class="popup_menu__body_links_1">
                    <a href="#cases">Кейсы</a>
                    <a href="#services">Услуги</a>
                </div>
                <div class="popup_menu__body_links_2">
                    <a href="#reviews">Отзывы</a>
                    <a href="/price">Цены</a>
                </div>
            </div>
            <div class="popup_menu__body_btn">
                <a href="#contacts" class="btn">Связаться со мной</a>
                <a href="#stages" class="btn">Этапы работ</a>
            </div>
        </div>
    </div>
</template>
