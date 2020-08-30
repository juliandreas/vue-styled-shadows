<template>
  <div>
    <h2 style="text-align: center">Inspiration</h2>

    <section>
      <div class="block">
        <VueStyledShadows position="bottomRight" color2="#fff" reverse>
          <img src="./house.jpg" alt="House" />
        </VueStyledShadows>
      </div>

      <div class="block">
        <pre><code>{{ example1 }}</code></pre>
      </div>
    </section>

    <section>
      <div class="block">
        <pre><code>{{ example2 }}</code></pre>
      </div>

      <div class="block">
        <VueStyledShadows type="diagonal" degree="90">
          <img src="./house.jpg" alt="House" />
        </VueStyledShadows>
      </div>
    </section>

    <section>
      <div class="block">
        <VueStyledShadows type="diagonal" position="bottomRight" degree="100" pattern-size="10">
          <img src="./house.jpg" alt="House" />
        </VueStyledShadows>
      </div>

      <div class="block">
        <pre><code>{{ example3 }}</code></pre>
      </div>
    </section>

    <section>
      <div class="block">
        <pre><code>{{ example4 }}</code></pre>
      </div>

      <div class="block">
        <VueStyledShadows
          position="bottomRight"
          margin="0"
          pattern-size="1"
          color1="#fff"
          color2="#fff"
          reverse
        >
          <img src="./house.jpg" alt="House" />
        </VueStyledShadows>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      example1: `<VueStyledShadows position="bottomRight" color2="#fff" reverse>
  <img src="./house.jpg" alt="House" />
</VueStyledShadows>`,
      example2: `<VueStyledShadows type="diagonal" degree="90">
  <img src="./house.jpg" alt="House" />
</VueStyledShadows>`,
      example3: `<VueStyledShadows type="diagonal" position="bottomRight" degree="100" patternSize="10">
  <img src="./house.jpg" alt="House" />
</VueStyledShadows>`,
      example4: `<VueStyledShadows position="bottomRight" margin="0" patternSize="1" color1="#fff" color2="#fff" reverse>
  <img src="./house.jpg" alt="House" />
</VueStyledShadows>`
    };
  }
};
</script>

<style>
pre {
  white-space: pre-wrap;
  background: #2b2b2b;
  color: #fff;
  padding: 20px;
  border-radius: 4px;
}

code {
  display: flex;
  flex-wrap: wrap;
}
</style>
