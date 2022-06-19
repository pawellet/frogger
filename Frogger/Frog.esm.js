import { FROG } from "./Game.esm.js";
import { ENDING_PLACE_CLASS } from "./Board.esm.js";
import { intro } from "./Intro.esm.js";
import { traffic } from "./Traffic.esm.js";
import { game } from "./Game.esm.js";


const level = 9;
let currentIndex = 76;



class Frog {
    constructor() {
        this.allSquares = document.querySelectorAll(".grid div");
        this.controller = new AbortController();

    }


    eventListener() {
        currentIndex = 76;
        this.allSquares[currentIndex].classList.add(FROG);
        this.controller = new AbortController();


        window.addEventListener("keyup", (e) => this.createFrog(e), { signal: this.controller.signal });



    }


    createFrog = (e) => {

        this.allSquares[currentIndex].classList.remove(FROG);


        switch (e.keyCode) {
            case 37:
                if (currentIndex % level !== 0) {
                    currentIndex -= 1;
                }
                break
            case 39:
                if (currentIndex % level < level - 1) {
                    currentIndex += 1;
                }
                break
            case 38:
                if (currentIndex > level - 1) {
                    currentIndex -= level;
                }
                break
            case 40:
                if (currentIndex <= 71) {
                    currentIndex += level;
                }
                break
        }


        this.allSquares[currentIndex].classList.add(FROG);


    }

    loseOrWin() {

        if (this.allSquares[currentIndex].classList.contains("c1") || this.allSquares[currentIndex].classList.contains("c2") || this.allSquares[currentIndex].classList.contains("d3") || this.allSquares[currentIndex].classList.contains("d4") || intro.time == 0) {
            clearInterval(traffic.traffic);
            clearInterval(traffic.collapseInterval);

            this.allSquares[currentIndex].classList.remove(FROG);
            window.removeEventListener("keyup", (e) => this.createFrog(e), { signal: this.controller.abort() });

            intro.youLoose();


        } else if (this.allSquares[currentIndex].classList.contains(ENDING_PLACE_CLASS)) {
            clearInterval(traffic.traffic);
            clearInterval(traffic.collapseInterval);

            this.allSquares[currentIndex].classList.remove(FROG);
            window.removeEventListener("keyup", (e) => this.createFrog(e), { signal: this.controller.abort() })

            intro.youWin();

        }

    }


}

export const frog = new Frog();