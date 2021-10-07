var h1 = document.querySelector(".title");
var p = document.querySelector("#description");
var h3 = document.querySelector("#bossy");
var lis = document.querySelectorAll("li");
var body = document.querySelector("body");
var title = document.querySelector("title");

h1.textContent = "Big Brother is my friend now";
p.textContent = "Alphonse Vota";
h3.textContent = "Big Brother is the prime of my life";
title.textContent = "Thinkspeak is cool"

lis[0].style.color = "Dark Gray";
lis[1].style.backgroundColor = "Cyan";
body.style.backgroundColor = "Red"
lis[3].style.textTransform = "uppercase";
lis[4].classList.add("title");