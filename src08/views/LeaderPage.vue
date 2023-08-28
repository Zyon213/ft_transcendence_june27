<template>
  <div class="lead">
    <h2>Leader Board</h2>
    <ul class="lead-stat">
      <li v-for="(match, index) in match" :key="index">
        {{ match.date }} - Opponent: {{ match.opponent }} - Result:
        {{ match.result }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      match: [
        { date: "2023-08-15", opponent: "Player A", result: "Win" },
        { date: "2023-08-10", opponent: "Player B", result: "Loss" },
        { date: "2023-08-05", opponent: "Player C", result: "Draw" },
        { date: "2023-08-15", opponent: "Player A", result: "Win" },
        { date: "2023-08-10", opponent: "Player B", result: "Loss" },
        { date: "2023-08-05", opponent: "Player C", result: "Draw" },
      ],
    };
  },
};
</script>

<style>
.lead {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: #34373d;
  margin: 20px;
  padding: 20px;
  border-radius: 5px;
  width: 80%;
  height: 100%;
  color: white;
}
.lead-stat {
  list-style-type: none;
  padding: 0;
  width: 80%;
  text-align: center;
}
.lead-stat li {
  background: #5e6367;
  padding: 10px;
  margin: 5px;
  border-radius: 5px;
}
</style>
