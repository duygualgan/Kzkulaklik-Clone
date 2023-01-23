<script>
import CartProductPreview from './CartProductPreview.vue'

export default {
  name: 'CartPreview',
  components: {
    CartProductPreview
  },
  data () {
    return {
      previewHover: ''
    }
  },
  computed: {
    previewClass: function () {
      return 'cart-item has-icon has-dropdown ' + this.previewHover
    }
  }
}
</script>

<template>
    <!-- current-dropdown eklendiğinde sepet preview geliyor
    ilk li elementi nin içindeki ilk ul elementi görünür hale geliyor-->
    <li id="preview" :class="previewClass" @mouseenter="previewHover = 'current-dropdown'" @mouseleave="previewHover = ''">
        <router-link to="/cart" title="Sepet" class="header-cart-link is-small" @click="$store.dispatch('selectPage', '')">
            <i class="icon-shopping-basket" data-icon-label="0"></i>
        </router-link>
        <!--<a href="./cart" title="Sepet" class="header-cart-link is-small">
            <i class="icon-shopping-basket" data-icon-label="0"></i>
        </a>-->
        <ul class="nav-dropdown nav-dropdown-default">
            <li class="html widget_shopping_cart">
                <div class="widget_shopping_cart_content">
                    <div v-if="!$store.getters.cartEmpty">
                        <!-- Sepette ürün varsa aşağıdaki ul elementi oluşturulup içine CartProductPreview componentleri ekleniyor -->
                        <div v-for="p in $store.getters.productsInCart" :key="p.product.id">
                            <ul class="woocommerce-mini-cart cart_list product_list_widget" >
                                <CartProductPreview
                                    :id = "p.product.id"
                                    :imgSrc = "p.product.imgSrc"
                                    :productName = "p.product.productName"
                                    :discountedPrice = "p.product.discountedPrice"
                                    :count = "p.count"/>
                            </ul>
                        </div>
                        <!-- aşağıdaki iki p elementi sepette ürün varsa ekleniyor. -->
                        <p class="woocommerce-mini-cart__total total">
                            <strong>Ara toplam:</strong>
                            <span class="woocommerce-Price-amount amount">
                                <bdi>
                                    {{$store.getters.cartTotal}}&nbsp;
                                    <span class="woocommerce-Price-currencySymbol">TL</span>
                                </bdi>
                            </span>
                        </p>
                        <p class="woocommerce-mini-cart__buttons buttons">
                            <router-link to="/cart" class="button wc-forward">Sepeti Görüntüle</router-link>
                            <!--<a
                                href="https://www.kzkulaklik.com/sepet/"
                                class="button wc-forward"
                            >Sepeti görüntüle</a>-->
                            <router-link to="/paymentAndDelivery" class="button wc-forward">Satın Al</router-link>
                            <!--<a
                                href="https://www.kzkulaklik.com/odeme/"
                                class="button checkout wc-forward"
                            >Satın AL</a>-->
                        </p>
                    </div>
                    <!-- Sepette ürün yoksa sadece aşağıdaki p elementi gösteriliyor -->
                    <div v-else>
                         <p class="woocommerce-mini-cart__empty-message">Sepetinizde ürün bulunmuyor.</p>
                    </div>
                </div>
            </li>
        </ul>
    </li>
</template>
