<script>
export default {
  name: 'Cart'
}
</script>

<template>
    <div id="content" class="content-area page-wrapper" role="main" v-if="$store.state.cart.length !== 0">
        <div class="row row-main">
            <div class="large-12 col">
                <div class="col-inner">
                    <div class="woocommerce">
                        <div class="woocommerce-notices-wrapper">
                            <div class="woocommerce-message message-wrapper" role="alert">
                                <div
                                    class="message-container container success-color medium-text-center"
                                >
                                    <i class="icon-checkmark"></i>
                                    <a
                                        href="#"
                                        tabindex="1"
                                        class="button wc-forward"
                                    >Alışverişe devam et</a> “KZ ZST Pro 1BA+1DD Hibrit Kulaklık” sepetinize eklendi.
                                </div>
                            </div>
                        </div>
                        <div class="woocommerce row row-large row-divided">
                            <div class="col large-7 pb-0 cart-auto-refresh">
                                <form
                                    class="woocommerce-cart-form"
                                    method="post"
                                >
                                    <div class="cart-wrapper sm-touch-scroll">
                                        <table
                                            class="shop_table shop_table_responsive cart woocommerce-cart-form__contents"
                                            cellspacing="0"
                                        >
                                            <thead>
                                                <tr>
                                                    <th class="product-name" colspan="3">Ürün</th>
                                                    <th class="product-price">Fiyat</th>
                                                    <th class="product-quantity">Miktar</th>
                                                    <th class="product-subtotal">Ara Toplam</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <!--Urunler-->
                                                <tr
                                                    class="woocommerce-cart-form__cart-item cart_item"
                                                    v-for="p in $store.state.cart" :key="p.id"
                                                >
                                                    <td class="product-remove">
                                                        <router-link id="removeProduct" to="/cart" @click="$store.dispatch('removeFromCart', p.id)"
                                                            class="remove"
                                                            aria-label="Bu ürünü çıkar"
                                                            data-product_id="160"
                                                            data-product_sku
                                                        >x</router-link>
                                                    </td>

                                                    <td class="product-thumbnail">
                                                        <router-link :to="'/product/' + p.id">
                                                            <img
                                                                width="247"
                                                                height="247"
                                                                :src= "$store.state.products.find(product => product.id === p.id).altimgSrc"
                                                                class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail lazy-load-active"
                                                                loading="lazy"
                                                                sizes="(max-width: 247px) 100vw, 247px"
                                                            />
                                                        </router-link>
                                                        <!--
                                                        <a
                                                            href="https://www.kzkulaklik.com/urun/kz-zsn-1ba1dd-hibrit-kulaklik/?attribute_renk=Siyah"
                                                        >
                                                            <img
                                                                width="247"
                                                                height="247"
                                                                src="https://www.kzkulaklik.com/wp-content/uploads/2019/03/ZSN-Pro-Siyah-Mik1-247x247.jpg"
                                                                data-src="https://www.kzkulaklik.com/wp-content/uploads/2019/03/ZSN-Pro-Siyah-Mik1-247x247.jpg"
                                                                class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail lazy-load-active"
                                                                loading="lazy"
                                                                srcset="https://www.kzkulaklik.com/wp-content/uploads/2019/03/ZSN-Pro-Siyah-Mik1-247x247.jpg 247w, https://www.kzkulaklik.com/wp-content/uploads/2019/03/ZSN-Pro-Siyah-Mik1-150x150.jpg 150w, https://www.kzkulaklik.com/wp-content/uploads/2019/03/ZSN-Pro-Siyah-Mik1-300x300.jpg 300w, https://www.kzkulaklik.com/wp-content/uploads/2019/03/ZSN-Pro-Siyah-Mik1-768x768.jpg 768w, https://www.kzkulaklik.com/wp-content/uploads/2019/03/ZSN-Pro-Siyah-Mik1-510x510.jpg 510w, https://www.kzkulaklik.com/wp-content/uploads/2019/03/ZSN-Pro-Siyah-Mik1-100x100.jpg 100w, https://www.kzkulaklik.com/wp-content/uploads/2019/03/ZSN-Pro-Siyah-Mik1.jpg 800w"
                                                                data-srcset="https://www.kzkulaklik.com/wp-content/uploads/2019/03/ZSN-Pro-Siyah-Mik1-247x247.jpg 247w, https://www.kzkulaklik.com/wp-content/uploads/2019/03/ZSN-Pro-Siyah-Mik1-150x150.jpg 150w, https://www.kzkulaklik.com/wp-content/uploads/2019/03/ZSN-Pro-Siyah-Mik1-300x300.jpg 300w, https://www.kzkulaklik.com/wp-content/uploads/2019/03/ZSN-Pro-Siyah-Mik1-768x768.jpg 768w, https://www.kzkulaklik.com/wp-content/uploads/2019/03/ZSN-Pro-Siyah-Mik1-510x510.jpg 510w, https://www.kzkulaklik.com/wp-content/uploads/2019/03/ZSN-Pro-Siyah-Mik1-100x100.jpg 100w, https://www.kzkulaklik.com/wp-content/uploads/2019/03/ZSN-Pro-Siyah-Mik1.jpg 800w"
                                                                sizes="(max-width: 247px) 100vw, 247px"
                                                            />
                                                        </a>-->
                                                    </td>

                                                    <td class="product-name" data-title="Ürün">
                                                        <router-link :to="'/product/' + p.id">{{$store.getters.returnProductName(p.id)}}</router-link>
                                                        <!--
                                                        <a
                                                            href="https://www.kzkulaklik.com/urun/kz-zsn-1ba1dd-hibrit-kulaklik/?attribute_renk=Siyah"
                                                        >KZ ZSN Pro 1BA+1DD Hibrit Kulaklık - Siyah</a>-->
                                                        <div
                                                            class="show-for-small mobile-product-price"
                                                        >
                                                            <span
                                                                class="mobile-product-price__qty"
                                                            >2 x</span>
                                                            <span
                                                                class="woocommerce-Price-amount amount"
                                                            >
                                                                <bdi>
                                                                    {{$store.getters.listingTotal(p.id)}}&nbsp;
                                                                    <span
                                                                        class="woocommerce-Price-currencySymbol"
                                                                    >TL</span>
                                                                </bdi>
                                                            </span>
                                                        </div>
                                                    </td>

                                                    <td class="product-price" data-title="Fiyat">
                                                        <span
                                                            class="woocommerce-Price-amount amount"
                                                        >
                                                            <bdi>
                                                                <!---->
                                                                {{$store.state.products.find(product => product.id === p.id).discountedPrice}}&nbsp;
                                                                <span
                                                                    class="woocommerce-Price-currencySymbol"
                                                                >TL</span>
                                                            </bdi>
                                                        </span>
                                                    </td>

                                                    <td
                                                        class="product-quantity"
                                                        data-title="Miktar"
                                                    >
                                                        <div class="quantity buttons_added">
                                                            <input
                                                                type="button"
                                                                value="-"
                                                                class="minus button is-form"
                                                                @click="$store.dispatch('decreaseCount', p.id)"
                                                            />
                                                            <!---->
                                                            <label
                                                                class="screen-reader-text"
                                                                for="quantity_6179764c78096"
                                                            ></label>
                                                            <input
                                                                type="number"
                                                                v-model="p.count"
                                                                class="input-text qty text"
                                                                title="Miktar"
                                                                size="4"
                                                                inputmode="numeric"
                                                            />
                                                            <input
                                                                type="button"
                                                                value="+"
                                                                class="plus button is-form"
                                                                @click="$store.dispatch('increaseCount', p.id)"
                                                            />
                                                        </div>
                                                    </td>

                                                    <td
                                                        class="product-subtotal"
                                                        data-title="Ara Toplam"
                                                    >
                                                        <span
                                                            class="woocommerce-Price-amount amount"
                                                        >
                                                            <bdi>
                                                                <!---->
                                                                {{$store.state.products.find(product => product.id === p.id).discountedPrice * $store.state.cart.find(c => c.id ===p.id).count}}&nbsp;
                                                                <span
                                                                    class="woocommerce-Price-currencySymbol"
                                                                >TL</span>
                                                            </bdi>
                                                        </span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td colspan="6" class="actions clear">
                                                        <div
                                                            class="continue-shopping pull-left text-left"
                                                        >
                                                            <router-link to="/" class="button-continue-shopping button primary is-outline">←&nbsp;Alışverişe devam et</router-link>
                                                            <!--<a
                                                                class="button-continue-shopping button primary is-outline"
                                                                href="https://www.kzkulaklik.com/magaza/"
                                                            >←&nbsp;Alışverişe devam et</a>-->
                                                        </div>

                                                        <button
                                                            type="submit"
                                                            class="button primary mt-0 pull-left small"
                                                            name="update_cart"
                                                            value="Sepeti güncelle"
                                                            disabled
                                                            aria-disabled="true"
                                                        >Sepeti güncelle</button>

                                                        <input
                                                            type="hidden"
                                                            id="woocommerce-cart-nonce"
                                                            name="woocommerce-cart-nonce"
                                                            value="6cbeaa686c"
                                                        />
                                                        <input
                                                            type="hidden"
                                                            name="_wp_http_referer"
                                                            value="/sepet/"
                                                        />
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </form>
                            </div>

                            <div class="cart-collaterals large-5 col pb-0">
                                <div class="cart-sidebar col-inner">
                                    <div class="cart_totals">
                                        <table cellspacing="0">
                                            <thead>
                                                <tr>
                                                    <th
                                                        class="product-name"
                                                        colspan="2"
                                                        style="border-width:3px;"
                                                    >Sepet toplamları</th>
                                                </tr>
                                            </thead>
                                        </table>

                                        <h2>Sepet toplamları</h2>

                                        <table
                                            cellspacing="0"
                                            class="shop_table shop_table_responsive"
                                        >
                                            <tbody>
                                                <tr class="cart-subtotal">
                                                    <th>Ara Toplam</th>
                                                    <td data-title="Ara Toplam">
                                                        <span
                                                            class="woocommerce-Price-amount amount"
                                                        >
                                                            <bdi>
                                                                <!---->
                                                                {{$store.getters.cartTotal}}&nbsp;
                                                                <span
                                                                    class="woocommerce-Price-currencySymbol"
                                                                >TL</span>
                                                            </bdi>
                                                        </span>
                                                    </td>
                                                </tr>

                                                <tr class="woocommerce-shipping-totals shipping">
                                                    <td class="shipping__inner" colspan="2">
                                                        <table class="shipping__table">
                                                            <tbody>
                                                                <tr>
                                                                    <th>Gönderim</th>
                                                                    <td data-title="Gönderim">
                                                                        <ul
                                                                            id="shipping_method"
                                                                            class="shipping__list woocommerce-shipping-methods"
                                                                        >
                                                                            <li
                                                                                class="shipping__list_item"
                                                                            >
                                                                                <input
                                                                                    type="hidden"
                                                                                    name="shipping_method[0]"
                                                                                    data-index="0"
                                                                                    id="shipping_method_0_free_shipping2"
                                                                                    value="free_shipping:2"
                                                                                    class="shipping_method"
                                                                                />
                                                                                <label
                                                                                    class="shipping__list_label"
                                                                                    for="shipping_method_0_free_shipping2"
                                                                                >Ücretsiz kargo</label>
                                                                            </li>
                                                                        </ul>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>

                                                <tr class="order-total">
                                                    <th>Toplam</th>
                                                    <td data-title="Toplam">
                                                        <strong>
                                                            <span
                                                                class="woocommerce-Price-amount amount"
                                                            >
                                                                <bdi>
                                                                    <!---->
                                                                     {{$store.getters.cartTotal}}&nbsp;
                                                                    <span
                                                                        class="woocommerce-Price-currencySymbol"
                                                                    >TL</span>
                                                                </bdi>
                                                            </span>
                                                        </strong>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>

                                        <div class="wc-proceed-to-checkout">
                                            <router-link
                                                to="/paymentAndDelivery"
                                                class="checkout-button button alt wc-forward"
                                            >Satın AL</router-link>
                                        </div>
                                    </div>
                                    <div class="cart-sidebar-content relative"></div>
                                </div>
                            </div>
                        </div>

                        <div class="cart-footer-content after-cart-content relative"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--sepet boş ise-->
    <div id="content" class="content-area page-wrapper" role="main" v-else>
    <div class="row row-main">
        <div class="large-12 col">
            <div class="col-inner">
                <div class="woocommerce">
                    <div class="text-center pt pb">
                        <div class="woocommerce-notices-wrapper"></div>
                        <p class="cart-empty woocommerce-info">Sepetiniz şu anda boş.</p>
                        <p class="return-to-shop">
                            <router-link to="/" class="button primary wc-backward">
                            Mağazaya geri dön</router-link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
