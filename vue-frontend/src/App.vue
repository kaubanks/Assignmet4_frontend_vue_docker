<template>
  <div id="app">
    <h1>🎓 Welcome to Student Portal</h1>
    <p><strong>Served by node:</strong> {{ nodeId || 'Unknown' }}</p>

    <div class="buttons">
      <button @click="show = 'students'">Students</button>
      <button @click="show = 'subjects'">Courses</button>
    </div>

    <div class="content">
      <StudentList v-if="show === 'students'" />
      <SubjectList v-if="show === 'subjects'" />
    </div>
  </div>
</template>

<script>
import StudentList from './components/StudentList.vue'
import SubjectList from './components/SubjectList.vue'

export default {
  components: {
    StudentList,
    SubjectList
  },
  data() {
    return {
      show: '',
      nodeId: ''
    }
  },
  async mounted() {
    try {
      const res = await fetch("/", { method: 'HEAD' })
      this.nodeId = res.headers.get("X-Node-ID") || 'N/A'
    } catch (error) {
      console.error("Failed to fetch node ID:", error)
      this.nodeId = 'Unavailable'
    }
  }
}
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  text-align: center;
  padding: 20px;
}

.buttons {
  margin: 20px;
}

button {
  margin: 0 10px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}

.content {
  margin-top: 30px;
}
</style>
