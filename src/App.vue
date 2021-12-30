<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  data() {
    return {
    }
  },
  watch:{
  },
 mounted() {
  const s = document.createElement('script');
  s.type = 'text/javascript';
  s.src = 'https://maofun.com/wp-content/themes/Origami/js/mouse.js?ver=5.3.2';
  document.body.appendChild(s);
 },
}

</script>
<style lang="less">

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
