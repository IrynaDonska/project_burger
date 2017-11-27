//hidden-menu

$(function () {
    let menuLink = $('.menu-link')
    let hiddenMenu = $('.hidden-menu')
    let closeMenu = $('.hidden-menu__header-close')
    let hiddenMenuItem = $('.hidden-menu__item')
    let logoMenu = $('.header__logo')


    logoMenu.on('click', () => {
        hiddenMenu.addClass('hidden-menu_active')
    })

    menuLink.on('click', () => {
        hiddenMenu.addClass('hidden-menu_active')
    })

    hiddenMenuItem.on('click', e => {
        hiddenMenu.removeClass('hidden-menu_active')
    })

    closeMenu.on('click', () => {
        hiddenMenu.removeClass('hidden-menu_active')
    })



})

//composition-droptitle
$(function () {

    $('.burgers-picture__composition').on('click', e => {
        const $pictureComp = $(e.currentTarget);
        const siblingsBurgComp = $pictureComp.siblings(".composition-droptitle")
        const screenWidth = $(window).width();


        if (screenWidth > 780) {
            if (!siblingsBurgComp.hasClass('composition-droptitle_active')) {
                siblingsBurgComp.addClass('composition-droptitle_active')
                $pictureComp.css({
                    'background': '#e35028'
                })
            } else {
                siblingsBurgComp.removeClass('composition-droptitle_active')
                $pictureComp.css({
                    'background': '#f08c33'
                })
            }
        } else {
            siblingsBurgComp.addClass('composition-droptitle_active')
            $pictureComp.css({
                'background': '#e35028'
            })

        }



        $('.composition-list__item-close').on('click', e => {
            siblingsBurgComp.removeClass('composition-droptitle_active')
            $pictureComp.css({
                'background': '#f08c33'
            })
            $pictureComp.on('click'), () => {
                return false
            }
        })




    })


})

//team accordeon
$(function () {
    $('.team-accordeon__trigger').on('click', e => {
        e.preventDefault()

        const $this = $(e.currentTarget);
        const list = $this.closest('.team-accordeon');
        const item = $this.closest('.team-accordeon__item');
        const items = $('.team-accordeon__item', list);
        const content = $('.team-accordeon__content', item);
        const allContent = $('.team-accordeon__content', list)
        const text = $('.team-accordeon__text', item);
        const textHeight = text.outerHeight();

        if (!item.hasClass('team-accordeon__item_active')) {

            items.removeClass('team-accordeon__item_active')
            item.addClass('team-accordeon__item_active')

            allContent.css({
                'height': 0
            })

            content.css({
                'height': textHeight
            })

        } else {
            item.removeClass('team-accordeon__item_active')
            content.css({
                'height': 0
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
        const siblingsItemMenu = itemMenu.siblings()


        $('.menu-accordeon__close').on('click', e => {
            itemMenu.removeClass('menu-accordeon__item_active')
            textMenu.css({
                'width': 0
            })
            siblingsItemMenu.css({
                'display': 'flex'
            })
        })



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
            }
            if (screenWidth <= 768) {
                textMenu.css({
                    'width': smallWidth
                })

            }
            if (screenWidth <= 480) {
                textMenu.css({
                    'width': smallWidthPhone
                })
                siblingsItemMenu.css({
                    'display': 'none'
                })

            }


        } else {
            itemMenu.removeClass('menu-accordeon__item_active')
            textMenu.css({
                'width': 0
            })
            siblingsItemMenu.css({
                'display': 'flex'
            })
        }

        $(document).mouseup(function (e) {
            if (itemMenu.has(e.target).length === 0) {
                itemMenu.removeClass('menu-accordeon__item_active');
                textMenu.css({
                    'width': 0
                })
            }
        });


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

/*$(function () {
    const burgersItem = $('.burgers__item');
    const burgersItemLength = burgersItem.length
    const buttonPrev = $('.button-burgers__previous');
    const buttonNext = $('.button-burgers__next');
    const currentBurgersItem = 0;


    burgersItem.eq(0).css({
        'display': 'flex'
    });


    buttonNext.on('click', () => {
        burgersItem.eq(currentBurgersItem).css({
            'display': 'none'
        });
        currentBurgersItem = getBurgersItemNumber(currentBurgersItem + 1);
        burgersItem.eq(currentBurgersItem).css({
            'display': 'flex'
        });
    });

    buttonPrev.on('click', () => {
        burgersItem.eq(currentBurgersItem).css({
            'display': 'none'
        });
        currentBurgersItem = getBurgersItemNumber(currentBurgersItem - 1);
        burgersItem.eq(currentBurgersItem).css({
            'display': 'flex'
        });

    });

    function getBurgersItemNumber(num) {
        if (num === -1) {
            num = burgersItemLength - 1;
        }
        if (num === burgersItemLength) {
            num = 0;
        }
        return num
    }
})*/



//one page scroll
$(function () {
    const display = $('.maincontent');
    const sections = $('.section');

    let inScroll = false;

    const mobileDetect = new MobileDetect(window.navigator.userAgent);
    const isMobile = mobileDetect.mobile();

    const paginationActive = sectionEq => {
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


// ajax order-form

let submitForm = function (ev) {
    ev.preventDefault();

    const form = $(ev.target);

    const request = ajaxForm(form);

    request.done(function (msg) {
        const mes = msg.mes,
            status = msg.status;

        /*if (status === "OK") {
                $.fancybox.open({
                    src: '<div class="success">' + mes + '</div>',
                    type : 'html'
        
                    })
            } else {
                $.fancybox.open({
                    src: '<div class="error">' + mes + '</div>',
                    type : 'html'
                })
            }*/

        if (status === 'OK') {
            form.append('<p class="success">' + mes + '</p>');
            form.reset();

        } else {

            form.append('<p class="error">' + mes + '</p>');
        }

    });

    request.fail(function (jqXHR, textStatus) {
        alert("Request failed: " + textStatus);
    });
}

var ajaxForm = function (form) {

    var url = form.attr('action'),
        data = form.serialize();

    return $.ajax({
        type: 'POST',
        url: url,
        data: data,
        dataType: 'JSON'
    });

}

$('#order-form').on('submit', submitForm);