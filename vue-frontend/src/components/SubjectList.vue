<template>
  <div>
    <h2>Subjects (Software Engineering)</h2>
    <div v-if="loading">Loading subjects...</div>
    <div v-else-if="error">Error loading subjects. Please try again later.</div>
    <ul v-else>
      <li v-for="subject in subjects" :key="subject.id">
        {{ subject.name }} - Year {{ subject.year }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      subjects: [],
      loading: true,
      error: false
    };
  },
  mounted() {
    axios.get("/subjects/")
      .then((response) => {
        console.log("Subjects received:", response.data);
        this.subjects = response.data;
      })
      .catch((error) => {
        console.error("Failed to fetch subjects:", error);
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
