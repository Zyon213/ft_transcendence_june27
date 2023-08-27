<template>
  <div id="home">
    <TopNavBar />
    <div class="side-cont">
      <SideNavBar />
      <div class="prof-cont">
        <LeaderPage />
      </div>
    </div>
  </div>
</template>

<script>
import TopNavBar from "../components/TopNavBar.vue";
import SideNavBar from "../components/SideNavBar.vue";
import LeaderPage from "../components/LeaderPage.vue";

export default {
  name: "LeaderPage",
  components: {
    TopNavBar,
    SideNavBar,
    LeaderPage,
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
