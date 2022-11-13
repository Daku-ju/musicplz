
//player music
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
