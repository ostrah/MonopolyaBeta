<!-- CreateRoomComponent.vue -->
<template>
  <div class="create-room-container">
    <h3>Создать комнату</h3>
    <form @submit.prevent="createRoom">
      <div class="form-group">
        <label for="name">Название комнаты:</label>
        <input type="text" id="name" v-model="name" required />
      </div>
      <div class="form-group">
        <label for="type">Тип игры:</label>
        <select id="type" v-model="type" required>
          <option value="quick">Быстрая игра</option>
          <option value="classic">Классическая</option>
        </select>
      </div>
      <div class="form-group">
        <label for="privacy">Приватность:</label>
        <select id="privacy" v-model="privacy" required>
          <option value="public">Публичная</option>
          <option value="private">Приватная</option>
        </select>
      </div>
      <button type="submit">Создать комнату</button>
    </form>
    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      name: '',
      type: 'quick',
      privacy: 'public',
      errorMessage: '',
    };
  },
  methods: {
    async createRoom() {
      try {
        const response = await axios.post('http://localhost:3000/api/rooms/create', {
          name: this.name,
          type: this.type,
          privacy: this.privacy,
          createdBy: localStorage.getItem('userId'), // Здесь используем ID текущего пользователя
        });

        alert('Комната создана успешно!');
        this.errorMessage = '';
        console.log('Room created:', response.data);
      } catch (error) {
        this.errorMessage = error.response?.data?.error || 'Ошибка при создании комнаты.';
        console.error('Error creating room:', error);
      }
    },
  },
};
</script>

<style scoped>
.create-room-container {
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f9f9f9;
}

.form-group {
  margin-bottom: 15px;
}

.error {
  color: red;
}
</style>
