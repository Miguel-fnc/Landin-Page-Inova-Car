const track = document.querySelector(".carousel-track");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const images = document.querySelectorAll(".carousel-track img");

let currentIndex = 0;
const imageWidth = 50;

function moverCarrusel(){

    track.style.transform = `translateX(-${currentIndex * imageWidth}rem)`;
}

next.addEventListener("click", () => {
    currentIndex++;
    moverCarrusel();
    if (currentIndex >= images.length){
        currentIndex = 0;
        moverCarrusel();
    }
});

prev.addEventListener("click", () => {
    if (currentIndex === 0){
        currentIndex = images.length;
        moverCarrusel();
    }
    currentIndex--;
    moverCarrusel();
});

setInterval(() => {

    currentIndex++;

    if(currentIndex >= images.length){
        currentIndex = 0;
    }

    moverCarrusel();

},5000);