<script>
import Cart from '../components/Cart.vue'

export default {
  name: 'CartPage',
  components: {
    Cart
  }
}
</script>

<template>
<div>
  <body
    class="page-template-default page page-id-6 theme-flatsome woocommerce-cart woocommerce-page woocommerce-js lightbox nav-dropdown-has-arrow nav-dropdown-has-shadow nav-dropdown-has-border"
  >
    <div id="wrapper">
      <!-- navbarın gelecegi yer -->
      <main id="main">
        <Cart />
      </main>
      <!-- footer'ın gelecegi yer -->
    </div>
  </body>
</div>
</template>
