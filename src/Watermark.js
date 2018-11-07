import SvgMark from './renders/SVGRender'
import CanvasMark from './renders/CanvasRender'

const defaultOptions = {
  mode: 'canvas',
  text: '敏感信息请勿泄漏',
  x: 0,
  y: 50,
  width: 150,
  height: 100,
  color: '#000',
  fontSize: 12,
  fontStyle: 'normal',
  fontFamily: 'sans-serif',
  alpha: 0.15,
  deg: -15,
}

export default class Watermark {
  constructor(options = {}) {
    this.options = { ...defaultOptions, ...options }
    this.wm = this.produce(this.options)
    this.wrapEl = this.containerInit()
  }

  produce = (options) => {
    const markMode = ['svg', 'canvas']
    if (markMode.indexOf(options.mode) === -1) {
      throw new Error(`No this mode: ${options.mode}, you could use 'svg' or 'canvas' only.`)
    }

    if (options.mode === 'svg') {
      return new SvgMark(options)
    }

    if (options.mode === 'canvas') {
      return new CanvasMark(options)
    }

    return null
  }

  containerInit = () => {
    const wrapEl = document.createElement('div')
    wrapEl.style.position = 'absolute'
    wrapEl.style.top = '0'
    wrapEl.style.bottom = '0'
    wrapEl.style.left = '0'
    wrapEl.style.right = '0'
    wrapEl.style.zIndex = '99999'
    wrapEl.style.pointerEvents = 'none'
    wrapEl.style.backgroundSize = `${this.options.width}px`
    return wrapEl
  }

  render = () => {
    const dataUrl = this.wm.render()
    this.wrapEl.style.backgroundImage = `url("${dataUrl}")`
    document.body.appendChild(this.wrapEl)
  }

  destroy = () => {
    this.wm = null
    if (this.wrapEl) {
      document.body.removeChild(this.wrapEl)
      this.wrapEl = null
    }
  }
}
