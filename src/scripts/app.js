"use strict";

const btnPrev = document.querySelector(".slider__btn--prev"),
      btnNext = document.querySelector(".slider__btn--next");

btnNext.addEventListener("click", next);

btnPrev.addEventListener("click", prev);

//touche clavier
document.addEventListener("keydown", function(e){
    if(e.code == "ArrowLeft"){
        prev();
    }
    else if(e.code == "ArrowRight"){
        next();
    }
})

//hammer
const slider = document.querySelector(".slider"),
    hammerSlider = new Hammer(slider);
    hammerSlider.on("swipeleft", next);
    hammerSlider.on("swiperight", prev);

function next(){

    let elShow = document.querySelector(".slider__el--show"),
        elNext = elShow.nextElementSibling;
    
    elShow.classList.remove("slider__el--show")

    if(elNext){
        elNext.classList.add("slider__el--show");
    }
    else{
        let elFirst = elShow.parentNode.firstElementChild;
        elFirst.classList.add("slider__el--show");
    }

}

function prev(){

    let elShow = document.querySelector(".slider__el--show"),
        elPrev = elShow.previousElementSibling;
    
    elShow.classList.remove("slider__el--show")

    if(elPrev){
        elPrev.classList.add("slider__el--show");
    }
    else{
        let elLast = elShow.parentNode.lastElementChild;
        elLast.classList.add("slider__el--show");
    }

}
