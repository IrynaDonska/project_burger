//hidden-menu

$(function () {
    let menuLink = document.getElementById('menu-link')
    let hiddenMenu = document.getElementById('hidden-menu')
    let closeMenu = document.getElementById('close-menu')

    menuLink.addEventListener('click', function () {
        hiddenMenu.classList.add('hidden-menu_active')
    })

    closeMenu.addEventListener('click', function () {
        hiddenMenu.classList.remove('hidden-menu_active')
    })

})

//composition-droptitle
$(function () {

})


//team accordeon
$(function () {
    $('.team-accordeon__trigger').on('click' , e => {
        e.preventDefault()

        const $this = $(e.currentTarget);
        const list = $this.closest('.team-accordeon');
        const item = $this.closest('.team-accordeon__item');
        const items = $('.team-accordeon__item' , list);
        const content = $('.team-accordeon__content' , item);
        const allContent = $('.team-accordeon__content' , list)
        const text = $('.team-accordeon__text' , item);
        const textHeight = text.outerHeight();

        if (!item.hasClass('team-accordeon__item_active')) {

            items.removeClass('team-accordeon__item_active')
            item.addClass('team-accordeon__item_active')

            allContent.css({
                'height' : 0
            })
            
            content.css({
                'height' : textHeight
            })
            
        } else {
            item.removeClass('team-accordeon__item_active')
            content.css({
                'height' : 0
            })
        }

       
    })
})

//menu-accordeon

$(function () {
    $('.menu-accordeon__trigger').on('click', e => {
        e.preventDefault()

        const $this = $(e.currentTarget);
        const listMenu = $this.closest('.menu-accordeon');
        const itemMenu = $this.closest('.menu-accordeon__item');
        const itemsMenu = $('.menu-accordeon__item', listMenu);
        const textMenu = $('.menu-accordeon__text', itemMenu);
        const allTextMenu = $('.menu-accordeon__text', listMenu)
        const screenWidth = $(window).width();
        const bigMenu = 540;
        const smallWidth = screenWidth - 240
        const smallWidthPhone = screenWidth - 80


        if (!itemMenu.hasClass('menu-accordeon__item_active')) {

            itemsMenu.removeClass('menu-accordeon__item_active')
            itemMenu.addClass('menu-accordeon__item_active')
            allTextMenu.css({
                'width': 0
            })

            if (screenWidth > 768) {
                textMenu.css({
                    'width': bigMenu
                })
            } else if (screenWidth <= 768) {
                textMenu.css({
                    'width': smallWidth
                })

            } else if (screenWidth > 480) {
                textMenu.css({
                    'width': smallWidth
                })
            } else {
                textMenu.css({
                    'width': smallWidthPhone
                })
            }


        } else {
            itemMenu.removeClass('menu-accordeon__item_active')
            textMenu.css({
                'width': 0
            })
        }


    })
})

//FancyBox feedback
$(function () {

    $("[data-fancybox-feedback]").fancybox({
        overlayColor: '#2f3234',
        overlayOpacity: 0.92,

    });

})


//slider burger

$(function () {
    let burgersItem = document.querySelectorAll('.burgers__item');
    let burgersItemLength = burgersItem.length
    let buttonPrev = document.querySelector('.button-burgers__previous');
    let buttonNext = document.querySelector('.button-burgers__next');
    let currentBurgersItem = 0;


    burgersItem[0].style.display = 'flex';

    buttonNext.addEventListener('click', function () {
        burgersItem[currentBurgersItem].style.display = 'none';
        currentBurgersItem = getBurgersItemNumber(currentBurgersItem + 1);
        burgersItem[currentBurgersItem].style.display = 'flex';
    })

    buttonPrev.addEventListener('click', function () {
        burgersItem[currentBurgersItem].style.display = 'none';
        currentBurgersItem = getBurgersItemNumber(currentBurgersItem - 1);
        burgersItem[currentBurgersItem].style.display = 'flex';
    })

    function getBurgersItemNumber(num) {
        if (num === -1) {
            num = burgersItemLength - 1;
        }
        if (num === burgersItemLength) {
            num = 0;
        }
        return num

    }
})


//one page scroll
$(function () {
    const display = $('.maincontent');
    const sections = $('.section');

    let inScroll = false;

    const mobileDetect = new MobileDetect(window.navigator.userAgent);
    const isMobile = mobileDetect.mobile();

    const paginationActive = sectionEq => { //навешиваем активный класс на елемент пагинации
        $('.pagination-item').eq(sectionEq).addClass('pagination-item_active')
            .siblings().removeClass('pagination-item_active');
    }


    const performTransition = sectionEq => {

        if (inScroll) return
        inScroll = true

        const position = (sectionEq * -100) + '%';

        display.css({
            'transform': `translate(0, ${position})`,
            '-webkit-transform': `translate(0, ${position})`,
        })

        sections.eq(sectionEq).addClass('active')
            .siblings().removeClass('active')


        setTimeout(() => {
            inScroll = false;
            paginationActive(sectionEq);
        }, 1300);


    }

    const definedSections = sections => {
        const activeSection = sections.filter('.active');

        return {
            activeSection: activeSection,
            nextSection: activeSection.next(),
            prevSection: activeSection.prev()
        }
    }

    const scrollToSection = direction => {
        const section = definedSections(sections)

        if (inScroll) return;

        if (direction === 'up' && section.nextSection.length) {
            performTransition(section.nextSection.index())
        }

        if (direction === 'down' && section.prevSection.length) {
            performTransition(section.prevSection.index())
        }
    }

    $('.wrapper').on({
        wheel: e => {
            const deltaY = e.originalEvent.deltaY;
            let direction = (deltaY > 0) ?
                'up' :
                'down'

            scrollToSection(direction);
        },

        touchmove: e => (e.preventDefault())
    })


    if (isMobile) {
        $(window).swipe({
            swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
                scrollToSection(direction);
            }
        })
    }



    $(document).on('keydown', e => {
        const section = definedSections(sections);

        if (inScroll) return

        switch (e.keyCode) {
            case 40:
                if (!section.nextSection.length) return;
                performTransition(section.nextSection.index());
                break;

            case 38:
                if (!section.prevSection.length) return;
                performTransition(section.prevSection.index());
                break;
        }
    })

    $('[data-scroll-to]').on('click touchstart', e => {
        e.preventDefault();

        const $clickElement = $(e.currentTarget);
        const sectionIndex = parseInt($clickElement.attr('data-scroll-to'));

        performTransition(sectionIndex);

    })

})