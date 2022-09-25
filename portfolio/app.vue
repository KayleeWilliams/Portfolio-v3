<script setup>
const query = await queryContent('projects/').sort({_file: -1, $numeric: true}).find()
</script>

<template>
  <div>
      <div v-for="project in query" :key="project._path">
        <h2>{{ project.date }}: {{ project.title }}</h2>
        <p>{{ project.description }}</p>
        <p>{{ project.tech }}</p>
      </div>
  </div>
</template>
