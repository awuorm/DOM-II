// Your code goes here

//1.Mouseover event listener
let navMouseOver = document.querySelectorAll("a");
navMouseOver.forEach((arr) => arr.addEventListener
('mouseover',(event) => event.target.style.color = "teal"));

//2.Keydown event listener
let bodyKeyDown = document.querySelector("body");
bodyKeyDown.addEventListener('keydown', (event) => event.target.style.backgroundColor = "antiquewhite");

//3.Mouseleave listener
navMouseOver.forEach((arr) => arr.addEventListener("mouseleave", (event) => event.target.style.color = "black"));

//4.Select
let pSelect = document.querySelectorAll("p");
pSelect.forEach((arr) => arr.addEventListener("mousemove",(event) => event.target.style.color ="teal"));

//5."dblclick"
let buttonReload = document.querySelectorAll(".btn");
buttonReload.forEach((arr) => arr.addEventListener('dblclick', (event)=> event.target.style.backgroundColor = "pink"
    
));

//6."load"
window.addEventListener('load', (event) => {
    console.log('page is fully loaded');
  });

//7.Resize
window.addEventListener('resize', (event) => console.log("tablet view"));

//8. Scroll
bodyKeyDown.addEventListener("scroll",(event) => event.target.style.backgroundColor = "teal");

//9.focus
let imgFocus = document.querySelector(".intro img");
imgFocus.addEventListener("focus",(event) => event.target.style.width = "1px");
 
//10. Scroll
window.addEventListener('scroll', (event) => {
    console.log('page was scrolled');
  });


