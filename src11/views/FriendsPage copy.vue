<template>
  <div class="friend">
    <h2 class="fnd-head">{{ friendsnum }} frineds</h2>
    <div class="frd-srch">
      <input v-model="text" placeholder="Search friend" class="search-frd" />
    </div>
    <ul class="ul-cont">
      <div v-for="(search, index) in search" :key="index">
        <li class="li-cont">
          <div class="frd-list">
            <h4 class="h-cont">
              <img
                class="srch-img"
                :src="require(`@/assets/${search.imgname}`)"
              />
              {{ search.user }}
            </h4>
            <div>
              <button class="addbtn">Add</button>
              <button class="blkbtn">Block</button>
            </div>
          </div>
        </li>
      </div>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

interface Search {
  user: string;
  imgname: string;
}

export default defineComponent({
  data() {
    return {
      friendsnum: 5,
      search: [
        {
          user: "Player A",
          imgname: "head.svg",
        },
        {
          user: "Player B",
          imgname: "chat.svg",
        },
      ] as Search[],
    };
  },
});
</script>

<style>
.friend {
  background: #24272c;
  margin: 20px;
  padding: 20px;
  border-radius: 5px;
  width: 100%;
  height: 100%;
  color: white;
}

.search-frd {
  width: 60%;
  height: 2rem;
  border: none;
  border-radius: 20px;
  padding-left: 15px;
}
.search:focus {
  border: none;
  outline: none;
}
.frd-srch {
  display: flex;
  padding-left: 50px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 10px;
  margin: 0;
  margin-bottom: 5px;
  background: #34373d;
}

.frd-list {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #34373d;
  margin: 0;
  padding-top: 0;
  padding-bottom: 0;
  padding-right: 10px;
  padding-left: 10px;
}
.ul-cont {
  margin: 0;
  padding: 0;
  border-radius: 10px;
}

.li-cont {
  list-style-type: none;
  padding: 0;
  margin: 0;
}
.h-cont {
  padding-left: 30px;
  margin: 10px;
  border-radius: 10px;
}
.srch-img {
  width: 30px;
  border-radius: 50%;
  padding: 0;
  margin: 0;
}

.addbtn,
.blkbtn {
  font-size: 0.8rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  border-radius: 5px;
  margin-left: 10px;
  cursor: pointer;
  color: white;
  background: #697692;
  border: none;
}
.addbtn:hover,
.blkbtn:hover {
  background: #7c8392;
  color: #d9d9da;
}
</style>
