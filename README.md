<div align="center">
  <h1>web-watermark</h1>
  <p>网页水印</p>
</div>

<h2 align="center">Install</h2>

```bash
npm install web-watermark
or
yarn add web-watermark
```

<h2 align="center">Featrue</h2>

1. 支持 Canvas 或 SVG 渲染水印；
2. Canvas 支持 Retina 高清显示；

<h2 align="center">Usage</h2>

```javascript
import Watermark from 'web-watermark'

new Watermark({
  mode: 'canvas', // default
  container: document.body, // default
  watch: true, // default
  text: '敏感信息请勿泄漏', // default
  x: 0, // default
  y: 50, // default
  width: 150, // default
  height: 100, // default
  color: '#000', // default
  fontSize: 12, // default
  fontStyle: 'normal', // default
  fontFamily: 'sans-serif', // default
  alpha: 0.15, // default
  deg: -15, // default
}).render()
```

<h2 align="center">Config</h2>

| 参数 | 取值 | 说明 |
| :----: | :----: | :---- |
| mode       | String: 'canvas'           | 水印渲染的模式，可选 'canvas' 或 'svg' 渲染          |
| container  | Node: document.body        | 需要渲染水印的元素，默认为 body，即整个页面渲染         |
| watch      | Boolean: true              | 监听水印元素是否被篡改，被修改或者删除等操作，则重新渲染水印  |
| text       | String: '敏感信息请勿泄漏'    | 水印信息                                             |
| x          | Number: 0                  | 水印 x 轴偏移量，用于微调水印位置                    |
| y          | Number: 50                 | 水印 y 轴偏移量，用于微调水印位置                    |
| width      | Number: 150                | 水印图片的宽度                                       |
| height     | Number: 100                | 水印图片的高度                                       |
| color      | String: '#000'             | 水印字体颜色                                         |
| fontSize   | Number: 12                 | 水印字体大小                                         |
| fontFamily | String: 'sans-serif''      | 水印字体                                             |
| fontStyle  | String: 'normal'           | 水印字体样式，可选值和 CSS font-style 相同           |
| alpha      | Number: 0.15               | 水印透明度                                           |
| deg        | Number: -15                | 水印的倾斜角度，顺时针方向角度增加，以9点钟方向为0度 |
| debugger   | Boolean: false             | 是否开启调试模式 |

<h2 align="center">Methods</h2>

| 实例方法 | 参数 | 说明 |
| :----: | :----: | :---- |
| render(options) | 配置参数，如果传递了配置参数，会合并最近的配置 | 渲染水印，调用此函数才会生成水印 |
| destroy() | - | 销毁水印 |

