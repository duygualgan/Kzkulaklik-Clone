<script>
import SingleProductPreview from './SingleProductPreview.vue'
export default {
  name: 'productPreview',
  components: {
    SingleProductPreview
  }
}
</script>
<template>
    <div
        class="product-small col has-hover product type-product post-160 status-publish first instock product_cat-kz-kulaklik product_tag-kulaklik product_tag-kz-kulaklik has-post-thumbnail sale featured shipping-taxable purchasable product-type-variable"
        v-for="p in $store.state.filteredProducts" :key="p.id"
    >
        <SingleProductPreview
            :id = "p.id"
            :imgSrc = "p.imgSrc"
            :altimgSrc = "p.altimgSrc"
            :productName = "p.productName"
            :originalPrice = "p.originalPrice"
            :discountedPrice = "p.discountedPrice"/>
    </div>
</template>
