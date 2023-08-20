<template>
  <div class="dropdown">
    <button class="dropdown-toggle" @click="toggleDropdown">
      {{ selectedOption }}
    </button>
    <ul v-if="isOpen" class="dropdown-menu">
      <li
        v-for="(option, index) in options"
        :key="index"
        @click="selectOption(option)"
      >
        {{ option }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "DropDown",
  props: {
    options: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      isOpen: false,
      selectedOption: "Select an option",
    };
  },
  methods: {
    toggleDropdown() {
      this.isOpen = !this.isOpen;
    },
    selectOption(option) {
      this.selectedOption = option;
      this.isOpen = false;
      this.$emit("option-selected", option);
    },
  },
};
</script>

<style scoped>
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-toggle {
  background-color: #f8f8f8;
  border: 1px solid #ccc;
  padding: 8px 16px;
  cursor: pointer;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #fff;
  border: 1px solid #ccc;
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
}

.dropdown-menu li {
  padding: 8px 16px;
  cursor: pointer;
  border-top: 1px solid #ccc;
}

.dropdown-menu li:hover {
  background-color: #f2f2f2;
}
</style>
