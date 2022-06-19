

class ActualLevel {
    constructor() {
        this.nextLevel = 1;
    }

    skipToNextLevel() {
        this.nextLevel += 1;
    }
    resetLevelToStart() {
        this.nextLevel = 1;
    }
}

export const actuallevel = new ActualLevel();