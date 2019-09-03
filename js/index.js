// Your code goes here

//Mouseover event listener
let navMouseOver = document.querySelectorAll("a");
navMouseOver.forEach((arr) => arr.addEventListener
('mouseover',(event) => event.target.style.color = "teal"));

//Keydown event listener
let bodyKeyDown = document.querySelector("body");
bodyKeyDown.addEventListener('keydown', (event) => event.target.style.backgroundColor = "antiquewhite");
