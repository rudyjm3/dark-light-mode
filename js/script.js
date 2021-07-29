//Javascript for Button dark / light mode
let btn = document.getElementsByClassName("color-btn");
btn[0].addEventListener("click", colorModeBtn);

let checkbox = document.getElementById("chk");
checkbox.addEventListener("change", colorModeBtn); 

let bell = document.getElementsByClassName("bell");
let profileName = document.getElementsByClassName("profile-name");


function colorModeBtn() {
   //alert("Event worked and function ran!");
   let header = document.getElementsByClassName("header");
   let sidePanel = document.getElementsByClassName("side-panel");

   if (header[0].classList.contains("header-light")) {
      header[0].classList.remove("header-light");
      bell[0].style.color = "#e9e9e9";
      btn[0].innerHTML = "Light Mode";
   } else {
      header[0].classList.add("header-light");
      bell[0].style.color = "#333";
      btn[0].innerHTML = "Dark Mode";
   }

   if (sidePanel[0].classList.contains("side-panel-light")) {
      sidePanel[0].classList.remove("side-panel-light");
      profileName[0].style.color = "#e9e9e9";
   } else {
      sidePanel[0].classList.add("side-panel-light");
      profileName[0].style.color = "var(--dark-background2)";
   }
}
