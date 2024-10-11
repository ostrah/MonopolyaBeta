<template>
    <div class="chat-section">
      <h3>Чат</h3>
      <div class="chat-box">
        <div class="chat-messages">
          <p v-for="(message, index) in messages" :key="index">
            <span class="chat-time">{{ message.time }}</span> {{ message.user }} — {{ message.text }}
          </p>
        </div>
        <input type="text" placeholder="Введите сообщение и нажмите Enter" />
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ChatComponent',
    data() {
      return {
        messages: [
          { time: '12:58', user: 'keti', text: 'Продам связку за 50, карточки, слот-машину' },
          { time: '12:59', user: 'spells', text: 'лев влюбился в овечку...' },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .chat-box {
    border: 1px solid #ccc;
    padding: 10px;
    height: 150px;
    overflow-y: scroll;
  }
  
  .chat-messages {
    font-size: 14px;
    color: #666;
  }
  
  .chat-time {
    font-weight: bold;
    color: #555;
    margin-right: 5px;
  }
  </style>
  