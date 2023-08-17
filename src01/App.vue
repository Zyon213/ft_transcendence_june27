<template>
  <div id="app">
    <TopNavBar />
    <div class="main-container">
      <SideNavBar />
      <router-view />
    </div>
  </div>
</template>

<script>
import TopNavBar from "./components/TopNavBar.vue";
import SideNavBar from "./components/SideNavBar.vue";

export default {
  name: "App",
  components: {
    TopNavBar,
    SideNavBar,
  },
};
</script>

<style>

body {
  font-family: 'Arial', sans-serif;
  margin: 0;
  padding: 0;
}
.main-container {
  display: flex;
}
</style>
