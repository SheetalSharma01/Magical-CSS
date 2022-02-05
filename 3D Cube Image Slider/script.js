// console.log('Welcome to js page');


let cube = document.querySelector(".image-cube");
let btnNext = document.getElementById("next");
let btnPrev = document.getElementById("prev");

let pos = 0;

btnNext.addEventListener("click", () => {
    pos -= 98;
    cube.style.transform = `rotateY(${pos}deg)`;
});

btnPrev.addEventListener("click", () => {
    pos += 98;
    cube.style.transform = `rotateY(${pos}deg)`;
});