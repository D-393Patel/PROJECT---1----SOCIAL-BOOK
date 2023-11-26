var settingsmenu=document.querySelector(".settings-menu");
var darkBtn=document.getElementById("dark-btn");
function settingsMenuToggle(){
  settingsmenu.classList.toggle("settings-menu-height");
}
darkBtn.onclick=function(){
  darkBtn.classList.toggle("dark-btn-on");
  document.body.classList.toggle("dark-theme");
 //we are updating the value of localStorage on onclick of darkBtn so rest can follow:
 if((localStorage.getItem("theme"))=="light"){
  localStorage.setItem("theme","dark");
  //if  localStorage's valuetheme was light then it turns to dark and get's stored in localStorage.
 }
 else{
  //if  localStorage's valuetheme was dark then it turns to light and get's stored in localStorage.
  localStorage.getItem("theme")="light";
 }

}
//checking if localstorage has a value stored to it by(localStorage.getItem("theme"))is light or dark:
//if light:we would remove the dark-btn from settings menu and also remove the dark-theme from it.
//if dark:we would add the dark-btn in settings-menu and also add the dark-theme in it.
if((localStorage.getItem("theme"))=="light"){
  darkBtn.classList.remove("dark-btn-on");
  document.body.classList.remove("dark-theme");
}
else if((localStorage.getItem("theme"))=="dark"){
  darkBtn.classList.add("dark-btn-on");
  document.body.classList.add("dark-theme");
}
//or else if nothing is stored in localStorage,by default we will give it's value light.
else{
  localStorage.setItem("theme","light");
  
}
localStorage.setItem("theme","light")//it means we are creating local storage with name-theme and with value-light.
localStorage.getItem("theme");// getItem will give you the value stored in localstorage named theme.

var seeAll=document.querySelector('.right-sidebar  .sidebar-title a');
seeAll.addEventListener('mouseover',function(e){
 this.style.color="aqua";
})