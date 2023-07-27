document.addEventListener('DOMContentLoaded', function () {
    /* Open close menu mobile */
    const navMenuLink = document.querySelector('.nav-menu-link');
    const sidebarMenu = document.querySelector('.sidebar-menu');

    if (navMenuLink && sidebarMenu) {
        navMenuLink.addEventListener('click', function (event) {
            event.preventDefault();
            sidebarMenu.classList.add('sidebar-menu-active');
        });
    }

    const btnClose = document.querySelector('.btn-close');
    if (btnClose && sidebarMenu) {
        btnClose.addEventListener('click', function () {
            sidebarMenu.classList.remove('sidebar-menu-active');
        });
    }
    /* End open close menu mobile */

    /* Collapse menu mobile */
    const accordionItemHeaders = document.querySelectorAll('.accordion-item-header');
    if (accordionItemHeaders) {
        accordionItemHeaders.forEach(accordionItemHeader => {
            accordionItemHeader.addEventListener('click', event => {
                accordionItemHeader.classList.toggle('accordion-active');
                const accordionItemBody = accordionItemHeader.nextElementSibling;
                if (accordionItemHeader.classList.contains('accordion-active')) {
                    accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + 'px';
                }
                else {
                    accordionItemBody.style.maxHeight = 0;
                }

            });
        });
    }
    /* End collapse menu mobile */

    /* Sticky menu */
    var header = document.querySelector('.menu-area');

    onScroll = () => {
        var scrolledPage = Math.round(window.pageYOffset);
        if (scrolledPage > 60 && header) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    }
    /* End sticky menu */

    /* Scroll to top */
    document.addEventListener('scroll', onScroll);

    const scrollTop = document.getElementById('scroll-to-top');
    if (scrollTop) {
        scrollTop.addEventListener('click', function ScrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        })
    }
    /* End scroll to top */

    /* Search */
    const searchBtn = document.querySelector('.sticky_search');
    const stickySearch = document.querySelector('.sticky-search');
    const searchClose = document.querySelector('.search-close'); // Select the element with class 'search-close'

    if (searchBtn && stickySearch) {
        searchBtn.addEventListener('click', () => {
            stickySearch.classList.add('sticky-search-active');
        });

        if (searchClose) {
            searchClose.addEventListener('click', () => {
                stickySearch.classList.remove('sticky-search-active');
            });
        }
    }
    /* End search */
});