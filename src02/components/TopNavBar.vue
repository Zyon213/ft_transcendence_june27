<template>
  <nav class="top-nav-bar">
    <div class="logo"><router-link to="/">PING PONG</router-link></div>
    <div class="user-name">username</div>
    <div class="userimg">
      <router-link to="/about"
        ><img src="@/assets/friends.svg" alt="About" />
      </router-link>
      <div>
        <DropDown
          :options="dropdownOptions"
          @option-selected="handleOptionSelected"
        />
        <p>Selected option: {{ selectedOption }}</p>
      </div>
    </div>
  </nav>
</template>

<script>
import DropDown from "@/components/DropDown.vue";

export default {
  name: "DropDown",
  components: { DropDown },
  data() {
    return {
      dropdownOptions: ["Option 1", "Option 2", "Option 3", "Option 4"],
      selectedOption: "",
    };
  },
  methods: {
    handleOptionSelected(option) {
      this.selectedOption = option;
    },
  },
};
</script>
<style scoped>
.top-nav-bar {
  background: #212327;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
}

.logo {
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  width: 70%;
}
a {
  color: white;
  text-decoration: none;
}
img {
  width: 40px;
}
.user-name {
}
.usrimg {
  width: 5%;
}
a:hover {
  color: gray;
}
.main-container {
  display: flex;
}
</style>
