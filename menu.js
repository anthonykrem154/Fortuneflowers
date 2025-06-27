let prevScrollPos = window.pageYOffset;
const navbar = document.querySelector('nav');

window.addEventListener('scroll', () => {
    const currentScrollPos = window.pageYOffset;

    if (prevScrollPos > currentScrollPos) {
        // Scrolling up
        navbar.style.top = "0";
    } else {
        // Scrolling down
        navbar.style.top = "-100px"; // or adjust based on your nav height
    }

    prevScrollPos = currentScrollPos;

    checkVisibility(); // Keep your section animation working
});
