
function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    const tstbtn = document.querySelector(".TESTBTN");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
    tstbtn.classList.toggle("open");
}


window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    if (scroll > 5) {
      document.querySelector(".header-container").classList.add("shadow");
    } else {
      document.querySelector(".header-container").classList.remove("shadow");
    }
});



