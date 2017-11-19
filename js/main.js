//hidden-menu

$(function () {
    let menuLink = document.getElementById('menu-link')
    let hiddenMenu = document.getElementById('hidden-menu')
    let closeMenu = document.getElementById('close-menu')
    
    menuLink.addEventListener('click' , function() {
       hiddenMenu.classList.add('hidden-menu_active') 
    })
    
    closeMenu.addEventListener('click' , function() {
        hiddenMenu.classList.remove('hidden-menu_active')
    })

})



//composition-droptitle
$(function () {
    let compositionClose = document.getElementById('composition-list__item-close')
    let composition= document.getElementById('burgers-picture__composition')
    let compositionDroptitle = document.getElementById('composition-droptitle')
    let screenWidth = $(window).width();

    composition.onclick = function() {
        display = compositionDroptitle.style.display;
            
        if (display=='none'){
                compositionDroptitle.style.display='block';
                composition.style.background='#e45028';
        } else {
                compositionDroptitle.style.display='none';
                composition.style.background='#f08c33';
        } 
    }
    
    
    
    compositionClose.addEventListener('click' , function() {
        compositionDroptitle.style.display='none';
        composition.style.background='#f08c33';
    })
    
})


//team-accordeon 

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
    $('.menu-accordeon__trigger').on('click' , e => {
        e.preventDefault()

        const $this = $(e.currentTarget);
        const listMenu = $this.closest('.menu-accordeon');
        const itemMenu = $this.closest('.menu-accordeon__item');
        const itemsMenu = $('.menu-accordeon__item' , listMenu);
        const textMenu = $('.menu-accordeon__text' , itemMenu);
        const allTextMenu = $('.menu-accordeon__text' , listMenu)
        const screenWidth = $(window).width();
        const bigMenu = 540;
        const smallWidth = screenWidth - 240
        const smallWidthPhone = screenWidth - 80
        

        if (!itemMenu.hasClass('menu-accordeon__item_active')) {

            itemsMenu.removeClass('menu-accordeon__item_active')
            itemMenu.addClass('menu-accordeon__item_active')
            allTextMenu.css({
                'width' : 0
            })
            
            if (screenWidth > 768) {
                textMenu.css({
                    'width' : bigMenu
                })
            } else if (screenWidth <= 768){
                textMenu.css({
                    'width' : smallWidth
                }) 
     
            } else if (screenWidth > 480) {
                textMenu.css({
                    'width' : smallWidth
                }) 
            } else {
                textMenu.css({
                    'width' : smallWidthPhone
                }) 
            }
            
            
        } else {
            itemMenu.removeClass('menu-accordeon__item_active')
            textMenu.css({
                'width' : 0
            })
        }

       
    })
})

//FancyBox feedback
$(function () {

    $("[data-fancybox-feedback]").fancybox({
        overlayColor: '#2f3234' ,
        overlayOpacity: 0.92 ,
    
	});

})


