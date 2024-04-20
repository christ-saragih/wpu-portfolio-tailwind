// Navbar Fixed
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    const btnToTop = document.querySelector('#btnToTop');

    // console.log(window.pageYOffset);
    // console.log(fixedNav);

    if(window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
        btnToTop.classList.remove('hidden');
        btnToTop.classList.add('flex');
    } else {
        header.classList.remove('navbar-fixed');
        btnToTop.classList.remove('flex');
        btnToTop.classList.add('hidden');
    }
}


// Hamburger Menu
const hamburgerMenu = document.getElementById('hamburger-menu');
const navbarMenu = document.getElementById('navbarMenu');

hamburgerMenu.addEventListener('click', function() {
    hamburgerMenu.classList.toggle('hamburger-menu-active');
    navbarMenu.classList.toggle('hidden');
});

