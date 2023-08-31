<template>
  <div class="chat-cont">
    <div class="channel">
      <h2>Channel</h2>
      <div class="chan-cont">
        <h4 class="add-cont">Add</h4>
        <div class="chn-srch">
          <input
            v-model="text"
            placeholder="Search channel"
            class="search-chn"
          />
        </div>
        <!-- <div class="chan-list"> -->
          <ul class="chnul-cont">
            <div v-for="(result, index) in filteredSearch" :key="index">
              <li class="chnli-cont">
                <div class="chan-item">
					{{ result.channel }}
					<ChannelOption />
                </div>
              </li>
            </div>
          </ul>
        <!-- </div> -->
        <div>
          <button class="grpbtn">Group</button>
          <button class="dmbtn">DM</button>
        </div>
      </div>
    </div>
    <div class="chat">Chat</div>
    <div class="catagory">Category</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ChannelOption from "@/components/ChannelOption.vue";

interface ChannelList {
  channel: string;
}

export default defineComponent({
  components: {
    ChannelOption,
  },
  data() {
    return {
      channels: [
        {
          channel: "fruits",
        },
        {
          channel: "cars",
        },
        {
          channel: "plants",
        },
        {
          channel: "animals",
        },
      ] as ChannelList[],
	  text: "" as string,
      activeDropdownopt: null as number | null,
    };
  },
  computed: {
    filteredSearch(): ChannelList[] {
      return this.channels.filter((item) =>
        item.channel.toLowerCase().includes(this.text.toLowerCase())
      );
    },
  },
});
</script>

<style>
.chat-cont {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #24272c;
  color: white;
  margin: 20px;
  border-radius: 5px;
  padding: 10px;
  width: 100%;
  height: 100%;
}
.channel {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 25%;
  height: 100%;
  margin: 3px;
  /* background: #989898; */
}
.add-cont {
  display: flex;
  align-items: center;
  flex-direction: center;
  justify-content: center;
  background: #61656e;
  padding: 0;
  margin: 0;
  margin-bottom: 15px;
  width: 80%;

  padding: 10px;
}
.chan-cont {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
  margin-top: 20px;
  width: 100%;
  height: 100%;
  background: #34373d;
}
.search-chn {
  width: 85%;
  height: 1.5rem;
  border: none;
  border-radius: 5px;
  padding-left: 15px;
  margin-bottom: 10px;
}
.search-chn:focus {
  border: none;
  outline: none;
}
.chan-list {
  height: 250px;
}

.chat {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  font-size: 1.5rem;
  background: #34373d;
  margin: 3px;
  width: 80%;
}
.catagory {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  font-size: 1.5rem;
  background: #34373d;
  width: 20%;
  margin: 3px;
}

.grpbtn,
.dmbtn {
  font-size: 0.8rem;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  border-radius: 5px;
  margin-left: 10px;
  cursor: pointer;
  color: white;
  background: #697692;
  border: none;
}
.grpbtn:hover,
.dmbtn:hover {
  background: #7c8392;
  color: #d9d9da;
}


.dropdownopt {
  position: relative;
}

.dropdownopt a {
  cursor: pointer;
}

.dropdownopt-menu {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  list-style: none;
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 0;
  margin: 0;
}

.dropdownopt.active .dropdownopt-menu {
  display: block;
}

.dropdownopt-menu li {
  padding: 8px 16px;
  border-top: 1px solid #ccc;
}

.dropdownopt-menu li a {
  text-decoration: none;
  color: #333;
  display: block;
}

.dropdownopt-menu li a:hover {
  background-color: #f2f2f2;
}
.chnli-cont {
  list-style-type: none;
  padding: 0;
  margin: 0;
}
.chan-item{
	display: flex;
	/* align-items: center; */
	justify-content: space-between;
	background: #61656e;;
	margin: 3px;
	width: 100%;
	padding: 0;
}
.chnul-cont {
  margin: 0;
  padding: 0;
  border-radius: 10px;
}
</style>
