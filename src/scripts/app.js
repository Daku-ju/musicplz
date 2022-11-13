"use strict";

// Burger Menu

const menu = document.querySelector(".menu"),
      menuBtn = document.querySelector(".menu__btn");

menuBtn.addEventListener("click", function(){
    menu.classList.toggle("menu--open");
    menuBtn.classList.toggle("btn--ouvert");

});

//transition
const liens = document.querySelectorAll(".trans");

liens.forEach(pageTransition);

function pageTransition(lien){

    lien.addEventListener("click",function (e){

        let currentLink = this.href;
        let transition = this.getAttribute("data-transition");

        document.body.classList.add("animation--"+transition);

        document.body.addEventListener("animationend", function(){
            window.location = currentLink;
        });

        e.preventDefault();

    });
}