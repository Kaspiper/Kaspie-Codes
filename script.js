


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

async function typeLogo(Logo){
  const DesktopLogo = document.querySelector("#DesktopLogo");
  const MobileLogo = document.querySelector("#MobileLogo");

  for(var i = 0; i < 3; i++){
    await sleep(200);
    DesktopLogo.innerHTML = "_";
    MobileLogo.innerHTML = "_";
    await sleep(200);
    DesktopLogo.innerHTML = "";
    MobileLogo.innerHTML = "";
  }

 
  var lefttag = "&lt;";
  for(var i = 0; i <= Logo.length; i++){
    await sleep(100);
    DesktopLogo.innerHTML = lefttag + Logo.substring(0, i) + "_";
    MobileLogo.innerHTML = lefttag + Logo.substring(0, i) + "_";
  }

  await sleep(60);
  DesktopLogo.innerHTML = lefttag + Logo + "&gt;_";
  MobileLogo.innerHTML = lefttag + Logo + "&gt;_";
  await sleep(500);
  DesktopLogo.innerHTML = lefttag + Logo + "_";
  MobileLogo.innerHTML = lefttag + Logo + "_";
  await sleep(200);
  DesktopLogo.innerHTML = lefttag + Logo + "/_";
  MobileLogo.innerHTML = lefttag + Logo + "/_";
  await sleep(200);
  DesktopLogo.innerHTML = lefttag + Logo + "/&gt;_";
  MobileLogo.innerHTML = lefttag + Logo + "/&gt;_";
  await sleep(200);
  DesktopLogo.innerHTML = lefttag + Logo + "/&gt;";
  MobileLogo.innerHTML = lefttag + Logo + "/&gt;";
  
}

async function displayNav(){
  document.getElementById("DesktopHeaderMenu").style.animationName = "fadeIn";
  document.getElementById("MobileHeaderMenu").style.animationName = "testbtnfadein";
  sleep(400).then(()=>{
    document.getElementById("DesktopHeaderMenu").style.opacity = "1";
    document.getElementById("MobileHeaderMenu").style.opacity = "1";
    document.getElementById("DesktopHeaderMenu").style.animationName = "";
    document.getElementById("MobileHeaderMenu").style.animationName = "";
  });

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

async function startDisplay(){
  displaySection();
  var Logo = "KASPIE CODES";
  typeLogo(Logo);
  sleep(2200).then(() => { 
    displayNav();
  });
  
}

function contactEffects(){
  const emailcontainereffect = document.querySelector(".email-container-effect");
  emailcontainereffect.classList.toggle("shake");
  setTimeout(() => { emailcontainereffect.classList.toggle("shake"); }, 1000);
}


window.addEventListener('load', startDisplay());

window.addEventListener("scroll", (event) => {
  let scroll = this.scrollY;
  if (scroll > 5) {
    document.querySelector(".header-container").classList.add("shadow");
  } else {
    document.querySelector(".header-container").classList.remove("shadow");
  }
});









