const navbar = document.querySelector('nav');

window.addEventListener('scroll', () => {
    if (window.scrollY === 0) {
        navbar.style.top = '0'; // show menu
    } else {
        navbar.style.top = '-100px'; // hide menu
    }
});
