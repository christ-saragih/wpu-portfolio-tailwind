// Navbar Fixed
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    console.log(window.pageYOffset);
    console.log(fixedNav);

    if(window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
}


// Hamburger Menu
const hamburgerMenu = document.getElementById('hamburger-menu');
const navbarMenu = document.getElementById('navbarMenu');

hamburgerMenu.addEventListener('click', function() {
    hamburgerMenu.classList.toggle('hamburger-menu-active');
    navbarMenu.classList.toggle('hidden');
});

