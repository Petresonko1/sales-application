<template>
  <div>
    <h1>Admin Dashboard</h1>
    <p>Create users, add products</p>
    <ProductList :products="products"/>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import ProductList from '@/components/ProductList.vue';

const products = ref([
  { id: 1, name: 'Laptop', price: 1200 },
  { id: 2, name: 'Phone', price: 800 }
]);
</script>
