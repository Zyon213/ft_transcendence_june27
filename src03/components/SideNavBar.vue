<template>
  <aside class="side-nav-bar">
    <ul class="side-nav-links">
      <li>
        <router-link to="/"
          ><img src="@/assets/leader.svg" alt="Home" /></router-link
        >
      </li>
      <li>
        <router-link to="/about"
          ><img src="@/assets/friends.svg" alt="About" /></router-link
        >
      </li>
      <li>
        <router-link to="/services"
          ><img src="@/assets/game.svg" alt="Services" />
          </router-link
        >
      </li>
      <li>
        <router-link to="/contact"
          ><img src="@/assets/chat.svg" alt="Contact" />
          </router-link
        >
      </li>
    </ul>
  </aside>
</template>

<style scoped>
.side-nav-bar {
  background-color: #34373D;
  color: #fff;
  width: 70px;
  height: 100vh;
  padding: 20px;
  margin-left: 0;
}

.side-nav-links {
  list-style: none;
  padding: 0;
}

.side-nav-links li {
  margin-bottom: 15px;
}

.side-nav-links li a {
  color: #fff;
  text-decoration: none;
}

.side-nav-links li a:hover {
  text-decoration: underline;
}
</style>
