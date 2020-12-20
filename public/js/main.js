import getRandomInt from "../js/Random.js";
import Cursor from "../js/Cursor.js"


const mainCanvas = document.querySelector('#mainCanvas')
const ctx = mainCanvas.getContext('2d')
const terminalGreen = {r: 51, g: 255, b: 0, a: 255}




//Flashing Cursor
let cursor = new Cursor(ctx, 10, 20, terminalGreen)
cursor.animate(0, 0)





