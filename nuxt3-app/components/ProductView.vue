<script>
import DescriptionTab from './DescriptionTab.vue'
import PaymentAndDelivery from './PaymentAndDelivery.vue'
import WarrantyAndReturn from './WarrantyAndReturn.vue'
import Reviews from './Reviews.vue'
import RelatedProducts from './RelatedProducts.vue'

export default {
  name: 'ProductView',
  components: {
    DescriptionTab,
    PaymentAndDelivery,
    WarrantyAndReturn,
    Reviews,
    RelatedProducts
  },
  data () {
    return {
      number: 1,
      styleP: 'width: ' + this.$store.getters.selectedProduct.stars * 20 + '%'
    }
  }

}
</script>

<template>
    <div
        id="product-160"
        class="product type-product post-160 status-publish first instock product_cat-kz-kulaklik product_tag-kulaklik product_tag-kz-kulaklik has-post-thumbnail sale featured shipping-taxable purchasable product-type-variable"
    >
        <div class="product-container">
            <div class="product-main">
                <div class="row content-row mb-0">
                    <div class="product-gallery large-7 col">
                        <div class="row row-small">
                            <div class="col large-10">
                                <div
                                    class="woocommerce-product-gallery woocommerce-product-gallery--with-images woocommerce-product-gallery--columns-4 images relative mb-half has-hover"
                                    data-columns="4"
                                    style="opacity: 1;"
                                >
                                    <div class="badge-container is-larger absolute left top z-1"></div>
                                    <div class="image-tools absolute top show-on-hover right z-3"></div>
                                    <figure
                                        class="woocommerce-product-gallery__wrapper product-gallery-slider slider slider-nav-small mb-0 has-image-zoom is-draggable flickity-enabled slider-lazy-load-active"
                                        data-flickity-options="{
