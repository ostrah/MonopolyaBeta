<!-- src/components/WaitingGamesComponent.vue -->
<template>
  <div class="waiting-games">
    <h3>Ожидают игры</h3>

    <!-- Create Room Section -->
    <CreateRoomComponent @roomCreated="fetchRooms" />

    <!-- Room List Section -->
    <div v-if="rooms.length > 0" class="room-list">
      <div v-for="(room, index) in rooms" :key="index" class="room-item">
        <h4>{{ room.name }}</h4>
        <p>Тип игры: {{ room.type }}</p>
        <p>Приватность: {{ room.privacy }}</p>
        <button @click="joinRoom(room.id)">Присоединиться</button>
      </div>
    </div>
    <p v-else>Нет доступных комнат. Создайте свою!</p>
  </div>
</template>

<script>
import CreateRoomComponent from '@/components/CreateRoomComponent.vue';
import axios from 'axios';

export default {
  name: 'WaitingGamesComponent',
  components: {
    CreateRoomComponent,
  },
  data() {
    return {
      rooms: [], // Stores the list of available rooms
    };
  },
  methods: {
    // Fetch the list of available rooms from the backend
    async fetchRooms() {
      try {
        const response = await axios.get('/api/rooms');
        this.rooms = response.data;
      } catch (error) {
        console.error('Error fetching rooms:', error);
        alert('Ошибка при загрузке комнат.');
      }
    },
    // Join a selected room
    joinRoom(roomId) {
      // Logic to join the selected room
      alert(`Присоединение к комнате: ${roomId}`);
      // Implement backend join room API call here
    },
  },
  mounted() {
    // Fetch rooms when the component is mounted
    this.fetchRooms();
  },
};
</script>

<style scoped>
.waiting-games {
  background-color: #f4f4f4;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.room-list {
  margin-top: 20px;
}

.room-item {
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  background-color: #fff;
}

button {
  padding: 5px 10px;
  background-color: #84c441;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}

button:hover {
  background-color: #76b437;
}
</style>
