let overworld = document.getElementById("overworldAudio");
let cave = document.getElementById("caveAudio");
let load = document.getElementById("loadAudio");
let block = document.getElementById("blockAudio");
const playMusic = (whatTheme) => {
    switch (whatTheme) {
        case 0:
            cave.pause();
            overworld.pause();
            break;
        case 1:
            cave.pause();
            overworld.play();
            break;
        case 2:
            overworld.pause();
            cave.play();
            break;
        default:
            break;
    }
}