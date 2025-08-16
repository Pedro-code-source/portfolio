const toggleMenuButton = document.querySelector('#menu-toggle');

const menuLinks = document.querySelectorAll('.menu-links')

toggleMenuButton.addEventListener('click', () => {
    for(let i = 0; i < menuLinks.length; i++) {
        menuLinks[i].classList.toggle('show');
    }
});