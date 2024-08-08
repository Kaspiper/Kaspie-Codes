const tabList = document.querySelectorAll("div.tab");
const tabListArray = [...tabList];

const alttabList = document.querySelectorAll("div.alt-tab");
const alttabListArray = [...alttabList];

const mobileContentList = document.querySelectorAll("div.mobile-content-container");
const mobileContentArray = [...mobileContentList];

const contentList = document.querySelectorAll("div.content-container");
const contentListArray = [...contentList];


var index = 0;

function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    const tstbtn = document.querySelector(".TESTBTN");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
    tstbtn.classList.toggle("open");
}
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
function openTab(tab, altTab, content, altcontent){

    // SETS OTHER TABS TO DEFAULT HIDDEN
    tabListArray.forEach(tab => {
        tab.style.height = "90%";
        tab.style.backgroundColor = "rgb(240, 240, 240)";
        tab.style.cursor = "";
        tab.style.fontWeight = "";
    });

    //SETS OTHER altTABS TO DEFAULT HIDDEN
    alttabListArray.forEach(tab => {
        tab.children[0].style.width = "2rem";
        tab.children[0].style.backgroundColor = "rgb(85, 85, 85)";
        tab.children[1].style.color = "rgb(85, 85, 85)";
        tab.children[1].style.fontWeight = "";
    });

    //SETS ALL CONTENT TO DEFAULT HIDDEN
    contentListArray.forEach(content => {
        content.style.display = "none";
    });

    //SETS TAB CLICKED TO ACTIVE DISPLAY
    var tabClicked = document.getElementById(tab);
    tabClicked.style.height = "125%";
    tabClicked.style.backgroundColor = "white";
    tabClicked.style.cursor = "default";
    tabClicked.style.fontWeight = "bolder";

    //SETS alt TAB CLICKED TO ACTIVE DISPLAY
    var tabClicked = document.getElementById(altTab);
    tabClicked.children[0].style.width = "4rem";
    tabClicked.children[1].style.color = "black";
    tabClicked.children[1].style.fontWeight = "bolder";

    //SETS SELECTED CONTENT TO ACTIVE DISPLAY
    var contentSelected = document.getElementById(content);
    contentSelected.style.display = "flex";
    contentSelected.style.flexDirection = "column";

    //SETS SELECTED CONTENT TO ACTIVE DISPLAY
    var altcontentSelected = document.getElementById(altcontent);
    altcontentSelected.style.display = "flex";
    altcontentSelected.style.flexDirection = "column";
}
function nextSlide(){
    mobileContentArray[index].style.display = "none";
    index = (index + 1) % 4;
    mobileContentArray[index].style.display = "block";
}
function previousSlide(){
    mobileContentArray[index].style.display = "none";
    index = ((index - 1) + 4) % 4;
    mobileContentArray[index].style.display = "block";
}
function contactEffects(){
    const emailcontainereffect = document.querySelector(".email-container-effect");
    emailcontainereffect.classList.toggle("shake");
    setTimeout(() => { emailcontainereffect.classList.toggle("shake"); }, 1000);
}
async function displaySection(){
    var sectionslist = document.querySelectorAll("section");
    var sectionslistarray = [...sectionslist];
    sectionslistarray.forEach(section => {
      section.style.animationName = "showsections"; 
      sleep(1800).then(() => { 
        section.style.opacity = "1";
        section.style.animationName = ""; 
      });
    });
}
window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    if (scroll > 5) {
      document.querySelector(".header-container").classList.add("shadow");
    } else {
      document.querySelector(".header-container").classList.remove("shadow");
    }
});


document.getElementById("tab1").click();
window.addEventListener('load', displaySection());



