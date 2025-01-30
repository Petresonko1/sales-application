<template>
  <nav>
    <ul>
      <li><router-link to="/admin">Admin</router-link></li>
      <li><router-link to="/sales">Salesperson</router-link></li>
      <li><router-link to="/customer">Customer</router-link></li>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  background: #333;
  padding: 10px;
}
ul {
  list-style: none;
  padding: 0;
}
li {
  display: inline;
  margin-right: 10px;
}
a {
  color: white;
  text-decoration: none;
}
</style>
