<template>
  <form @submit.prevent="handleUpdate">
    <label>Title: </label>
    <input type="text" required v-model="title">

    <label>Details: </label>
    <textarea required v-model="detail"></textarea>

    <button>Update Project</button>
  </form>
</template>

<style scoped>
form {
  background: white;
  padding: 20px;
  border-radius: 10px;
}

label {
  display: block;
  color: #bbb;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 1px;
  margin: 20px 0 10px 0;
}

input {
  padding: 10px;
  border: 0;
  border-bottom: 1px solid #ddd;
  width: 100%;
  box-sizing: border-box;
}

textarea {
  border: 1px solid #ddd;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
  height: 100px;
}

form button {
  display: block;
  margin: 20px auto 0;
  background: #00ce89;
  color: white;
  padding: 10px;
  border: 0;
  border-radius: 6px;
  font-size: 16px;
}

</style>
<script>
export default {
  props: ["id"],
  data() {
    return {
      title: '',
      detail: '',
      url: 'http://localhost:3000/projects/' + this.id
    }
  },
  mounted() {
    fetch(this.url)
        .then(res => res.json())
        .then(data => {
          this.title = data.title
          this.detail = data.detail
        })
  },
  methods: {
    handleUpdate() {
      fetch(this.url, {
        method: "PATCH",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({title: this.title, detail: this.detail})
      }).then(() => {
        this.$router.push('/')
      })
    }
  }
}
</script>