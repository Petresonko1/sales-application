<template>
  <div>
    <h1>Welcome to the Store</h1>
    <ProductList :products="products" @add-to-cart="addToCart" />
    
    <div v-if="cart.length">
      <h3>Your Cart</h3>
      <ul>
        <li v-for="item in cart" :key="item.id">
          {{ item.name }} - ${{ item.price }}
        </li>
      </ul>
      <button @click="checkout">Checkout</button>  <!-- Checkout button -->
    </div>
    <div v-else>
      <p>Your cart is empty!</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import ProductList from '@/components/ProductList.vue';

const products = ref([
  { id: 1, name: 'Laptop', price: 1200 },
  { id: 2, name: 'Phone', price: 800 }
]);

// Cart state
const cart = ref([]);

// Add product to cart
const addToCart = (product) => {
  cart.value.push(product);
};

// Checkout function (you can add a route to the checkout page)
const checkout = () => {
  alert('Proceeding to checkout...');
  // Here you could redirect to the checkout page or handle the order process
};
</script>
