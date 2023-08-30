<template>
	<div class="dropdowns" ref="dropdowns">
	  <img
		class="dropbtn"
		src="@/assets/option.svg"
		alt="Dropdowns Button"
		@click="toggleDropdowns"
	  />
	  <div
		class="dropdowns-content"
		:class="{ active: showDropdowns }"
		@click.stop=""
	  >
		<router-link to="/chat">Message</router-link>
		<router-link to="/game">Remove</router-link>
	  </div>
	</div>
  </template>
  
  <script>
  export default {
	data() {
	  return {
		showDropdowns: false,
	  };
	},
	methods: {
	  toggleDropdowns() {
		this.showDropdowns = !this.showDropdowns;
  
		if (this.showDropdowns) {
		  document.addEventListener("click", this.closeDropdownsOnClickOutside);
		} else {
		  document.removeEventListener("click", this.closeDropdownsOnClickOutside);
		}
	  },
	  closeDropdownsOnClickOutside(event) {
		if (!this.$refs.dropdowns.contains(event.target)) {
		  this.showDropdowns = false;
		  document.removeEventListener("click", this.closeDropdownsOnClickOutside);
		}
	  },
	},
  };
  </script>
  
  <style scoped>
  .dropbtn {
	cursor: pointer;
	width: 40px;
  }
  
  .dropdowns-content {
	display: none;
	position: absolute;
	background-color: #f9f9f9;
	min-width: 160px;
	box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
	right: 100%;
	margin-right: px;
  }
  
  .active {
	display: block;
  }
  
  .dropdowns-content a {
	color: black;
	padding: 12px 16px;
	text-decoration: none;
	display: block;
  }
  
  .dropdowns-content a:hover {
	background-color: #f1f1f1;
  }
  </style>
  