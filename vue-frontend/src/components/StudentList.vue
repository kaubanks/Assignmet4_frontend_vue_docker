<template>
  <div>
    <h2>Students List</h2>
    <div v-if="loading">Loading students...</div>
    <div v-else-if="error">Error loading students. Please try again later.</div>
    <ul v-else>
      <li v-for="student in students" :key="student.id">
        {{ student.name }} - Program: {{ student.program }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      students: [],
      loading: true,
      error: false
    };
  },
  mounted() {
    axios.get("/students/")
      .then((response) => {
        console.log("Students received:", response.data);
        this.students = response.data;
      })
      .catch((error) => {
        console.error("Failed to fetch students:", error);
        this.error = true;
      })
      .finally(() => {
        this.loading = false;
      });
  }
}
</script>

<style scoped>
h2 {
  margin-bottom: 15px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  padding: 5px 0;
}

.loading {
  color: blue;
}

.error {
  color: red;
}
</style>
