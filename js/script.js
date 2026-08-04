const track = document.querySelector(".carousel-track");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

let currentIndex = 0;
const imageWidth = 50;

function moverCarrusel(){

    track.style.transform = `translateX(-${currentIndex * imageWidth}rem)`;
}

next.addEventListener("click", () => {
    currentIndex++;
    moverCarrusel();
    if (currentIndex === 4){
        currentIndex = 0;
        moverCarrusel();
    }
});

prev.addEventListener("click", () => {
    if (currentIndex === 0){
        currentIndex = 4;
        moverCarrusel();
    }
    currentIndex--;
    moverCarrusel();
});