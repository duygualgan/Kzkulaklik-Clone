<script lang="ts">
export default {
  name: 'singleProductPreview',
  props: {
    id: Number,
    imgSrc: String,
    altimgSrc: String,
    productName: String,
    originalPrice: String,
    discountedPrice: String
  },
  data () {
    return {
      url: '/product/' + this.id
      // url: '/product'
    }
  }
}
</script>

<template>
    <div class="col-inner">
        <div class="badge-container absolute left top z-1"></div>
        <div class="product-small box">
            <div class="box-image">
                <div class="image-fade_in_back">
                    <!--<a href="./product"> @click="$store.dispatch('selectProduct', id)"-->
                    <router-link :to="url">
                        <!--ana resim-->
                        <img
                            width="247"
                            height="247"
                            :src="imgSrc"
                            class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail lazy-load-active"
                            :alt="productName"
                            loading="lazy"
                            sizes="(max-width: 247px) 100vw, 247px"
                        />
                        <!--alternatif resim-->
                        <img
                            width="247"
                            height="247"
                            :src="altimgSrc"
                            class="show-on-hover absolute fill hide-for-small back-image lazy-load-active"
                            :alt="productName"
                            loading="lazy"
                            sizes="(max-width: 247px) 100vw, 247px"
                        />
                        <!--</a>-->
                    </router-link>
                </div>
                <div class="image-tools is-small top right show-on-hover"></div>
                <div class="image-tools is-small hide-for-small bottom left show-on-hover"></div>
                <div
                    class="image-tools grid-tools text-center hide-for-small bottom hover-slide-in show-on-hover"
                ></div>
            </div>
            <div class="box-text box-text-products text-center grid-style-2">
                <div class="title-wrapper">
                    <p class="name product-title woocommerce-loop-product__title">
                        <!--<a
                                href="https://www.kzkulaklik.com/urun/kz-zsn-1ba1dd-hibrit-kulaklik/"
                                class="woocommerce-LoopProduct-link woocommerce-loop-product__link"
                        >KZ ZSN Pro 1BA+1DD Hibrit Kulaklık</a>-->
                        <router-link :to="url">{{ productName }}</router-link>
                    </p>
                </div>
                <div class="price-wrapper">
                    <span class="price">
                        <del aria-hidden="true">
                            <span class="woocommerce-Price-amount amount">
                                <bdi>
                                    {{ originalPrice }}&nbsp;
                                    <span
                                        class="woocommerce-Price-currencySymbol"
                                    >TL</span>
                                </bdi>
                            </span>
                        </del>
                        <ins>
                            <span class="woocommerce-Price-amount amount">
                                <bdi>
                                    {{ discountedPrice }}&nbsp;
                                    <span
                                        class="woocommerce-Price-currencySymbol"
                                    >TL</span>
                                </bdi>
                            </span>
                        </ins>
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>
