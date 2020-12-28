import Terminal from '../js/Terminal.js';
import NamedColor from '../js/NamedColor.js'

const canvasId = '#mainCanvas'
const width = 800
const height = 800
const regex = /^[\w\s\.~`!@#$%^&*\\|(){}\[\]+=,/?<>:;'"_-]$/
const termFont = '30px UbuntuMono'
const promptStr = 'guest@jakepelrah:~$'

const term = new Terminal(canvasId, width, height,
    termFont, NamedColor.yellow,
    promptStr, regex)

