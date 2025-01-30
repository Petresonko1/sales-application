<template>
  <div id="app">
    <!-- Navigation Bar -->
    <nav class="navbar">
      <div class="container">
        <router-link to="/" class="logo">Sales App</router-link>
        <ul class="nav-links">
          <li><router-link to="/customer">Customer</router-link></li>
          <li><router-link to="/sales">Sales</router-link></li>
          <li><router-link to="/admin">Admin</router-link></li>
        </ul>
      </div>
    </nav>

    <!-- Main Content Area -->
    <div class="main-content">
      <router-view />  <!-- This will render the current route's view (Admin, Sales, or Customer) -->

      <!-- Display Products on the Homepage -->
      <div v-if="isHomepage">
        <h2>Available Products</h2>
        <ProductList />  <!-- Products component will be shown on the homepage -->
      </div>
    </div>

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <p>&copy; 2025 Sales App. All Rights Reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import ProductList from './components/ProductList.vue';  // Import ProductList component

// This flag will help display products only on the homepage
const isHomepage = ref(false);

// Check if the current route is the homepage (you can adjust the condition based on your route setup)
onMounted(() => {
  if (window.location.pathname === '/') {
    isHomepage.value = true;
  }
});
</script>

<style scoped>
/* Basic styling for the layout */

/* Main container */
#app {
  font-family: 'Arial', sans-serif;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* Navbar styles */
.navbar {
  background-color: #2c3e50;
  padding: 10px 20px;
  color: white;
}

.navbar .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar .logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  text-decoration: none;
}

.navbar .nav-links {
  list-style-type: none;
  display: flex;
  gap: 15px;
}

.navbar .nav-links li {
  font-size: 1rem;
}

.navbar .nav-links li a {
  color: white;
  text-decoration: none;
  transition: color 0.3s;
}

.navbar .nav-links li a:hover {
  color: #e74c3c;
}

/* Main content area */
.main-content {
  flex: 1; /* This ensures the content area takes up the remaining space */
  padding: 20px;
  background-color: #ecf0f1;
}

/* Footer styles */
.footer {
  background-color: #2c3e50;
  color: white;
  padding: 10px 0;
  text-align: center;
}

.footer .container {
  max-width: 1200px;
  margin: 0 auto;
}
</style>
