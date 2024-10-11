<template>
    <div class="home-container">
      <nav class="navbar">
        <div class="logo">
          <img src="@/assets/logo.webp" alt="Monopoly One Logo" />
          <span>Monopoly One</span>
        </div>
        <ul class="nav-links">
          <li><a href="#">ПОИСК ИГР</a></li>
          <li><a href="#">M1TV</a></li>
          <li><a href="#">Друзья</a></li>
          <li><a href="#">Инвентарь</a></li>
          <li><a href="#">Маркет</a></li>
        </ul>
        <div class="nav-icons">
          <i class="search-icon">🔍</i>
          <i class="chat-icon">💬</i>
          <i class="profile-icon">👤</i>
        </div>
      </nav>
  
     
      <header class="header">
        <h1>Приглашаем в Монополию.</h1>
        <p>Это отличное место, чтобы поиграть с друзьями в легендарную настольную игру.</p>
        <button class="cta-button" @click="startGame">Начать игру</button>
      </header>
  
    
      <section class="game-preview">
        <img src="@/assets/game-board.webp" alt="Game Board Preview" />
      </section>
    </div>
  </template>
<style scoped>
.home-container {
  font-family: Arial, sans-serif;
  color: #fff;
  background-color: #27c5a4;
  text-align: center;
  padding: 20px 0;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #22b094;
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
  margin: 0;
  padding: 0;
}

.nav-links a {
  color: #fff;
  text-decoration: none;
  font-size: 16px;
}

.nav-icons {
  display: flex;
  gap: 15px;
  font-size: 18px;
}

.header {
  padding: 60px 20px;
  background-color: #27c5a4;
}

.header h1 {
  font-size: 36px;
  margin-bottom: 10px;
}

.header p {
  font-size: 18px;
  margin-bottom: 20px;
}

.cta-button {
  padding: 10px 20px;
  font-size: 18px;
  background-color: #ffffff;
  color: #27c5a4;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.cta-button:hover {
  background-color: #f0f0f0;
}

.game-preview {
  margin: 20px 0;
}

.game-preview img {
  max-width: 100%;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
}
</style>

<script>
import { useRouter } from 'vue-router';

export default {
  name: 'HomeView',
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


  