&quot;cellAlign&quot;: &quot;center&quot;,
&quot;wrapAround&quot;: true,
&quot;autoPlay&quot;: false,
&quot;prevNextButtons&quot;:true,
&quot;adaptiveHeight&quot;: true,
&quot;imagesLoaded&quot;: true,
&quot;lazyLoad&quot;: 1,
&quot;dragThreshold&quot; : 15,
&quot;pageDots&quot;: false,
&quot;rightToLeft&quot;: false       }"
                                        tabindex="0"
                                    >
                                        <div
                                            class="flickity-viewport"
                                            style="height: 540.797px; touch-action: pan-y;"
                                        >
                                            <div
                                                class="flickity-slider"
                                                style="left: 0px; transform: translateX(0%);"
                                            >
                                                <div
                                                    data-thumb="https://www.kzkulaklik.com/wp-content/uploads/2019/03/main-1-100x100.jpg"
                                                    class="woocommerce-product-gallery__image slide first is-selected is-ready"
                                                    style="position: absolute; left: 0%;"
                                                >
                                                    <!---->
                                                    <a>
                                                        <img
                                                            width="510"
                                                            height="510"
                                                            :src="$store.getters.selectedProduct.imgSrc"
                                                            class="wp-post-image skip-lazy lazy-load-active"
                                                            alt="KZ ZSN Pro Kulak İçi Kulaklık"
                                                            loading="lazy"
                                                            title="KZ ZSN Pro 1BA+1DD Hibrit Kulak İçi Kulaklık"
                                                        />
                                                    </a>
                                                </div>
                                                <div
                                                    data-thumb="https://www.kzkulaklik.com/wp-content/uploads/2019/03/KZ-ZSN-Pro-Mikrofonlu-Kulak-Ici-Kulaklik-Siyah-100x100.jpg"
                                                    class="woocommerce-product-gallery__image slide"
                                                    aria-hidden="true"
                                                    style="position: absolute; left: 100%;"
                                                >
                                                    <a
                                                    >
                                                        <img
                                                            width="510"
                                                            height="510"
                                                            src="data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%20800%20800%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3C%2Fsvg%3E"
                                                            class="lazy-load skip-lazy"
                                                            alt="KZ ZSN Pro Kulak İçi Kulaklık"
                                                            loading="lazy"
                                                            title="KZ ZSN Pro Mikrofonlu Kulak İçi Kulaklık Siyah"
                                                            data-caption
                                                            data-src="https://www.kzkulaklik.com/wp-content/uploads/2019/03/KZ-ZSN-Pro-Mikrofonlu-Kulak-Ici-Kulaklik-Siyah.jpg"
                                                            data-large_image="https://www.kzkulaklik.com/wp-content/uploads/2019/03/KZ-ZSN-Pro-Mikrofonlu-Kulak-Ici-Kulaklik-Siyah.jpg"
                                                            data-large_image_width="800"
                                                            data-large_image_height="800"
                                                            data-srcset="https://www.kzkulaklik.com/wp-content/uploads/2019/03/KZ-ZSN-Pro-Mikrofonlu-Kulak-Ici-Kulaklik-Siyah-510x510.jpg 510w, https://www.kzkulaklik.com/wp-content/uploads/2019/03/KZ-ZSN-Pro-Mikrofonlu-Kulak-Ici-Kulaklik-Siyah-300x300.jpg 300w, https://www.kzkulaklik.com/wp-content/uploads/2019/03/KZ-ZSN-Pro-Mikrofonlu-Kulak-Ici-Kulaklik-Siyah-150x150.jpg 150w, https://www.kzkulaklik.com/wp-content/uploads/2019/03/KZ-ZSN-Pro-Mikrofonlu-Kulak-Ici-Kulaklik-Siyah-768x768.jpg 768w, https://www.kzkulaklik.com/wp-content/uploads/2019/03/KZ-ZSN-Pro-Mikrofonlu-Kulak-Ici-Kulaklik-Siyah-247x247.jpg 247w, https://www.kzkulaklik.com/wp-content/uploads/2019/03/KZ-ZSN-Pro-Mikrofonlu-Kulak-Ici-Kulaklik-Siyah-100x100.jpg 100w, https://www.kzkulaklik.com/wp-content/uploads/2019/03/KZ-ZSN-Pro-Mikrofonlu-Kulak-Ici-Kulaklik-Siyah.jpg 800w"
                                                            sizes="(max-width: 510px) 100vw, 510px"
                                                        />
                                                    </a>
                                                </div>
                                                <div
                                                    data-thumb="https://www.kzkulaklik.com/wp-content/uploads/2019/03/ZSN-Pro-mavimor-100x100.jpg"
                                                    class="woocommerce-product-gallery__image slide"
                                                    aria-hidden="true"
                                                    style="position: absolute; left: 200%;"
                                                >
                                                    <a>
                                                        <img
                                                            width="510"
                                                            height="510"
                                                            src="data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%20800%20800%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3C%2Fsvg%3E"
                                                            class="lazy-load skip-lazy"
                                                            loading="lazy"
                                                            title="ZSN Pro mavi+mor"
                                                            data-caption
                                                            data-src="https://www.kzkulaklik.com/wp-content/uploads/2019/03/ZSN-Pro-mavimor.jpg"
                                                            data-large_image="https://www.kzkulaklik.com/wp-content/uploads/2019/03/ZSN-Pro-mavimor.jpg"
                                                            data-large_image_width="800"
                                                            data-large_image_height="800"
                                                            data-srcset="https://www.kzkulaklik.com/wp-content/uploads/2019/03/ZSN-Pro-mavimor-510x510.jpg 510w, https://www.kzkulaklik.com/wp-content/uploads/2019/03/ZSN-Pro-mavimor-150x150.jpg 150w, https://www.kzkulaklik.com/wp-content/uploads/2019/03/ZSN-Pro-mavimor-300x300.jpg 300w, https://www.kzkulaklik.com/wp-content/uploads/2019/03/ZSN-Pro-mavimor-768x768.jpg 768w, https://www.kzkulaklik.com/wp-content/uploads/2019/03/ZSN-Pro-mavimor-247x247.jpg 247w, https://www.kzkulaklik.com/wp-content/uploads/2019/03/ZSN-Pro-mavimor-100x100.jpg 100w, https://www.kzkulaklik.com/wp-content/uploads/2019/03/ZSN-Pro-mavimor.jpg 800w"
                                                            sizes="(max-width: 510px) 100vw, 510px"
                                                        />
                                                    </a>
                                                </div>
                                                <div
                                                    data-thumb="https://www.kzkulaklik.com/wp-content/uploads/2019/03/KZ-ZSN-Pro-Paket-100x100.jpg"
                                                    class="woocommerce-product-gallery__image slide"
                                                    aria-hidden="true"
                                                    style="position: absolute; left: 300%;"
                                                >
                                                    <a>
                                                        <img
                                                            width="510"
                                                            height="509"
                                                            src="data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%20627%20626%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3C%2Fsvg%3E"
                                                            class="lazy-load skip-lazy"
                                                            alt="KZ ZSN Pro"
                                                            loading="lazy"
                                                            title="KZ ZSN Pro Paket İçeriği"
                                                            data-caption
                                                            data-src="https://www.kzkulaklik.com/wp-content/uploads/2019/03/KZ-ZSN-Pro-Paket.jpg"
                                                            data-large_image="https://www.kzkulaklik.com/wp-content/uploads/2019/03/KZ-ZSN-Pro-Paket.jpg"
                                                            data-large_image_width="627"
                                                            data-large_image_height="626"
                                                            data-srcset="https://www.kzkulaklik.com/wp-content/uploads/2019/03/KZ-ZSN-Pro-Paket-510x509.jpg 510w, https://www.kzkulaklik.com/wp-content/uploads/2019/03/KZ-ZSN-Pro-Paket-300x300.jpg 300w, https://www.kzkulaklik.com/wp-content/uploads/2019/03/KZ-ZSN-Pro-Paket-150x150.jpg 150w, https://www.kzkulaklik.com/wp-content/uploads/2019/03/KZ-ZSN-Pro-Paket-247x247.jpg 247w, https://www.kzkulaklik.com/wp-content/uploads/2019/03/KZ-ZSN-Pro-Paket-100x100.jpg 100w, https://www.kzkulaklik.com/wp-content/uploads/2019/03/KZ-ZSN-Pro-Paket.jpg 627w"
                                                            sizes="(max-width: 510px) 100vw, 510px"
                                                        />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <button
                                            class="flickity-button flickity-prev-next-button previous"
                                            type="button"
                                            aria-label="Previous"
                                        >
                                            <svg
                                                class="flickity-button-icon"
                                                viewBox="0 0 100 100"
                                            >
                                                <path
                                                    d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z"
                                                    class="arrow"
                                                />
                                            </svg>
                                        </button>
                                        <button
                                            class="flickity-button flickity-prev-next-button next"
                                            type="button"
                                            aria-label="Next"
                                        >
                                            <svg
                                                class="flickity-button-icon"
                                                viewBox="0 0 100 100"
                                            >
                                                <path
                                                    d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z"
                                                    class="arrow"
                                                    transform="translate(100, 100) rotate(180) "
                                                />
                                            </svg>
                                        </button>
                                    </figure>
                                    <div class="image-tools absolute bottom left z-3">
                                        <a
                                            href="#product-zoom"
                                            class="zoom-button button is-outline circle icon tooltip hide-for-small tooltipstered"
                                        >
                                            <i class="icon-expand"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="col large-2 large-col-first vertical-thumbnails pb-0">
                                <div
                                    class="product-thumbnails thumbnails slider-no-arrows slider row row-small row-slider slider-nav-small small-columns-4 is-draggable flickity-enabled slider-lazy-load-active"
                                    data-flickity-options="{
