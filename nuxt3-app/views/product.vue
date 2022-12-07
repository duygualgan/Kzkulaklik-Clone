<script>
import ProductView from '../components/ProductView.vue'

export default {
  name: 'ProductPage',
  components: {
    ProductView
  },
  mounted () {
    this.$store.dispatch('selectProduct', this.id)
  },
  watch: {
    $route (to, from) {
      this.id = Number(this.$route.params.id)
      if (!isNaN(this.id)) {
        this.$store.dispatch('selectProduct', this.id)
      }
    }
  },
  data () {
    return {
      id: Number(this.$route.params.id)
    }
  }
}
</script>

<template>
<div>
  <body
    class="product-template-default single single-product postid-160 theme-flatsome woocommerce woocommerce-page woocommerce-js lightbox nav-dropdown-has-arrow nav-dropdown-has-shadow nav-dropdown-has-border"
  >
    <div id="wrapper">
      <!-- navbarın gelecegi yer -->
      <main id="main">
        <div class="container">
          <ProductView />
        </div>
      </main>
      <!-- footer'ın gelecegi yer -->
    </div>
  </body>
</div>
</template>
