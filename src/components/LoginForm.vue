<template>
  <div class="login">
    <div class="loginform">
      <div class="loginimg">
        <p class="info">ft_transcendence</p>
      </div>
      <div class="loginbtn">
        <button class="logbtn">LOGIN IN</button>
      </div>
    </div>
  </div>
</template>

<style>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
}
.loginform {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80vh;
  min-width: 700px;
  height: 70vh;
  box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
  border-radius: 5px 5px 5px 5px;
}
.loginbtn {
  background: #c4c8cf;
  width: 40%;
  height: 100%;
  display: flex;
  border-radius: 0px 5px 5px 0px;
}
.loginimg {
  background: #000000;
  width: 60%;
  height: 100%;
  display: flex;
  background-image: url("../assets/table.png");
  background-size: fill;
  background-position: center;
  border-radius: 5px 0px 0px 5px;
}

.logbtn {
  background: #697692;
  color: white;
  font-size: 1rem;
  border-radius: 4px;
  border: none;
  padding: 10px 40px 10px 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  cursor: pointer;
}
.info {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-style: bold;
  color: white;
  margin: 2rem;
  font-size: 1.1rem;
}
</style>
