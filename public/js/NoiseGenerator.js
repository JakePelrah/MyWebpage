import getRandomInt from "../js/Random.js";

/**
 * NoiseGenerator -
 */
class NoiseGenerator {
    red = 0
    green = 0
    blue = 0
    alpha = 0
    imageData

    constructor(imageData) {
        this.imageData = imageData
    }

    randomAlpha(){
        for (let i = 0; i < this.imageData.data.length; i += 4) {
            this.imageData.data[i + 1] = 22
            this.imageData.data[i + 3] = getRandomInt(0, 255)
        }
        return this.imageData
    }
}


export default NoiseGenerator