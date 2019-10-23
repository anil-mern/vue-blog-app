<template>
  <div id="app">
    <blog-header></blog-header>
    <blog-view msg="Welcome...!"></blog-view>
    <blog-footer></blog-footer>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import BlogsView from "./components/BlogsView.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "app",
  components: {
    "blog-header": Header,
    "blog-view": BlogsView,
    "blog-footer": Footer
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