&quot;cellAlign&quot;: &quot;left&quot;,
&quot;wrapAround&quot;: false,
&quot;autoPlay&quot;: false,
&quot;prevNextButtons&quot;: false,
&quot;asNavFor&quot;: &quot;.product-gallery-slider&quot;,
&quot;percentPosition&quot;: true,
&quot;imagesLoaded&quot;: true,
&quot;pageDots&quot;: false,
&quot;rightToLeft&quot;: false,
&quot;contain&quot;:  true
}"
                                    tabindex="0"
                                >
                                    <div
                                        class="flickity-viewport"
                                        style="height: 116.859px; touch-action: pan-y;"
                                    >
                                        <div
                                            class="flickity-slider"
                                            style="left: 0px; transform: translateX(-0.89%);"
                                        >
                                            <div
                                                class="col first is-selected is-nav-selected"
                                                style="position: absolute; left: 0%;"
                                            >
                                                <a>
                                                    <img
                                                        src="https://www.kzkulaklik.com/wp-content/uploads/2019/03/main-1-100x100.jpg"
                                                        alt="KZ ZSN Pro Kulak İçi Kulaklık"
                                                        width="100"
                                                        height="100"
                                                        class="attachment-woocommerce_thumbnail"
                                                    />
                                                </a>
                                            </div>
                                            <div
                                                class="col"
                                                aria-hidden="true"
                                                style="position: absolute; left: 95.89%;"
                                            >
                                                <a>
                                                    <img
                                                        src="https://www.kzkulaklik.com/wp-content/uploads/2019/03/KZ-ZSN-Pro-Mikrofonlu-Kulak-Ici-Kulaklik-Siyah-100x100.jpg"
                                                        data-src="https://www.kzkulaklik.com/wp-content/uploads/2019/03/KZ-ZSN-Pro-Mikrofonlu-Kulak-Ici-Kulaklik-Siyah-100x100.jpg"
                                                        alt="KZ ZSN Pro Kulak İçi Kulaklık"
                                                        width="100"
                                                        height="100"
                                                        class="attachment-woocommerce_thumbnail lazy-load-active"
                                                    />
                                                </a>
                                            </div>
                                            <div
                                                class="col"
                                                aria-hidden="true"
                                                style="position: absolute; left: 191.78%;"
                                            >
                                                <a>
                                                    <img
                                                        src="https://www.kzkulaklik.com/wp-content/uploads/2019/03/ZSN-Pro-mavimor-100x100.jpg"
                                                        data-src="https://www.kzkulaklik.com/wp-content/uploads/2019/03/ZSN-Pro-mavimor-100x100.jpg"
                                                        width="100"
                                                        height="100"
                                                        class="attachment-woocommerce_thumbnail lazy-load-active"
                                                    />
                                                </a>
                                            </div>
                                            <div
                                                class="col"
                                                aria-hidden="true"
                                                style="position: absolute; left: 287.66%;"
                                            >
                                                <a>
                                                    <img
                                                        src="https://www.kzkulaklik.com/wp-content/uploads/2019/03/KZ-ZSN-Pro-Paket-100x100.jpg"
                                                        data-src="https://www.kzkulaklik.com/wp-content/uploads/2019/03/KZ-ZSN-Pro-Paket-100x100.jpg"
                                                        alt="KZ ZSN Pro"
                                                        width="100"
                                                        height="100"
                                                        class="attachment-woocommerce_thumbnail lazy-load-active"
                                                    />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        class="product-info summary col-fit col entry-summary product-summary text-left"
                    >
                        <nav class="woocommerce-breadcrumb breadcrumbs uppercase">
                            <router-link to="/">Ana Sayfa</router-link>
                            <span class="divider">/</span>
                            <router-link to="/kulakliklar"
                            >KZ Kulaklık</router-link>
                        </nav>
                        <!---->
                        <h1 id = "productName"
                            class="product-title product_title entry-title"
                        >{{$store.getters.selectedProduct.productName}}</h1>
                        <ul class="next-prev-thumbs is-small show-for-medium">
                            <li class="prod-dropdown has-dropdown">
                                <router-link to="/"
                                    rel="next"
                                    class="button icon is-outline circle"
                                    >
                                    <i class="icon-angle-left"></i>
                                    </router-link>
                                <!--
                                <a
                                    href="https://www.kzkulaklik.com/urun/kz-zst-pro-1ba1dd-hibrit-kulaklik/"
                                    rel="next"
                                    class="button icon is-outline circle"
                                >
                                    <i class="icon-angle-left"></i>
                                </a>-->
                                <div class="nav-dropdown">
                                    <router-link
                                        to="/"
                                        title="KZ ZST Pro 1BA+1DD Hibrit Kulaklık"
                                    >
                                        <img
                                            width="100"
                                            height="100"
                                            src="data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%20100%20100%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3C%2Fsvg%3E"
                                            data-src="https://www.kzkulaklik.com/wp-content/uploads/2019/03/main-1-2-100x100.jpg"
                                            class="lazy-load attachment-woocommerce_gallery_thumbnail size-woocommerce_gallery_thumbnail wp-post-image"
                                            alt="KZ ZST Pro 1BA+1DD Kulak İçi Kulaklık"
                                            loading="lazy"
                                            data-srcset="https://www.kzkulaklik.com/wp-content/uploads/2019/03/main-1-2-100x100.jpg 100w, https://www.kzkulaklik.com/wp-content/uploads/2019/03/main-1-2-300x300.jpg 300w, https://www.kzkulaklik.com/wp-content/uploads/2019/03/main-1-2-150x150.jpg 150w, https://www.kzkulaklik.com/wp-content/uploads/2019/03/main-1-2-768x768.jpg 768w, https://www.kzkulaklik.com/wp-content/uploads/2019/03/main-1-2-247x247.jpg 247w, https://www.kzkulaklik.com/wp-content/uploads/2019/03/main-1-2-510x510.jpg 510w, https://www.kzkulaklik.com/wp-content/uploads/2019/03/main-1-2.jpg 800w"
                                            sizes="(max-width: 100px) 100vw, 100px"
                                        />
                                    </router-link>
                                    <!--
                                    <a
                                        title="KZ ZST Pro 1BA+1DD Hibrit Kulaklık"
                                        href="https://www.kzkulaklik.com/urun/kz-zst-pro-1ba1dd-hibrit-kulaklik/"
                                    >
                                        <img
                                            width="100"
                                            height="100"
                                            src="data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%20100%20100%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3C%2Fsvg%3E"
                                            data-src="https://www.kzkulaklik.com/wp-content/uploads/2019/03/main-1-2-100x100.jpg"
                                            class="lazy-load attachment-woocommerce_gallery_thumbnail size-woocommerce_gallery_thumbnail wp-post-image"
                                            alt="KZ ZST Pro 1BA+1DD Kulak İçi Kulaklık"
                                            loading="lazy"
                                            data-srcset="https://www.kzkulaklik.com/wp-content/uploads/2019/03/main-1-2-100x100.jpg 100w, https://www.kzkulaklik.com/wp-content/uploads/2019/03/main-1-2-300x300.jpg 300w, https://www.kzkulaklik.com/wp-content/uploads/2019/03/main-1-2-150x150.jpg 150w, https://www.kzkulaklik.com/wp-content/uploads/2019/03/main-1-2-768x768.jpg 768w, https://www.kzkulaklik.com/wp-content/uploads/2019/03/main-1-2-247x247.jpg 247w, https://www.kzkulaklik.com/wp-content/uploads/2019/03/main-1-2-510x510.jpg 510w, https://www.kzkulaklik.com/wp-content/uploads/2019/03/main-1-2.jpg 800w"
                                            sizes="(max-width: 100px) 100vw, 100px"
                                        />
                                    </a>-->
                                </div>
                            </li>
                            <li class="prod-dropdown has-dropdown">
                                <a
                                    href="#"
                                    rel="next"
                                    class="button icon is-outline circle"
                                >
                                    <i class="icon-angle-right"></i>
                                </a>
                                <div class="nav-dropdown">
                                    <a
                                        title="KZ AS10 5BA 5 Denge Armatür Kulaklık"
                                        href="#"
                                    >
                                        <img
                                            width="100"
                                            height="100"
                                            src="data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%20100%20100%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3C%2Fsvg%3E"
                                            data-src="https://www.kzkulaklik.com/wp-content/uploads/2019/03/KZ-AS10-main1-1-100x100.jpg"
                                            class="lazy-load attachment-woocommerce_gallery_thumbnail size-woocommerce_gallery_thumbnail wp-post-image"
                                            alt="KZ AS10 5BA 5 Adet Tam Denge Armatür Kulak İçi Kulaklık IEM"
                                            loading="lazy"
                                            data-srcset="https://www.kzkulaklik.com/wp-content/uploads/2019/03/KZ-AS10-main1-1-100x100.jpg 100w, https://www.kzkulaklik.com/wp-content/uploads/2019/03/KZ-AS10-main1-1-300x300.jpg 300w, https://www.kzkulaklik.com/wp-content/uploads/2019/03/KZ-AS10-main1-1-150x150.jpg 150w, https://www.kzkulaklik.com/wp-content/uploads/2019/03/KZ-AS10-main1-1-768x768.jpg 768w, https://www.kzkulaklik.com/wp-content/uploads/2019/03/KZ-AS10-main1-1-247x247.jpg 247w, https://www.kzkulaklik.com/wp-content/uploads/2019/03/KZ-AS10-main1-1-510x510.jpg 510w, https://www.kzkulaklik.com/wp-content/uploads/2019/03/KZ-AS10-main1-1.jpg 1000w"
                                            sizes="(max-width: 100px) 100vw, 100px"
                                        />
                                    </a>
                                </div>
                            </li>
                        </ul>
                        <div class="woocommerce-product-rating" v-if = "$store.getters.selectedProduct.stars !== 0">
                            <a href="#reviews" class="woocommerce-review-link" rel="nofollow">
                                <div
                                    class="star-rating"
                                    role="img"
                                    aria-label="5 üzerinden 4.89 oy aldı"
                                >
                                <!---->
                                    <span :style = "'width: ' + $store.getters.selectedProduct.stars * 20 + '%'">
                                        <span class="rating">75</span> müşteri puanına dayanarak 5 üzerinden
                                        <strong
                                            class="rating"
                                        >4.89</strong> puan aldı
                                    </span>
                                </div>
                            </a>
                        </div>
                        <div class="price-wrapper">
                            <p class="price product-page-price price-on-sale">
                                <del aria-hidden="true">
                                    <span class="woocommerce-Price-amount amount">
                                        <bdi>
                                            {{$store.getters.selectedProduct.originalPrice}}&nbsp;
                                            <span
                                                class="woocommerce-Price-currencySymbol"
                                            >TL</span>
                                        </bdi>
                                    </span>
                                </del>
                                <ins>
                                    <span class="woocommerce-Price-amount amount">
                                        <bdi>
                                            {{$store.getters.selectedProduct.discountedPrice}}&nbsp;
                                            <span
                                                class="woocommerce-Price-currencySymbol"
                                            >TL</span>
                                        </bdi>
                                    </span>
                                </ins>
                            </p>
                        </div>
                        <div class="product-short-description">
                            <p>{{$store.getters.selectedProduct.description}}</p>
                        </div>
                            <div class="single_variation_wrap">
                                <div
                                    class="woocommerce-variation single_variation"
                                    style="display: none;"
                                ></div>
                                <div
                                    class="variations_button woocommerce-variation-add-to-cart-disabled"
                                >
                                    <!---->
                                    <div class="quantity buttons_added">
                                        <input type="button" value="-" class="minus button is-form" @click="number--"/>
                                        <label
                                            class="screen-reader-text"
                                            for="quantity_617807c1980c9"
                                        >{{$store.getters.selectedProduct.productName}} adet</label>
                                        <input
                                            type="number"
                                            v-model= "number"
                                            title="Miktar"
                                            size="4"
                                            inputmode="numeric"
                                        />
                                        <input type="button" value="+" class="plus button is-form" @click="number++"/>
                                    </div>
                                    <button id="addToCart"
                                        @click="$store.dispatch('addToCart', number)"
                                        class="button alt disabled"
                                    >Sepete Ekle</button>
                                </div>
                            </div>
                        <strong>
                            <span style="color: #0788d9;">Ücretsiz Kargo!</span>
                        </strong> Hafta içi saat 15:00'e kadar, cumartesi günü saat 13:00'e kadar satın alınan ürünler aynı gün kargoya verilir. Kargo takip bilgisi email adresinize gönderilir.
                        <p>
                            <img
                                class="alignnone size-full wp-image-1512"
                                src="https://www.kzkulaklik.com/wp-content/uploads/2019/09/yurtici-kargo-logo.jpg"
                                width="199"
                                height="50"
                            />
                        </p>
                    </div>
                    <div id="product-sidebar" class="mfp-hide">
                        <div class="sidebar-inner">
                            <div class="hide-for-off-canvas" style="width:100%">
                                <ul class="next-prev-thumbs is-small nav-right text-right">
                                    <li class="prod-dropdown has-dropdown">
                                        <a
                                            href="#"
                                            rel="next"
                                            class="button icon is-outline circle"
                                        >
                                            <i class="icon-angle-left"></i>
                                        </a>
                                        <div class="nav-dropdown">
                                            <a
                                                title="KZ ZST Pro 1BA+1DD Hibrit Kulaklık"
                                                href="#"
                                            >
                                                <img
                                                    width="100"
                                                    height="100"
                                                    src="data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%20100%20100%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3C%2Fsvg%3E"
                                                    data-src="https://www.kzkulaklik.com/wp-content/uploads/2019/03/main-1-2-100x100.jpg"
                                                    class="lazy-load attachment-woocommerce_gallery_thumbnail size-woocommerce_gallery_thumbnail wp-post-image"
                                                    alt="KZ ZST Pro 1BA+1DD Kulak İçi Kulaklık"
                                                    loading="lazy"
                                                    data-srcset="https://www.kzkulaklik.com/wp-content/uploads/2019/03/main-1-2-100x100.jpg 100w, https://www.kzkulaklik.com/wp-content/uploads/2019/03/main-1-2-300x300.jpg 300w, https://www.kzkulaklik.com/wp-content/uploads/2019/03/main-1-2-150x150.jpg 150w, https://www.kzkulaklik.com/wp-content/uploads/2019/03/main-1-2-768x768.jpg 768w, https://www.kzkulaklik.com/wp-content/uploads/2019/03/main-1-2-247x247.jpg 247w, https://www.kzkulaklik.com/wp-content/uploads/2019/03/main-1-2-510x510.jpg 510w, https://www.kzkulaklik.com/wp-content/uploads/2019/03/main-1-2.jpg 800w"
                                                    sizes="(max-width: 100px) 100vw, 100px"
                                                />
                                            </a>
                                        </div>
                                    </li>
                                    <li class="prod-dropdown has-dropdown">
                                        <a
                                            href="#"
                                            rel="next"
                                            class="button icon is-outline circle"
                                        >
                                            <i class="icon-angle-right"></i>
                                        </a>
                                        <div class="nav-dropdown">
                                            <a
                                                title="KZ AS10 5BA 5 Denge Armatür Kulaklık"
                                                href="#"
                                            >
                                                <img
                                                    width="100"
                                                    height="100"
                                                    src="data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%20100%20100%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3C%2Fsvg%3E"
                                                    data-src="https://www.kzkulaklik.com/wp-content/uploads/2019/03/KZ-AS10-main1-1-100x100.jpg"
                                                    class="lazy-load attachment-woocommerce_gallery_thumbnail size-woocommerce_gallery_thumbnail wp-post-image"
                                                    alt="KZ AS10 5BA 5 Adet Tam Denge Armatür Kulak İçi Kulaklık IEM"
                                                    loading="lazy"
                                                    data-srcset="https://www.kzkulaklik.com/wp-content/uploads/2019/03/KZ-AS10-main1-1-100x100.jpg 100w, https://www.kzkulaklik.com/wp-content/uploads/2019/03/KZ-AS10-main1-1-300x300.jpg 300w, https://www.kzkulaklik.com/wp-content/uploads/2019/03/KZ-AS10-main1-1-150x150.jpg 150w, https://www.kzkulaklik.com/wp-content/uploads/2019/03/KZ-AS10-main1-1-768x768.jpg 768w, https://www.kzkulaklik.com/wp-content/uploads/2019/03/KZ-AS10-main1-1-247x247.jpg 247w, https://www.kzkulaklik.com/wp-content/uploads/2019/03/KZ-AS10-main1-1-510x510.jpg 510w, https://www.kzkulaklik.com/wp-content/uploads/2019/03/KZ-AS10-main1-1.jpg 1000w"
                                                    sizes="(max-width: 100px) 100vw, 100px"
                                                />
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="product-footer">
                <div class="container">
                    <div class="woocommerce-tabs wc-tabs-wrapper container tabbed-content">
                        <!--Tabs-->
                        <ul
                            class="tabs wc-tabs product-tabs small-nav-collapse nav nav-uppercase nav-line-grow nav-left"
                            role="tablist"
                        >
                            <li
                                class="description_tab"
                                :class="[$store.state.selectedTab == 'description' ? ' active' : '']"
                                id="tab-title-description"
                                role="tab"
                                aria-controls="tab-description"
                            >
                                <a @click="$store.dispatch('selectTab', 'description')">Açıklama</a>
                            </li>
                            <li
                                class="odeme-ve-teslimat_tab"
                                :class="[$store.state.selectedTab == 'payment' ? ' active' : '']"
                                id="tab-title-odeme-ve-teslimat"
                                role="tab"
                                aria-controls="tab-odeme-ve-teslimat"
                            >
                                <a @click="$store.dispatch('selectTab', 'payment')">Ödeme ve Teslimat</a>
                            </li>
                            <li
                                class="garanti-ve-iade_tab"
                                :class="[$store.state.selectedTab == 'warranty' ? ' active' : '']"
                                id="tab-title-garanti-ve-iade"
                                role="tab"
                                aria-controls="tab-garanti-ve-iade"
                            >
                                <a @click="$store.dispatch('selectTab', 'warranty')">Garanti ve İade</a>
                            </li>
                            <li
                                class="reviews_tab"
                                :class="[$store.state.selectedTab == 'reviews' ? ' active' : '']"
                                id="tab-title-reviews"
                                role="tab"
                                aria-controls="tab-reviews"
                            >
                                <a @click="$store.dispatch('selectTab', 'reviews')">İnceleme ({{$store.getters.reviewCount}})</a>
                            </li>
                        </ul>
                        <!-- active classına sahip tab gözükecek-->
                        <div class="tab-panels">
                            <!-- tab-description -->
                            <DescriptionTab :class="[$store.state.selectedTab == 'description' ? ' active' : '']"/>
                            <!-- tab-odeme-ve-teslimat -->
                            <PaymentAndDelivery :class="[$store.state.selectedTab == 'payment' ? ' active' : '']"/>
                            <!-- tab-garanti-ve-iade -->
                            <WarrantyAndReturn :class="[$store.state.selectedTab == 'warranty' ? ' active' : '']"/>
                            <!-- tab-incelemeler-->
                            <Reviews :class="[$store.state.selectedTab == 'reviews' ? ' active' : '']"/>
                        </div>
                    </div>
                    <!-- ilgili urunlerin gelecegi yer-->
                    <RelatedProducts />
                </div>
            </div>
        </div>
    </div>
</template>
