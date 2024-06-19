<script>
export default {
  props: ["project"],
  data() {
    return {
      isShowDetail: false,
      url: "http://localhost:3000/projects/" + this.project.id
    }
  },
  methods:{
    deleteProject(){
      console.log(this.url)
      fetch(this.url, {
        method: "DELETE"
      }).then(()=> this.$emit("deleted", this.project.id))
          .catch(err => console.log(err))
    }
  }
}
</script>

<template>
  <div class="project" @click="isShowDetail = !isShowDetail">
    <div class="action">
      <h3>{{ project.title }}</h3>
      <div class="icons">
             <span class="material-symbols-outlined">
              edit
            </span>
            <span class="material-symbols-outlined" @click.stop="deleteProject">
              delete
            </span>
            <span class="material-symbols-outlined">
              done
            </span>
      </div>
    </div>
    <div class="detail" v-if="isShowDetail">
      <p>{{ project.detail }}</p>
    </div>
  </div>
</template>

<style scoped>
.project {
  margin: 20px auto;
  background: white;
  padding: 10px 20px;
  border-radius: 4px;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.05);
  cursor: pointer;
  border-left: 4px solid #e90074;
}
.action{
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.material-symbols-outlined{
  font-size: 24px;
  margin-left: 10px;
  color: #bbb;
  cursor: pointer;
}

.material-symbols-outlined:hover{
  color: #777;
}

</style>