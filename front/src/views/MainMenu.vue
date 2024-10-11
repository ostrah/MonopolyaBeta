
<template>
  <div class="main-menu-container">
    <nav class="navbar">
    
    </nav>
    <div class="main-content">
      <aside class="sidebar">
        <TasksComponent /> 
        <div class="top-week">
          <h3>Топ недели</h3>
          <p>Вы не входите в топ игроков недели — сначала выиграйте соревновательный матч.</p>
        </div>
        <div class="friends-online">
          <h3>Друзья онлайн</h3>
          <input type="text" placeholder="Поиск по друзьям" />
          <p>Нет друзей онлайн.</p>
        </div>
      </aside>
      <section class="interaction-area">
        <div class="vip-banner">
          <h3>Эпическая коробка подарков</h3>
          <p>Открыв её, вы подарите десяти случайным игрокам из общего чата сувенирные карточки.</p>
          <button>Купить за 299 р.</button>
        </div>
        <ChatComponent /> 
        <WaitingGamesComponent /> 
      </section>
    </div>
  </div>
</template>




  <style scoped>
  .main-menu-container {
    font-family: Arial, sans-serif;
    color: #333;
    display: flex;
    flex-direction: column;
  }
  
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    background-color: #f4f4f4;
  }
  
  .logo {
    display: flex;
    align-items: center;
  }
  
  .logo img {
    height: 30px;
    margin-right: 8px;
  }
  
  .nav-links {
    display: flex;
    gap: 20px;
    list-style: none;
  }
  
  .nav-links a {
    text-decoration: none;
    color: #333;
  }
  
  .nav-icons {
    display: flex;
    gap: 15px;
    font-size: 18px;
  }
  
  .main-content {
    display: flex;
    padding: 20px;
  }
  
  .sidebar {
    width: 250px;
    padding: 10px;
    background-color: #f9f9f9;
    border-right: 1px solid #ddd;
  }
  
  .sidebar h3 {
    margin-bottom: 10px;
  }
  
  .tasks,
  .top-week,
  .friends-online {
    margin-bottom: 20px;
  }
  
  .tasks ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .interaction-area {
    flex-grow: 1;
    padding: 10px;
  }
  
  .vip-banner {
    background-color: #ffefc2;
    padding: 15px;
    margin-bottom: 20px;
    border-radius: 5px;
  }
  
  .chat-section {
    background-color: #fff;
    padding: 15px;
    margin-bottom: 20px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
  
  .chat-box {
    border: 1px solid #ccc;
    padding: 10px;
    margin-top: 10px;
    height: 150px;
    overflow-y: scroll;
  }
  
  .waiting-games {
    background-color: #f4f4f4;
    padding: 15px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
  
  .game-waiting {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  </style>

<script>
import { useRouter } from 'vue-router';
import ChatComponent from '@/components/ChatComponent.vue';
import WaitingGamesComponent from '@/components/WaitingGamesComponent.vue';
import TasksComponent from '@/components/TasksComponent.vue';

export default {
  name: 'MainPage',
  components: {
    TasksComponent,
    ChatComponent,
    WaitingGamesComponent,
  },
  setup() {
    const router = useRouter();

    const startGame = () => {
      router.push('/Main'); 
    };

    return {
      startGame,
    };
  },
};
</script>

