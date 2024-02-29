let overworld = new Audio('audio/overworld.mp3');
let cave = new Audio('audio/cave.mp3');
overworld.play();
overworld.pause();
cave.play();
cave.pause();
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