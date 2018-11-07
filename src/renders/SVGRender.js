export default class SvgMark {
  constructor(options = {}) {
    this.options = options
    this.svgStr = this.initCnt(options)
  }

  initCnt = (options) => {
    const {
      text,
      x,
      y,
      width,
      height,
      fontSize,
      fontFamily,
      color,
      deg,
      alpha,
    } = options

    const svg = `
      <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg" version="1.1">
        <text
          x="${x}"
          y="${y}"
          dy="${fontSize}"
          font-size="${fontSize}"
          font-weight="500"
          font-family="${fontFamily}"
          text-anchor="start"
          fill="${color}"
          fill-opacity="${alpha}"
          transform="rotate(${deg}, ${x}, ${y})"
        >${text}</text>
      </svg>
    `
    return svg
  }

  debugRender = () => {
    /* eslint-disable no-console */
    console.log(this.svgStr)
  }

  render = () => {
    // 防止中文不能被 btoa 转义
    if (this.options.debug === true) {
      this.debugRender()
    }
    const encodeSvg = unescape(encodeURIComponent(this.svgStr))
    return `data:image/svg+xml;base64,${btoa(encodeSvg)}`
  }
}
