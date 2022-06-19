import { intro, timeInfo } from "./Intro.esm.js";
import { frog } from "./Frog.esm.js";
import { actuallevel } from "./ActualLevel.esm.js";


const ROAD_LEFT = "road-left";
const ROAD_RIGHT = "road-right";
const RIVER_LEFT = "river-left";
const RIVER_RIGHT = "river-right";


class Traffic {
    constructor() {
        this.traffic = null;
        this.collapseInterval = null;
        this.timeInterval = null;
        this.intervalTimeOfTraffic = 1000;
    }

    startMovement() {
        if (actuallevel.nextLevel === 1 || actuallevel.nextLevel === 2) {
            this.intervalTimeOfTraffic = 1000;
        } else if (actuallevel.nextLevel === 3 || actuallevel.nextLevel === 4) {
            this.intervalTimeOfTraffic = 900;
        } else if (actuallevel.nextLevel === 5 || actuallevel.nextLevel === 6) {
            this.intervalTimeOfTraffic = 800;
        } else if (actuallevel.nextLevel === 7) {
            this.intervalTimeOfTraffic = 600;
        } else {
            this.intervalTimeOfTraffic = 500;
        }

        this.timeInterval = setInterval(() => {

            intro.time -= 1;

            timeInfo.innerText = `Czas: ${intro.time} sekund`;

        }, 1000);

        this.collapseInterval = setInterval(() => {
            frog.loseOrWin();

        }, 50)

        this.traffic = setInterval(() => {

            const roadLeft = document.querySelectorAll(`.${ROAD_LEFT}`);
            const roadRight = document.querySelectorAll(`.${ROAD_RIGHT}`);

            const riverLeft = document.querySelectorAll(`.${RIVER_LEFT}`);
            const riverRight = document.querySelectorAll(`.${RIVER_RIGHT}`);



            roadLeft.forEach((road) => {
                if (road.classList.contains("c1")) {
                    road.classList.remove("c1");
                    road.classList.add("c2");
                }
                else if (road.classList.contains("c2")) {
                    road.classList.remove("c2");
                    road.classList.add("c3")
                }
                else if (road.classList.contains("c3")) {
                    road.classList.remove("c3");
                    road.classList.add("c4")
                }
                else if (road.classList.contains("c4")) {
                    road.classList.remove("c4");
                    road.classList.add("c1")
                }
            })
            roadRight.forEach((road) => {
                if (road.classList.contains("c1")) {
                    road.classList.remove("c1");
                    road.classList.add("c2");
                }
                else if (road.classList.contains("c2")) {
                    road.classList.remove("c2");
                    road.classList.add("c3")
                }
                else if (road.classList.contains("c3")) {
                    road.classList.remove("c3");
                    road.classList.add("c4")
                }
                else if (road.classList.contains("c4")) {
                    road.classList.remove("c4");
                    road.classList.add("c1")
                }
            })

            riverLeft.forEach((river) => {
                if (river.classList.contains("d1")) {
                    river.classList.remove("d1");
                    river.classList.add("d2");
                }
                else if (river.classList.contains("d2")) {
                    river.classList.remove("d2");
                    river.classList.add("d3")
                }
                else if (river.classList.contains("d3")) {
                    river.classList.remove("d3");
                    river.classList.add("d4")
                }
                else if (river.classList.contains("d4")) {
                    river.classList.remove("d4");
                    river.classList.add("d1")
                }
            })
            riverRight.forEach((river) => {
                if (river.classList.contains("d1")) {
                    river.classList.remove("d1");
                    river.classList.add("d2");
                }
                else if (river.classList.contains("d2")) {
                    river.classList.remove("d2");
                    river.classList.add("d3")
                }
                else if (river.classList.contains("d3")) {
                    river.classList.remove("d3");
                    river.classList.add("d4")
                }
                else if (river.classList.contains("d4")) {
                    river.classList.remove("d4");
                    river.classList.add("d1")
                }
            })


        }, this.intervalTimeOfTraffic)

    }

}

export const traffic = new Traffic();