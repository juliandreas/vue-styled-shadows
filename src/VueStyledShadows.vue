<template>
  <div class="vue-styled-shadows">
    <div :style="patternStyle" />
    <div :style="containerStyle">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'dots'
    },
    position: {
      type: String,
      default: 'bottomLeft'
    },
    margin: {
      type: [Number, String],
      default: 50
    },
    bgSize: {
      type: [Number, String],
      default: 40
    },
    patternSize: {
      type: [Number, String],
      default: 3
    },
    color1: {
      type: String,
      default: '#504D2E'
    },
    color2: {
      type: String,
      default: 'transparent'
    },
    bgColor: {
      type: String,
      default: 'transparent'
    },
    degree: {
      type: [Number, String],
      default: '45'
    },
    reverse: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    patternStyle() {
      const styles = {
        position: 'absolute',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        'background-color': this.bgColor,
        'background-size': `${this.bgSize}px ${this.bgSize}px`,
        'background-position': `${0}px ${0}px, ${this.bgSize / 2}px ${this.bgSize / 2}px`
      };

      if (this.type === 'dots') {
        styles.backgroundImage = `radial-gradient(${this.color1} ${this.patternSize}px, transparent ${this.patternSize}px), radial-gradient(${this.color2} ${this.patternSize}px, transparent ${this.patternSize}px)`;
      } else if (this.type === 'lines') {
        styles.backgroundImage = `linear-gradient(${this.color1} ${this.patternSize}px, transparent ${this.patternSize}px), linear-gradient(${this.color2} ${this.patternSize}px, transparent ${this.patternSize}px)`;
      } else if (this.type === 'diagonal') {
        styles.backgroundImage = `repeating-linear-gradient(${this.degree}deg, ${this.color1} 0, ${this.color1} ${this.patternSize}px, transparent 0, transparent 50%)`;
      }

      if (this.position === 'bottomLeft') {
        styles.marginRight = this.margin + 'px';
        styles.marginTop = this.margin + 'px';
      } else if (this.position === 'bottomRight') {
        styles.marginLeft = this.margin + 'px';
        styles.marginTop = this.margin + 'px';
      } else if (this.position === 'topLeft') {
        styles.marginRight = this.margin + 'px';
        styles.marginBottom = this.margin + 'px';
      } else if (this.position === 'topRight') {
        styles.marginLeft = this.margin + 'px';
        styles.marginBottom = this.margin + 'px';
      }

      return styles;
    },
    containerStyle() {
      const styles = {
        width: '100%',
        height: '100%'
      };

      if (!this.reverse) {
        styles.zIndex = '1';
      }

      if (this.position === 'bottomLeft') {
        styles.marginLeft = this.margin + 'px';
        styles.marginBottom = this.margin + 'px';
      } else if (this.position === 'bottomRight') {
        styles.marginRight = this.margin + 'px';
        styles.marginBottom = this.margin + 'px';
      } else if (this.position === 'topLeft') {
        styles.marginLeft = this.margin + 'px';
        styles.marginTop = this.margin + 'px';
      } else if (this.position === 'topRight') {
        styles.marginRight = this.margin + 'px';
        styles.marginTop = this.margin + 'px';
      }

      return styles;
    }
  }
};
</script>

<style>
.vue-styled-shadows {
  display: flex;
  position: relative;
  overflow: hidden;
}

.vue-styled-shadows img {
  width: 100%;
}
</style>
