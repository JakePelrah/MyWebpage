import Terminal from '../js/Terminal.js';
import NamedColor from '../js/NamedColor.js'

//Use fonts divisible by two to prevent artifacts
const canvasId = '#mainCanvas'
const width = 600
const height = 600
const regex = /^[\w\s\.~`!@#$%^&*\\|(){}\[\]+=,/?<>:;'"_-]$/
const termFont = '26px UbuntuMono'
const promptStr = 'guest@jakepelrah:~$'

const term = new Terminal(canvasId, width, height,
    termFont, NamedColor.yellow,
    promptStr, regex)

