<script>
export default {
  name: 'CartProductPreview',
  props: {
    id: Number,
    imgSrc: String,
    productName: String,
    discountedPrice: String,
    count: Number
  },
  computed: {
    toPath: function () {
      return '/product/' + this.id
    }
  }
}
</script>

<template>
    <li class="woocommerce-mini-cart-item mini_cart_item">
        <router-link
            to=""
            @click="$store.dispatch('removeFromCart', id)"
            class="remove remove_from_cart_button"
            aria-label="Bu ürünü çıkar"
            data-product_sku
        >x</router-link>
        <router-link
            :to="toPath"
        >
            <img
                width="247"
                height="247"
                :src="imgSrc"
                class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                loading="lazy"
                sizes="(max-width: 247px) 100vw, 247px"
            />{{productName}}
        </router-link>
        <span class="quantity">
            {{count}} x
            <span class="woocommerce-Price-amount amount">
                <bdi>
                    {{discountedPrice}}&nbsp;
                    <span class="woocommerce-Price-currencySymbol">TL</span>
                </bdi>
            </span>
        </span>
    </li>
</template>
