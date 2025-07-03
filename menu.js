let prevScrollPos = window.pageYOffset;
const navbar = document.querySelector('nav');

window.addEventListener('scroll', () => {
    const currentScrollPos = window.pageYOffset;

    if (prevScrollPos > currentScrollPos) {
        
        navbar.style.top = "0";
    } else {
        
        navbar.style.top = "-100px"; 
    }

    prevScrollPos = currentScrollPos;

    checkVisibility(); 
});
