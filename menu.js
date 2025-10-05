const navbar = document.querySelector('nav');

window.addEventListener('scroll', () => {
    if (window.scrollY === 0) {
        navbar.style.top = '0'; 
    } else {
        navbar.style.top = '-100px'; 
    }
});
const togglebtn=document.getElementById("theme");
togglebtn.addEventListener("click",()=>{
    document.body.classList.toggle("dark");
    togglebtn.textContent=document.body.classList.contains("dark")
    ?"white theme"
    :"blue theme";
});