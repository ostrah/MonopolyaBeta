<!-- src/components/TasksComponent.vue -->
<template>
  <div class="tasks">
    <h3>Задания</h3>
    <ul>
      <li v-for="(task, index) in tasks" :key="index">
        {{ task.title }}
        <div class="progress-bar">
          <div class="progress" :style="{ width: task.progress + '%' }"></div>
        </div>
        <span>{{ task.current }} / {{ task.total }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TasksComponent', // Ensure this is a multi-word name
  data() {
    return {
      tasks: [
        { title: 'Получите деньги от Банка на поле «Шанс»', progress: 20, current: 0, total: 7500 },
        { title: 'Откройте двери на «Портале»', progress: 10, current: 0, total: 40 },
        { title: 'Выиграйте суперигры на «Джекпоте»', progress: 40, current: 0, total: 40 },
        { title: 'Верните кредит', progress: 30, current: 0, total: 18 },
      ],
    };
  },
};
</script>

<style scoped>
.progress-bar {
  background-color: #e0e0e0;
  height: 6px;
  border-radius: 3px;
  margin: 5px 0;
}

.progress {
  background-color: #84c441;
  height: 100%;
  border-radius: 3px;
}
</style>
