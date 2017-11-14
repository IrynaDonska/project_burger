let menuLink = document.getElementById('menu-link')
let hiddenMenu = document.getElementById('hidden-menu')
let closeMenu = document.getElementById('close-menu')

menuLink.addEventListener('click' , function() {
   hiddenMenu.classList.add('hidden-menu_active') 
})

closeMenu.addEventListener('click' , function() {
    hiddenMenu.classList.remove('hidden-menu_active')
})

