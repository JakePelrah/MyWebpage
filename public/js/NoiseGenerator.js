import getRandomInt from "../js/Random.js";

/**
 * NoiseGenerator -
 */
class NoiseGenerator {
    imageData

    constructor(imageData) {
        this.imageData = imageData
    }

    randomAlpha() {
        for (let i = 0; i < this.imageData.data.length; i += 4) {
            this.imageData.data[i + 3] = getRandomInt(0, 255)
        }
        return this.imageData
    }
}


export default NoiseGenerator