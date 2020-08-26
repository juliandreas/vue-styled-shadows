<template>
  <div id="app">
    <section>
      <div class="block">
        <label for="type">Type (type)</label>
        <select id="type" v-model="type">
          <option value="dots">Dots (dots)</option>
          <option value="lines">Lines (lines)</option>
          <option value="diagonal">Diagonal (diagonal)</option>
        </select>

        <label for="position">Position (position)</label>
        <select id="position" v-model="position">
          <option value="bottomLeft">Bottom Left (bottomLeft)</option>
          <option value="bottomRight">Bottom Right (bottomRight)</option>
          <option value="topLeft">Top Left (topLeft)</option>
          <option value="topRight">Top Right (topRight)</option>
        </select>

        <label for="margin">Margin (margin)</label>
        <input id="margin" v-model="margin" type="number" />

        <label for="bgSize">Background Size (bgSize)</label>
        <input id="bgSize" v-model="bgSize" type="number" />

        <label for="patternSize">Pattern Size (patternSize)</label>
        <input id="patternSize" v-model="patternSize" type="number" />

        <label for="patternSize">Pattern Size (patternSize)</label>
        <input id="patternSize" v-model="patternSize" type="number" />

        <label for="color1">Color (color1)</label>
        <input id="color1" v-model="color1" type="color" />

        <label for="color2">Second Color (color2) [Only valid for dots and lines]</label>
        <input id="color2" v-model="color2" type="color" />

        <label for="bgColor">Background Color (bgColor)</label>
        <input id="bgColor" v-model="bgColor" type="color" />

        <label for="degree">Degree (degree) [Only valid for diagonal]</label>
        <input id="degree" v-model="degree" type="number" />

        <label for="reverse">Reverse (reverse)</label>
        <select id="reverse" v-model="reverse">
          <option :value="true">true</option>
          <option :value="false">false</option>
        </select>
      </div>

      <div class="block">
        <VueImgPattern
          :type="type"
          :position="position"
          :margin="margin"
          :bg-size="bgSize"
          :pattern-size="patternSize"
          :color1="color1"
          :color2="color2"
          :bg-color="bgColor"
          :degree="degree"
          :reverse="reverse"
        >
          <img
            src="https://images.unsplash.com/photo-1529426944611-e8342e2e91c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
            alt=""
          />
        </VueImgPattern>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    type: 'dots',
    position: 'bottomLeft',
    margin: '50',
    bgSize: '40',
    patternSize: '3',
    color1: '#504D2E',
    color2: '#504D2E',
    bgColor: 'transparent',
    degree: '45',
    reverse: false
  })
};
</script>

<style lang="scss">
body {
  min-height: 100vh;
  background: #faf9fd;
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #000;
  height: 100vh;
}

section {
  display: flex;

  .block {
    display: flex;
    flex-direction: column;
    width: 50%;
    padding: 50px;
  }
}

img {
  width: auto;
  height: auto;
  max-width: 100%;
  // clip-path: polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%);
}

/* .vue-img-pattern {
  clip-path: polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%);
} */
</style>
