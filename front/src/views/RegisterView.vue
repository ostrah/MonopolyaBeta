<!-- RegisterView.vue -->
<template>
  <div class="register-container">
    <h2>Регистрация</h2>
    <form @submit.prevent="registerUser">
      <div class="form-group">
        <label for="username">Имя пользователя:</label>
        <input type="text" id="username" v-model="username" required />
      </div>
      <div class="form-group">
        <label for="email">Электронная почта:</label>
        <input type="email" id="email" v-model="email" required />
      </div>
      <div class="form-group">
        <label for="password">Пароль:</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <button type="submit">Зарегистрироваться</button>
    </form>
    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    <p v-if="successMessage" class="success">{{ successMessage }}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      username: '',
      email: '',
      password: '',
      errorMessage: '',
      successMessage: '',
    };
  },
  methods: {
    async registerUser() {
      try {
        const response = await axios.post('http://localhost:3000/api/register', {
          username: this.username,
          email: this.email,
          password: this.password,
        });

        // Handle successful registration
        this.successMessage = 'Регистрация прошла успешно!';
        this.errorMessage = '';
        console.log('User registered:', response.data);
      } catch (error) {
        // Handle errors
        this.errorMessage = error.response?.data?.error || 'Ошибка регистрации.';
        this.successMessage = '';
        console.error('Registration error:', error);
      }
    },
  },
};
</script>

<style scoped>
/* Add styles for registration form */
.register-container {
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

.success {
  color: green;
}
</style>
