type WatermarkOptions = {
  /** 水印渲染的模式, 默认 "canvas" */
  mode?: "canvas" | "svg";
  /** 需要渲染水印的元素，默认 document.body */
  container?: Element;
  /** 监听水印元素是否被篡改，被修改或者删除等操作，则重新渲染水印，默认 true */
  watch?: boolean;
  /** 水印信息，默认 "敏感信息请勿泄漏" */
  text?: string;
  /** 水印 x 轴偏移量，用于微调水印位置，默认 0 */
  x?: number;
  /** 水印 y 轴偏移量，用于微调水印位置，默认 50 */
  y?: number;
  /** 水印图片的宽度，默认 150 */
  width?: number;
  /** 水印图片的高度，默认 100  */
  height?: number;
  /** 水印字体颜色，默认 "#000" */
  color?: string;
  /** 水印字体大小，默认 12 */
  fontSize?: number;
  /** 水印字体样式，可选值和 CSS font-style 相同，默认 "normal" */
  fontStyle?: string;
  /** 水印字体，默认 "sans-serif" */
  fontFamily?: string;
  /** 水印透明度，默认 0.15 */
  alpha?: number;
  /** 水印的倾斜角度，顺时针方向角度增加，以9点钟方向为0度，默认 -15 */
  deg?: number;
  /** 是否开启调试模式，默认 false */
  debug?: boolean;
};

export class Watermark {
  constructor(options?: WatermarkOptions);
  render(options?: WatermarkOptions): void;
  destroy(): void;
}

export default Watermark;
