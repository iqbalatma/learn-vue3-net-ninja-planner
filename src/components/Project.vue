<script>
export default {
  props: ["project"],
  data() {
    return {
      isShowDetail: false,
      url: "http://localhost:3000/projects/" + this.project.id
    }
  },
  methods: {
    deleteProject() {
      fetch(this.url, {
        method: "DELETE"
      }).then(() => this.$emit("deleted", this.project.id))
          .catch(err => console.log(err))
    },
    completeProject() {
      fetch(this.url, {
        method: "PATCH",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({complete: !this.project.complete})
      })
          .then(() => this.$emit("completed", this.project.id))
          .catch(err => console.log(err))

    }
  }
}
</script>

<template>
  <div class="project" :class="{complete: project.complete}" @click="isShowDetail = !isShowDetail">
    <div class="action">
      <h3>{{ project.title }}</h3>
      <div class="icons">
        <router-link :to="{name:'edit.project', params:{id: project.id}}">
            <span class="material-symbols-outlined">
              edit
            </span>
        </router-link>
        <span class="material-symbols-outlined" @click.stop="deleteProject">
              delete
            </span>
        <span @click.stop="completeProject" class="material-symbols-outlined tick">
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

.action {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.material-symbols-outlined {
  font-size: 24px;
  margin-left: 10px;
  color: #bbb;
  cursor: pointer;
}

.material-symbols-outlined:hover {
  color: #777;
}

.project.complete {
  border-left: 4px solid #00ce89;
}

.project.complete .tick {
  color: #00ce89;
}
</style>