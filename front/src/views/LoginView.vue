<!-- LoginView.vue -->
<template>
    <div class="login-container">
      <h2>Вход</h2>
      <form @submit.prevent="loginUser">
        <div class="form-group">
          <label for="username">Имя пользователя:</label>
          <input type="text" id="username" v-model="username" required />
        </div>
        <div class="form-group">
          <label for="password">Пароль:</label>
          <input type="password" id="password" v-model="password" required />
        </div>
        <button type="submit">Войти</button>
      </form>
      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        username: '',
        password: '',
        errorMessage: '',
      };
    },
    methods: {
      async loginUser() {
        try {
          const response = await axios.post('http://localhost:3000/api/login', {
            username: this.username,
            password: this.password,
          });
  
          // Handle successful login (save token, navigate, etc.)
          localStorage.setItem('token', response.data.token);
          this.$router.push('/home'); // Redirect to home or main page
          this.errorMessage = '';
        } catch (error) {
          // Handle errors
          this.errorMessage = error.response?.data?.error || 'Ошибка входа.';
          console.error('Login error:', error);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .login-container {
    padding: 20px;
    max-width: 400px;
    margin: 0 auto;
    border: 1px solid #ddd;
    border-radius: 8px;
    background-color: #f9f9f9;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  .error {
    color: red;
  }
  </style>
  