import { devicePixelRatio } from '../utils'

export default class CanvasMark {
  constructor(options = {}) {
    this.options = options
    this.dpr = devicePixelRatio()
    this.canvas = this.initCnt(options)
  }

  initCnt = (options) => {
    const { width, height } = options
    const canvas = document.createElement('canvas')
    // 防止 Retina 等高清屏水印渲染模糊；
    canvas.width = width * this.dpr
    canvas.height = height * this.dpr
    canvas.style.width = `${width}px`
    canvas.style.height = `${height}px`
    return canvas
  }

  debugRender = (ctx) => {
    /* eslint-disable no-console */
    console.log('dpr', this.dpr)

    ctx.beginPath()
    ctx.rect(0, 0, this.canvas.width, this.canvas.height)
    ctx.lineWidth = 1
    ctx.strokeStyle = 'red'
    ctx.stroke()
    document.body.appendChild(this.canvas)
  }

  render = () => {
    const {
      text,
      x,
      y,
      width,
      height,
      deg,
      alpha,
      fontSize,
      fontFamily,
      fontStyle,
      color,
    } = this.options
    const ctx = this.canvas.getContext('2d')
    ctx.clearRect(0, 0, width, height)

    if (this.options.debug === true) {
      this.debugRender(ctx)
    }

    ctx.font = `${fontStyle} ${fontSize}px ${fontFamily}`
    ctx.fillStyle = color
    ctx.globalAlpha = alpha
    ctx.scale(this.dpr, this.dpr)
    ctx.translate(x, y)
    ctx.rotate(Math.PI * deg / 180)
    ctx.translate(-x, -y + fontSize)
    ctx.fillText(text, x, y)
    return this.canvas.toDataURL()
  }
}
