import { actuallevel } from "./ActualLevel.esm.js";
import { game } from "./Game.esm.js";
import { traffic } from "./Traffic.esm.js";

export const finalInfo = document.querySelector(".finalInfo");
export const timeInfo = document.querySelector(".time");
export const levelInfo = document.querySelector(".level");



class Intro {
    constructor() {
        this.time = 9;
        this.restartBtn = document.querySelector(".finalInfo .restartBtn");;
    }

    gameIntroduction() {
        finalInfo.style.display = "flex";
        finalInfo.style.fontSize = "22px";
        finalInfo.querySelector("span").innerText = `Przejdź po brązowych kładkach przez rzekę, a później unikaj czerwonych samochodów na jezdni. Na bezpieczne dotarcie do punktu końcowego masz ${this.time} sekund`
        this.restartBtn.style.display = "none";


    }
    hideIntro() {
        finalInfo.style.display = "none";
        this.time = 10 - actuallevel.nextLevel;
        timeInfo.innerText = `Czas: ${this.time} sekund`;
        levelInfo.innerText = `Poziom: ${actuallevel.nextLevel}`;

    }

    youLoose() {
        clearInterval(traffic.timeInterval);

        actuallevel.resetLevelToStart();
        finalInfo.style.display = "flex";
        finalInfo.style.fontSize = "50px";
        finalInfo.querySelector("span").textContent = "Niestety przegrałeś";
        game.restartGame();


    }
    youWin() {
        clearInterval(traffic.timeInterval);

        actuallevel.skipToNextLevel();
        finalInfo.style.display = "flex";
        finalInfo.style.fontSize = "50px";
        finalInfo.querySelector("span").textContent = "Brawisssimo wygrałeś!!!";
        game.restartGame();

    }
}

export const intro = new Intro();