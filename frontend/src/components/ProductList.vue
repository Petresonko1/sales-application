<template>
  <div>
    <h2>Product List</h2>
    <ul>
      <li v-for="product in products" :key="product.id">
        {{ product.name }} - ${{ product.price }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
  products: Array
});
</script>

<style scoped>
h2 {
  color: #333;
}
ul {
  list-style: none;
  padding: 0;
}
li {
  padding: 10px 0;
  border-bottom: 1px solid #ddd;
}
</style>
