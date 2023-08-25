<template>
  <div class="prof-com">
    <div class="up">
      <div class="left">
        <div class="left-prof">
          <img class="prof-img" src="@/assets/head.svg" />
        </div>
        <div class="left-usr">
          <p class="usrname">Yonas Yohannes</p>
        </div>
      </div>
      <div class="right">
        <h3>Player Stat</h3>
        <div class="stat">
          <div class="s-left">Wins</div>
          <div class="s-right">12</div>
        </div>
        <div class="stat">
          <div class="s-left">Loses</div>
          <div class="s-right">5</div>
        </div>
        <div class="stat">
          <div class="s-left">Draws</div>
          <div class="s-right">2</div>
        </div>
        <div class="stat">
          <div class="s-left">Rank</div>
          <div class="s-right">5</div>
        </div>
      </div>
    </div>
    <div class="bottom">
      <h2>Match History</h2>
      <ul class="history">
        <li v-for="(match, index) in match" :key="index">
          {{ match.date }} - Opponent: {{ match.opponent }} - Result:
          {{ match.result }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfilePage",
  data() {
    return {
      match: [
        { date: "2023-08-15", opponent: "Player A", result: "Win" },
        { date: "2023-08-10", opponent: "Player B", result: "Loss" },
        { date: "2023-08-05", opponent: "Player C", result: "Draw" },
      ],
    };
  },
};
</script>

<style>
.prof-com {
  /* display: flex; */
  color: white;
  background-color: #24272c;
  margin: 20px;
  padding: 20px;
  border-radius: 5px;
}
.up {
  display: flex;
  align-content: center;
  justify-content: space-between;
}
.left {
  display: flex;
  background: #34373d;
  border-radius: 5px;
  padding: 10px;
  width: 45%;
}
.right {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #34373d;
  width: 45%;
  border-radius: 5px;
  padding: 10px;
  text-align: center;
}
.stat {
  display: flex;
  align-items: center;
  background: #5e6367;
  justify-content: space-between;
  margin-bottom: 5px;
  padding-left: 50px;
  padding-right: 50px;
  padding-bottom: 10px;
  padding-top: 5px;
  border-radius: 5px;
}
.bottom {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: #34373d;
  margin-top: 10px;
  border-radius: 5px;
  padding: 10px;
}
.history {
  list-style-type: none;
  padding: 0;
  width: 80%;
  text-align: center;
}
.history li {
  background: #5e6367;
  padding: 10px;
  margin: 5px;
  border-radius: 5px;
}
.prof-img {
  width: 100px;
  border-radius: 50%;
}
.usrname {
  margin-top: 45px;
  margin-left: 20px;
}
</style>
