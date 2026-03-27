<script setup>
useHead({
    bodyAttrs: {
        class: 'price-page'
    }
})
</script>

<template>
    <div>
        <div class="preloader"></div>

        <div class="cont-head" id="first">
            <header class="header">
                <a href="/"><img src="/img/logo.svg" alt="Максим Тимшин — Создание цифровых продуктов" /></a>
                <ul class="header_menu">
                    <li>
                        <a href="/#cases" class="link cont-head-anchor">Кейсы</a>
                    </li>
                    <li>
                        <a href="/#stages" class="link cont-head-anchor">Этапы</a>
                    </li>
                    <li>
                        <a href="/#reviews" class="link cont-head-anchor">Рекомендации</a>
                    </li>
                </ul>
                <a href="/#contacts" class="btn">Связаться со мной</a>
            </header>
            <div class="cont-head-bg"></div>
            <header class="header-mob">
                <a href="/#first">
                    <img src="/img/logo.svg" alt="Максим Тимшин — Проводник в мир интерфейсов" /></a>
                <a onclick="openModal('case-modal_menu-drop')">
                    <img src="/img/burger.svg" alt="Меню" />
                </a>
            </header>
        </div>

        <div class="cont-head">
            <div class="header_price">
                <h2>Цены</h2>
                <p>2—3 квартал 2025</p>
            </div>
        </div>
        <div class="cont">
            <div class="services" id="services">
                <ul class="services_list services_list_price">
                    <li class="services_list__item">
                        <div class="services_list__item_stripe"></div>
                        <div class="services_list__item_cont">
                            <div class="services_list__item_block">
                                <h3>Дизайн интерфейса</h3>
                            </div>
                            <div class="cont_services_list__item_cont">
                                <div class="services_list__item_cont_desc">
                                    <div class="services_list__item_block">
                                        <p>
                                            Концепция
                                        </p>
                                        <p>
                                            Главная страница или любая другая ключевая страница/экраны проекта
                                        </p>
                                    </div>
                                    <div class="services_list__item_block">
                                        <span class="services_list__item_block_price">
                                            от 20 000 ₽
                                        </span>
                                    </div>
                                </div>
                                <div class="services_list__item_cont_desc">
                                    <div class="services_list__item_block">
                                        <p>
                                            Концепция
                                        </p>
                                        <p>
                                            Главная страница или любая другая ключевая страница/экраны проекта
                                        </p>
                                    </div>
                                    <div class="services_list__item_block">
                                        <span class="services_list__item_block_price">
                                            от 20 000 ₽
                                        </span>
                                    </div>
                                </div>
                                <div class="services_list__item_cont_desc">
                                    <div class="services_list__item_block">
                                        <p>
                                            Концепция
                                        </p>
                                        <p>
                                            Главная страница или любая другая ключевая страница/экраны проекта
                                        </p>
                                    </div>
                                    <div class="services_list__item_block">
                                        <span class="services_list__item_block_price">
                                            от 20 000 ₽
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="services_list__item_stripe"></div>
                    </li>
                    <li class="services_list__item">
                        <div class="services_list__item_cont">
                            <div class="services_list__item_block">
                                <h3>Программирование</h3>
                            </div>
                            <div class="cont_services_list__item_cont">
                                <div class="services_list__item_cont_desc">
                                    <div class="services_list__item_block">
                                        <p>
                                            Концепция
                                        </p>
                                        <p>
                                            Главная страница или любая другая ключевая страница/экраны проекта
                                        </p>
                                    </div>
                                    <div class="services_list__item_block">
                                        <span class="services_list__item_block_price">
                                            от 20 000 ₽
                                        </span>
                                    </div>
                                </div>
                                <div class="services_list__item_cont_desc">
                                    <div class="services_list__item_block">
                                        <p>
                                            Концепция
                                        </p>
                                        <p>
                                            Главная страница или любая другая ключевая страница/экраны проекта
                                        </p>
                                    </div>
                                    <div class="services_list__item_block">
                                        <span class="services_list__item_block_price">
                                            от 20 000 ₽
                                        </span>
                                    </div>
                                </div>
                                <div class="services_list__item_cont_desc">
                                    <div class="services_list__item_block">
                                        <p>
                                            Концепция
                                        </p>
                                        <p>
                                            Главная страница или любая другая ключевая страница/экраны проекта
                                        </p>
                                    </div>
                                    <div class="services_list__item_block">
                                        <span class="services_list__item_block_price">
                                            от 20 000 ₽
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="services_list__item_stripe"></div>
                    </li>
                </ul>
            </div>
            <div class="btns">
                <a href="/#cases" class="btn" target="_blank">Смотреть примеры работ</a>
                <a href="/#contacts" class="btn2" target="_blank">Связаться со мной</a>
            </div>
        </div>
        <div class="cont">
            <footer class="contacts_bottom contacts_bottom_price">
                <div class="contacts_bottom_block1">
                    <a href="/" target="_blank"><img src="/img/logo.svg"
                            alt="Максим Тимшин — Создание цифровых продуктов" /></a>
                </div>
                <div class="contacts_bottom_block2">
                    <a href="mailto:max@mtimshin.ru">
                        <h3>max@mtimshin.ru</h3>
                    </a>
                </div>
            </footer>
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
                    <a href="/#cases">Кейсы</a>
                    <a href="/#services">Услуги</a>
                </div>
                <div class="popup_menu__body_links_2">
                    <a href="/#reviews">Отзывы</a>
                    <a href="/price">Цены</a>
                </div>
            </div>
            <div class="popup_menu__body_btn">
                <a href="/#contacts" class="btn">Связаться со мной</a>
                <a href="/#stages" class="btn">Этапы работ</a>
            </div>
        </div>
    </div>
</template>
