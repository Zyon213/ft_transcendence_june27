<template>
  <div id="app">
    <HomePage />
  </div>
  <router-view />
</template>

<script>
import HomePage from "./views/Home-Page.vue";

export default {
  name: "App",
  components: {
    HomePage,
  },
};
</script>

<style>
body {
  font-family: "Arial", sans-serif;
  margin: 0;
  padding: 0;
}
</style>
