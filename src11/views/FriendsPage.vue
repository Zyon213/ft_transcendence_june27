<template>
  <div class="friend">
    <h2 class="fnd-head">{{ filteredSearch.length }} friends</h2>
    <div class="frd-srch">
      <input v-model="text" placeholder="Search friend" class="search-frd" />
    </div>
    <ul class="ul-cont">
      <div v-for="(result, index) in filteredSearch" :key="index">
        <li class="li-cont">
          <div class="frd-list">
            <h4 class="h-cont">
              <img
                class="srch-img"
                :src="require(`@/assets/${result.imgname}`)"
              />
              {{ result.user }}
            </h4>
            <div>
              <button class="addbtn">Add</button>
              <button class="blkbtn">Block</button>
            </div>
          </div>
        </li>
      </div>
    </ul>
    <ul class="frnd-cont">
      <div v-for="(result, index) in filteredSearch" :key="index">
        <li class="li-cont">
          <div class="frd-list">
            <h4 class="h-cont">
              <img
                class="srch-img"
                :src="require(`@/assets/${result.imgname}`)"
              />
              {{ result.user }}
            </h4>
            <div class="opt-menu">
				<img src="@/assets/option.svg" alt="option button" class="opt-btn"/>
			</div>
          </div>
        </li>
      </div>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

interface SearchItem {
  user: string;
  imgname: string;
}

export default defineComponent({

  data() {
    return {
      search: [
        {
          user: "Player A",
          imgname: "head.svg",
        },
        {
          user: "Player B",
          imgname: "chat.svg",
        },
        {
          user: "five one",
          imgname: "head.svg",
        },
        {
          user: "size numer",
          imgname: "chat.svg",
        },
      ] as SearchItem[],
      text: "" as string,
    };
  },
  computed: {
    filteredSearch(): SearchItem[] {
      return this.search.filter((item) =>
        item.user.toLowerCase().includes(this.text.toLowerCase())
      );
    },
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
.search-frd:focus {
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
.frnd-cont {
  margin-top: 20px;
  /* margin: 100px; */
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
.usr-avail {
  width: 1rem;
  height: 1rem;
  margin-top: 3rem;
  margin-left: 0.5rem;
  border-radius: 50%;
  border-style: groove;
  background: green;
}
.usr-not-avail {
  width: 1rem;
  height: 1rem;
  margin-top: 3rem;
  margin-left: 0.5rem;
  border-radius: 50%;
  border-style: groove;
  background: rgb(231, 8, 8);
}
.opt-menu {
  padding-right: 20px;

}
.opt-menu img{
	width: 35px;
}
</style>
