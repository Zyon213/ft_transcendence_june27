<template>
  <div id="home">
    <TopNavBar />
    <div class="side-cont">
      <SideNavBar />
      <div class="prof-cont">
        <ProfilePage />
      </div>
    </div>
  </div>
</template>

<script>
import TopNavBar from "../components/TopNavBar.vue";
import SideNavBar from "../components/SideNavBar.vue";
import ProfilePage from "../components/ProfilePage.vue";

export default {
  name: "homePage",
  components: {
    TopNavBar,
    SideNavBar,
    ProfilePage,
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
