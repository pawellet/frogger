export const FROG = "frog";

import { intro } from './Intro.esm.js';
import { board } from './Board.esm.js';
import { frog } from './Frog.esm.js';
import { traffic } from './Traffic.esm.js';

let restartBtn = document.querySelector(".restartBtn");

class Game {
    constructor() {
        intro.gameIntroduction();
        board.createGameBoard();

    }


    gameStart() {

        intro.hideIntro();
        frog.eventListener();
        traffic.startMovement();

    }

    restartGame() {
        restartBtn = document.querySelector(".restartBtn");
        restartBtn.style.display = "block";
        restartBtn.innerText = "zagraj ponownie"
        this.controller = new AbortController();


        restartBtn.addEventListener("click", this.restart, { signal: this.controller.signal });
    }
    restart() {
        restartBtn = document.querySelector(".restartBtn");
        this.controller = new AbortController();




        restartBtn.removeEventListener("click", this.restart, { signal: this.controller.abort() });

        game.gameStart();


    }


}


export const game = new Game();
