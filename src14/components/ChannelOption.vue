<template>
	<div class="dropdownopt" ref="dropdownopt">
	  <img
		class="dropsbtnch"
		src="@/assets/option.svg"
		alt="Dropdownopt Button"
		@click="toggleDropdownopt"
	  />
	  <div
		class="dropdownopt-content"
		:class="{ active: showDropdownopt }"
		@click.stop=""
	  >
		<router-link to="/chat">Leave channel</router-link>
	  </div>
	</div>
  </template>
  
  <script lang="ts">
  import { Options, Vue } from 'vue-class-component';
  
  @Options({
	name: 'DropdownoptComponent',
  })
  export default class DropdownoptComponent extends Vue {
	private showDropdownopt: boolean = false;
  
	private toggleDropdownopt(): void {
	  this.showDropdownopt = !this.showDropdownopt;
  
	  if (this.showDropdownopt) {
		document.addEventListener('click', this.closeDropdownoptOnClickOutside);
	  } else {
		document.removeEventListener('click', this.closeDropdownoptOnClickOutside);
	  }
	}
  
	private closeDropdownoptOnClickOutside(event: MouseEvent): void {
	  if (this.$refs.dropdownopt instanceof HTMLElement &&
		  !this.$refs.dropdownopt.contains(event.target as Node)) {
		this.showDropdownopt = false;
		document.removeEventListener('click', this.closeDropdownoptOnClickOutside);
	  }
	}
  }
  </script>
  
  <style scoped>
  .dropsbtnch {
	cursor: pointer;
	width: 40px;
  }
  
  .dropdownopt-content {
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
  
  .dropdownopt-content a {
	color: black;
	padding: 12px 16px;
	text-decoration: none;
	display: block;
  }
  
  .dropdownopt-content a:hover {
	background-color: #f1f1f1;
  }
  </style>
  