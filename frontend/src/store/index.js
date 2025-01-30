import { createStore } from 'vuex';

export default createStore({
  state: {
    cart: [],
  },
  mutations: {
    addToCart(state, product) {
      state.cart.push(product); // Add product to cart
    },
    removeFromCart(state, productId) {
      state.cart = state.cart.filter(item => item.id !== productId); // Remove product from cart
    },
  },
  actions: {
    addProductToCart({ commit }, product) {
      commit('addToCart', product); // Dispatch add to cart action
    },
    removeProductFromCart({ commit }, productId) {
      commit('removeFromCart', productId); // Dispatch remove from cart action
    },
  },
  getters: {
    cartItemCount: state => state.cart.length,  // Get number of items in the cart
    cartItems: state => state.cart,  // Get all cart items
  },
});
