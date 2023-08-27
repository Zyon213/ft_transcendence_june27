<template>
  <div id="home">
    <TopNavBar />
    <div class="side-cont">
      <SideNavBar />
      <div class="prof-cont"></div>
    </div>
  </div>
  <router-view />
</template>

<script>
import TopNavBar from "@/components/TopNavBar.vue";
import SideNavBar from "@/components/SideNavBar.vue";

export default {
  name: "homePage",
  components: {
    TopNavBar,
    SideNavBar,
  },
};
</script>

<style>
body {
  font-family: "Arial", sans-serif;
  margin: 0;
  padding: 0;
}
.side-cont {
  display: flex;
}
.prof-cont {
  flex: 1;
  padding: 20px;
}
</style>
