<script>
export default {
  name: "FilterNav",
  props: ['filterType'],
  methods: {
    changeFilter(by) {
      console.log(this.filterType)
      this.$emit("changeFilter", by)
    }
  }
}
</script>

<template>
  <nav class="filter-nav">
    <button @click="changeFilter('all')" :class="{active: this.filterType === 'all'}">View All</button>
    <button @click="changeFilter('completed')" :class="{active: this.filterType === 'completed'}">Completed</button>
    <button @click="changeFilter('ongoing')" :class="{active: this.filterType === 'ongoing'}">Ongoing</button>
  </nav>
</template>

<style scoped>
.filter-nav button.active  {
  color:  #555
}

.filter-nav button{
  background: none;
  border: none;
  color: #bbb;
  outline: none;
  font-size: 12px;
  text-transform: uppercase;
  margin-right: 10px;
  letter-spacing: 1px;
  font-weight: bold;
  cursor: pointer;
}
</style>