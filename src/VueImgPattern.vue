<template>
  <div class="vue-img-pattern">
    <div :style="patternStyle" />
    <div :style="containerStyle">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    left: {
      type: Boolean,
      default: false
    },
    right: {
      type: Boolean,
      default: false
    },
    margin: {
      type: [Number, String],
      default: 60
    },
    bgColor: {
      type: String,
      default: 'transparent'
    },
    bgSize: {
      type: [Number, String],
      default: 40
    },
    dotSize: {
      type: [Number, String],
      default: 8
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
        'background-position': `${0}px ${0}px, ${this.bgSize / 2}px ${this.bgSize / 2}px`,
        'background-image': `radial-gradient(#212121 ${this.dotSize}px, transparent ${this.dotSize}px),
        radial-gradient(#e5d335 ${this.dotSize}px, transparent ${this.dotSize}px)`
      };

      if (this.left || (!this.left && !this.right)) {
        styles.marginRight = this.margin + 'px';
        styles.marginTop = this.margin + 'px';
      } else if (this.right) {
        styles.marginLeft = this.margin + 'px';
        styles.marginTop = this.margin + 'px';
      }

      return styles;
    },
    containerStyle() {
      const styles = {
        'z-index': '1',
        width: '100%'
      };

      if (this.left || (!this.left && !this.right)) {
        styles.marginLeft = this.margin + 'px';
        styles.marginBottom = this.margin + 'px';
      } else if (this.right) {
        styles.marginRight = this.margin + 'px';
        styles.marginBottom = this.margin + 'px';
      }

      return styles;
    }
  }
};
</script>

<style scoped>
.vue-img-pattern {
  position: relative;
  display: flex;
}
</style>
