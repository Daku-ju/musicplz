"use strict";

// Burger Menu

const menu = document.querySelector(".menu"),
      menuBtn = document.querySelector(".menu__btn");

menuBtn.addEventListener("click", function(){
    menu.classList.toggle("menu--open");
    menuBtn.classList.toggle("btn--ouvert");

});



//var controlBtn = document.getElementById('player--btn');
var controlBtn = document.querySelector(".play"),
      track = document.querySelector(".track");

function playPause() {
    if (track.paused) {
        track.play();
        controlBtn.classList.toggle("pause")
    } else { 
        track.pause();
        controlBtn.classList.toggle("pause")
    }
}

controlBtn.addEventListener("click", playPause);
track.addEventListener("ended", function() {
    controlBtn.classList.toggle(".play")
});