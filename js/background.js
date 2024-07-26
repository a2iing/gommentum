const images = [
    "bg_00.png",
    "bg_01.png",
    "bg_02.png",
    "bg_03.png",
    "bg_04.png",
    "bg_05.png",
    "bg_06.png"
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const container = document.querySelector(".container");

container.style.background = `url(images/${chosenImage}) center / cover`;