<h1 align="center">Vue Styled Shadows</h1>
<p align="center">
Styled shadows for images. Supports SSR and IE11!
</p>

<p align="center">
<a href="https://www.npmjs.com/package/vue-styled-shadows"><img src="https://img.shields.io/npm/v/vue-styled-shadows.svg?style=flat-square"/> <img src="https://img.shields.io/npm/dt/vue-styled-shadows.svg?style=flat-square"/></a> <a href="https://vuejs.org/"><img src="https://img.shields.io/badge/vue-2.x-brightgreen.svg?style=flat-square"/></a>
</p>

<!-- <p align="center">
<img src="./vue-toggles.jpg" alt="Vue Toggles Logo"/>
</p> -->

## Demo

- [Demo](https://vue-styled-shadows.netlify.app/)
  <!-- - [CodeSandbox](https://codesandbox.io/s/vue-toggles-mkkp4?file=/src/App.vue) -->

## Installation

```
npm i vue-styled-shadows
```

### Import

```javascript
import Vue from 'vue';
import VueStyledShadows from 'vue-styled-shadows';

Vue.component('VueStyledShadows', VueStyledShadows);
```

## Usage

You can use the library without any props and it will use the default settings (see properties below).

```html
<VueStyledShadows>
  <img style="width: 100%;" />
</VueStyledShadows>
```

## Options

You can also add more props to customize things like type, color and size etc.

```html
<VueStyledShadows type="lines" position="bottomRight" margin="50" patternSize="3">
  <img style="width: 100%;" />
</VueStyledShadows>
```

## Properties

| Name        | Type             | Default       | Description                                                     |
| ----------- | ---------------- | ------------- | --------------------------------------------------------------- |
| type        | String           | `dots`        | Type of pattern [dots, lines, diagonal]                         |
| position    | String           | `bottomLeft`  | Position of shadow [bottomLeft, bottomRight, topLeft, topRight] |
| margin      | [String, Number] | `50`          | Margin between image and shadow                                 |
| bgSize      | [String, Number] | `40`          | Background size                                                 |
| patternSize | [String, Number] | `3`           | Pattern size                                                    |
| color1      | String           | `#504D2E`     | Main color of pattern                                           |
| color2      | String           | `transparent` | Secondary color of pattern (Only valid for dots and lines)      |
| bgColor     | String           | `transparent` | Background color                                                |
| degree      | [String, Number] | `45`          | Degree (Only valid for diagonal)                                |
| reverse     | Boolean          | `false`       | Reverse z-index between pattern and image                       |

### License

[MIT](http://opensource.org/licenses/MIT)
