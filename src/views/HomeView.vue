<template>
  <div class="home">
    Home
    <FilterNav @changeFilter="handleChangeFilter" :filterType="filterType"></FilterNav>
    <div v-if="projects.length">
      <div v-for="project in filteredProjects" :key="project.id">
        <Project :project="project" @deleted="handleDeleted" @completed="handleCompleted"></Project>
      </div>
    </div>
  </div>
</template>

<script>

import Project from "@/components/Project.vue";
import FilterNav from "@/components/FilterNav.vue";

export default {
  name: 'HomeView',
  components: {FilterNav, Project},
  data() {
    return {
      projects: [],
      filterType : 'all'
    }
  },
  mounted() {
    fetch("http://localhost:3000/projects")
        .then(res => res.json())
        .then(data => this.projects = data)
        .catch(err => console.log(err))
  },
  methods: {
    handleDeleted(id) {
      this.projects = this.projects.filter((project) => {
        return project.id !== id
      })
    },
    handleCompleted(id) {
      let project = this.projects.find((project) => {
        return project.id === id
      })
      project.complete = !project.complete
    },
    handleChangeFilter(by) {
      this.filterType = by
    },
  },
  computed:{
    filteredProjects(){
      if (this.filterType === 'completed'){
        return this.projects.filter((project)=> project.complete);
      }

      if (this.filterType === 'ongoing'){
        return this.projects.filter((project)=> !project.complete);
      }

      return this.projects
    }
  }
}
</script>
