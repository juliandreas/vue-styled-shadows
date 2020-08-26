<template>
  <div id="app">
    <div style="width: 50%">
      <VueImgPattern right margin="50" bg-color="#e53935" bg-size="100">
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
