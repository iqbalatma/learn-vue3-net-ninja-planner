<template>
  <div class="home">
   Home

    <div v-if="projects.length">
      <div v-for="project in projects" :key="project.id">
        <Project :project="project" @deleted="handleDeleted" @completed="handleCompleted"></Project>
      </div>
    </div>
  </div>
</template>

<script>

import Project from "@/components/Project.vue";

export default {
  name: 'HomeView',
  components: {Project},
  data(){
    return {
      projects: []
    }
  },
  mounted() {
    fetch("http://localhost:3000/projects")
        .then(res => res.json())
        .then(data => this.projects = data)
        .catch(err => console.log(err))
  },
  methods: {
    handleDeleted(id){
      this.projects = this.projects.filter((project)=>{
        return project.id !== id
      })
    },
    handleCompleted(id){
      let project = this.projects.find((project)=>{return project.id ===id})
      project.complete = !project.complete
      console.log(project.complete)
    }
  }
}
</script>
