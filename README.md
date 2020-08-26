<h1 align="center">Vue Image Pattern</h1>
<p align="center">
Image background patterns for images. Supports SSR and IE11!
</p>

<p align="center">
<a href="https://www.npmjs.com/package/vue-toggles"><img src="https://img.shields.io/npm/v/vue-toggles.svg?style=flat-square"/> <img src="https://img.shields.io/npm/dt/vue-toggles.svg?style=flat-square"/></a> <a href="https://vuejs.org/"><img src="https://img.shields.io/badge/vue-2.x-brightgreen.svg?style=flat-square"/></a>
</p>

<p align="center">
<!-- <img src="./vue-toggles.jpg" alt="Vue Toggles Logo"/> -->
</p>

## Demo

<!-- - [Demo](https://vue-toggles.netlify.app/)
- [CodeSandbox](https://codesandbox.io/s/vue-toggles-mkkp4?file=/src/App.vue) -->

## Installation

```
npm i vue-img-pattern
```

### Import

```javascript
import Vue from 'vue';
import VueImgPattern from 'vue-img-pattern';

Vue.component('VueImgPattern', VueImgPattern);
```

## Usage

The toggle is very easy to use out of the box. The bare minimum for it to work is a `@click`-function and a `:value`-prop.

```html
<VueImgPattern @click="value = !value" :value="value" />
```

## Options

You can also add more props to customize things like color and width/height.

```html
<VueImgPattern
  @click="value = !value"
  :value="value"
  height="30"
  width="90"
  checkedText="On"
  uncheckedText="Off"
  checkedBg="#b4d455"
  uncheckedBg="lightgrey"
/>
```

## Properties

| Name        | Type             | Default       | Description                                       |
| ----------- | ---------------- | ------------- | ------------------------------------------------- |
| type        | String           | `dots`        | Initial state of the toggle button                |
| position    | String           | `bottomLeft`  | Toggle does not react on mouse or keyboard events |
| margin      | [String, Number] | `50`          | Reverse toggle to Right to Left                   |
| bgSize      | [String, Number] | `40`          | Height of the toggle in `px`                      |
| patternSize | [String, Number] | `3`           | Width of the toggle in `px`                       |
| color1      | String           | `#504D2E`     | Optional text when the toggle is checked          |
| color2      | String           | `transparent` | Optional text when the toggle is unchecked        |
| bgColor     | String           | `transparent` | Background color when the toggle is checked       |
| degree      | [String, Number] | `45`          | Background color when the toggle is unchecked     |
| reverse     | Boolean          | `false`       | Text color when the toggle is checked             |

### License

[MIT](http://opensource.org/licenses/MIT)
