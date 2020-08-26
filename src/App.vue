<template>
  <div id="app">
    <div style="width: 50%">
      <VueImgPattern
        position="bottomLeft"
        margin="50"
        bg-size="40"
        dot-size="3"
        color1="#504D2E"
        color2="#B4D455"
      >
        <img
          src="https://images.unsplash.com/photo-1529426944611-e8342e2e91c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
          alt=""
        />
      </VueImgPattern>
    </div>
  </div>
</template>

<script>
import VueImgPattern from './VueImgPattern.vue';

export default {
  name: 'App',
  components: {
    VueImgPattern
  }
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

img {
  width: auto;
  height: auto;
  max-width: 100%;
  // clip-path: polygon(0 0, 0% 10%, 10% 10%);
}
</style>
