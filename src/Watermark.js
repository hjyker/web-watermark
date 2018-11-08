import SvgMark from './renders/SVGRender'
import CanvasMark from './renders/CanvasRender'
import { watcher } from './utils'

const defaultOptions = {
  mode: 'canvas',
  container: document.body,
  text: '敏感信息请勿泄漏',
  watch: true,
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
    this.wm = null
    this.wrapEl = null
    this.watcher = null
  }

  $wmInit = () => {
    const { mode } = this.options
    const markMode = ['svg', 'canvas']
    if (markMode.indexOf(mode) === -1) {
      throw new Error(`No this mode: ${mode}, you could use 'svg' or 'canvas' only.`)
    }

    if (mode === 'svg') {
      return new SvgMark(this.options)
    }

    if (mode === 'canvas') {
      return new CanvasMark(this.options)
    }

    return null
  }

  $wmWrapInit = () => {
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

  render = (opts = null) => {
    this.destroy()

    if (Object.prototype.toString.call(opts) === '[object Object]') {
      this.options = { ...this.options, ...opts }
    }

    this.wm = this.$wmInit()
    this.wrapEl = this.$wmWrapInit()

    const dataUrl = this.wm.render()
    this.wrapEl.style.backgroundImage = `url("${dataUrl}")`

    const { container, watch } = this.options
    container.appendChild(this.wrapEl)

    if (watch) {
      this.watcher = watcher(this.wrapEl, container, () => {
        this.render(this.options)
      })
    }
  }

  destroy = () => {
    this.wm = null

    if (this.watcher) {
      this.watcher.clean()
    }

    if (this.wrapEl) {
      this.wrapEl.remove()
      this.wrapEl = null
    }
  }
}
