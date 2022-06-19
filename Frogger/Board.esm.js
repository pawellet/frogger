export const ENDING_PLACE_CLASS = "ending-place";


import { actuallevel } from "./ActualLevel.esm.js";
import { game } from "./Game.esm.js";
const ROAD_CLASS = "road";
const ROAD_LEFT = "road-left";
const ROAD_RIGHT = "road-right";

const RIVER = "river";
const RIVER_LEFT = "river-left";
const RIVER_RIGHT = "river-right";

const START = "start";


class Board {
    constructor() {
        this.gameWrapper = document.querySelector(".grid");

    }


    createGameBoard() {
        if (actuallevel.nextLevel === 1) {
            console.log(actuallevel.nextLevel);


            for (let i = 0; i < 81; i++) {
                const div = document.createElement('div');

                if (i === 4) {
                    div.classList.add(ENDING_PLACE_CLASS);
                }
                //Create road
                if (i >= 18 && i < 36) {
                    div.classList.add(ROAD_CLASS);
                }
                if (i >= 18 && i < 27) {
                    div.classList.add(ROAD_LEFT);
                }
                if (i >= 27 && i < 36) {
                    div.classList.add(ROAD_RIGHT);
                }
                //Create river
                if (i >= 45 && i < 63) {
                    div.classList.add(RIVER);
                }
                if (i >= 45 && i < 54) {
                    div.classList.add(RIVER_LEFT);
                }
                if (i >= 54 && i < 63) {
                    div.classList.add(RIVER_RIGHT);
                }
                if (i === 76) {
                    div.classList.add(START);
                }

                this.gameWrapper.append(div);

            }

            const roadElements = this.gameWrapper.querySelectorAll(".road");

            const roadCarNumbers = ["c1", "c4", "c3", "c2", "c1", "c4", "c3", "c2", "c1", "c1", "c2", "c3", "c4", "c1", "c2", "c3", "c4", "c1"];

            roadElements.forEach((road, index) => {
                road.classList.add(roadCarNumbers[index])
            })

            const riverElements = this.gameWrapper.querySelectorAll(".river");

            const riverDeskNumbers = ["d2", "d1", "d4", "d3", "d2", "d1", "d4", "d3", "d2", "d2", "d3", "d4", "d1", "d2", "d3", "d4", "d1", "d2"];

            riverElements.forEach((river, index) => {
                river.classList.add(riverDeskNumbers[index])
            })

            setTimeout(() => game.gameStart(), 8000);

        }
    }
}

export const board = new Board();