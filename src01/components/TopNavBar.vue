<template>
  <nav class="top-nav-bar">
    <div class="logo"><router-link to="/">PING PONG</router-link></div>
    <div class="user-name">user name</div>
    <div class="userimg">
      <router-link to="/about"
        ><img src="@/assets/friends.svg" alt="About"
      /></router-link>
    </div>
  </nav>
</template>

<style scoped>
.top-nav-bar {
  background: #212327;
  color: #fff;
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
}
</style>
