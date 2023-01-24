<script>
import Search from './Search.vue'
import CartPreview from './CartPreview.vue'

export default {
  name: 'Navbar',
  components: {
    Search,
    CartPreview
  }
}
</script>

<template>
 <header id="header" class="header">
    <div class="header-wrapper">
      <div id="masthead" class="header-main hide-for-sticky nav-dark">
        <div class="header-inner flex-row container logo-left medium-logo-center" role="navigation">
          <div id="logo" class="flex-col logo">
            <router-link to="/" title="KZ Kulaklık" rel="home" @click="$store.dispatch('selectPage', 'home')">
              <img
                width="110"
                height="68"
                src="https://www.kzkulaklik.com/wp-content/uploads/2021/08/KZ-logo-kzkulaklik.com_.png"
                class="header_logo header-logo"
                alt="KZ Kulaklık"
              />
              <img
                width="110"
                height="68"
                src="https://www.kzkulaklik.com/wp-content/uploads/2021/08/KZ-logo-kzkulaklik.com_.png"
                class="header-logo-dark"
                alt="KZ Kulaklık"
              />
            </router-link>
            <!--<a href="/" title="KZ Kulaklık" rel="home">
              <img
                width="110"
                height="68"
                src="https://www.kzkulaklik.com/wp-content/uploads/2021/08/KZ-logo-kzkulaklik.com_.png"
                class="header_logo header-logo"
                alt="KZ Kulaklık"
              />
              <img
                width="110"
                height="68"
                src="https://www.kzkulaklik.com/wp-content/uploads/2021/08/KZ-logo-kzkulaklik.com_.png"
                class="header-logo-dark"
                alt="KZ Kulaklık"
              />
            </a>-->
          </div>
          <div class="flex-col show-for-medium flex-left">
            <ul class="mobile-nav nav nav-left">
              <li class="nav-icon has-icon">
                <a
                  href="#"
                  data-open="#main-menu"
                  data-pos="center"
                  data-bg="main-menu-overlay"
                  data-color="dark"
                  class="is-small"
                  aria-label="Menu"
                  aria-controls="main-menu"
                  aria-expanded="false"
                >
                  <i class="icon-menu"></i>
                  <span class="menu-title uppercase hide-for-small">Menu</span>
                </a>
              </li>
              <li
                class="header-search header-search-dropdown has-icon has-dropdown menu-item-has-children"
              >
                <a href="#" aria-label="Ara" class="is-small">
                  <i class="icon-search"></i>
                </a>
                <ul class="nav-dropdown nav-dropdown-default">
                  <li class="header-search-form search-form html relative has-icon">
                    <div class="header-search-form-wrapper">
                      <div class="searchform-wrapper ux-search-box relative is-normal">
                        <form
                          role="search"
                          method="get"
                          class="searchform"
                        >
                          <div class="flex-row relative">
                            <div class="flex-col flex-grow">
                              <label
                                class="screen-reader-text"
                                for="woocommerce-product-search-field-0"
                              >Ara:</label>
                              <input
                                type="search"
                                id="woocommerce-product-search-field-0"
                                class="search-field mb-0"
                                placeholder="Ara…"
                                value
                                name="s"
                              />
                              <input type="hidden" name="post_type" value="product" />
                            </div>
                            <div class="flex-col">
                              <button
                                type="submit"
                                value="Ara"
                                class="ux-search-submit submit-button secondary button icon mb-0"
                                aria-label="Submit"
                              >
                                <i class="icon-search"></i>
                              </button>
                            </div>
                          </div>
                          <div class="live-search-results text-left z-top"></div>
                        </form>
                      </div>
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div class="flex-col hide-for-medium flex-left flex-grow">
            <ul
              class="header-nav header-nav-main nav nav-left nav-line-bottom nav-size-large nav-spacing-xlarge"
            >
                <!--current-dropdown eklendiğinde arama barı gözükecek-->
              <li
                class="header-search header-search-dropdown has-icon has-dropdown menu-item-has-children"
              >
                <a href="#" aria-label="Ara" class="is-small">
                  <i class="icon-search"></i>
                </a>
                <Search />
              </li>
              <li
                id="menu-item-43"
                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-19 current_page_item menu-item-43 menu-item-design-default"
                :class="[$store.state.selectedPage == 'home' ? 'active' : '']"
              >
                <router-link to="/" class="nav-top-link" @click="$store.dispatch('selectPage','home')">Ana Sayfa</router-link>
                <!--<a href="./" aria-current="page" class="nav-top-link">Ana Sayfa</a>-->
              </li>
              <li
                id="menu-item-638"
                class="menu-item menu-item-type-custom menu-item-object-custom menu-item-638 menu-item-design-default"
                :class="[$store.state.selectedPage == 'kulaklik' ? 'active' : '']"
              >
                <router-link to="/kulakliklar" class="nav-top-link" @click="$store.dispatch('selectPage','kulaklik')">KZ Kulaklık</router-link>
                <!--<a href="./kulakliklar" class="nav-top-link">KZ Kulaklık</a>-->
              </li>
              <li
                id="menu-item-755"
                class="menu-item menu-item-type-custom menu-item-object-custom menu-item-755 menu-item-design-default"
                :class="[$store.state.selectedPage == 'kablolar' ? 'active' : '']"
              >
                <router-link to="/kablolar" class="nav-top-link" @click="$store.dispatch('selectPage','kablolar')">Kablolar</router-link>
                <!--<a href="./kablolar" class="nav-top-link">Kablolar</a>-->
              </li>
              <li
                id="menu-item-18902"
                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-18902 menu-item-design-default"
                :class="[$store.state.selectedPage == 'contact' ? 'active' : '']"
              >
                <router-link to="/contact" class="nav-top-link" @click="$store.dispatch('selectPage','contact')">Bize Ulaşın</router-link>
                <!--<a href="./contact" class="nav-top-link">Bize Ulaşın</a>-->
              </li>
            </ul>
          </div>
          <div class="flex-col hide-for-medium flex-right">
            <ul
              class="header-nav header-nav-main nav nav-right nav-line-bottom nav-size-large nav-spacing-xlarge"
            >
              <li class="html header-social-icons ml-0">
                <div class="social-icons follow-icons">
                  <a
                    href="https://www.facebook.com/kzkulaklikcom/"
                    target="_blank"
                    data-label="Facebook"
                    rel="noopener noreferrer nofollow"
                    class="icon plain facebook tooltip tooltipstered"
                  >
                    <i  class="icon-facebook"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/kzkulaklik/"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    data-label="Instagram"
                    class="icon plain instagram tooltip tooltipstered"
                  >
                    <i class="icon-instagram"></i>
                  </a>
                  <a
                    href="https://twitter.com/kzkulaklik"
                    target="_blank"
                    data-label="Twitter"
                    rel="noopener noreferrer nofollow"
                    class="icon plain twitter tooltip tooltipstered"
                  >
                    <i class="icon-twitter"></i>
                  </a>
                </div>
              </li>
              <li class="account-item has-icon" :class="[$store.state.selectedPage == 'login' ? 'active' : '']">
                <router-link to="/login" class="nav-top-link" @click="$store.dispatch('selectPage','login')">
                  <span v-if="$store.state.userMail === null">Giriş Yap</span>
                  <span v-else>{{$store.state.userMail}}</span>
                </router-link>
                <!--<a href="./loginPage" class="nav-top-link nav-top-not-logged-in">-->
              </li>
              <li class="header-divider "></li>
              <!-- class="current-dropdown" eklendiğinde sepet preview geliyor
              ilk li elementi nin içindeki ilk ul elementi görünür hale geliyor -->
              <CartPreview />
            </ul>
          </div>
          <div class="flex-col show-for-medium flex-right">
            <ul class="mobile-nav nav nav-right">
              <li class="cart-item has-icon">
                <!--<a
                  href="https://www.kzkulaklik.com/sepet/"
                  class="header-cart-link off-canvas-toggle nav-top-link is-small"
                  data-open="#cart-popup"
                  data-class="off-canvas-cart"
                  title="Sepet"
                  data-pos="right"
                >
                  <i class="icon-shopping-basket" data-icon-label="0"></i>
                </a>-->
                <router-link to="/cart" @click="$store.dispatch('selectPage', '')"
                  class="header-cart-link off-canvas-toggle nav-top-link is-small"
                  data-open="#cart-popup"
                  data-class="off-canvas-cart"
                  title="Sepet"
                  data-pos="right">
                   <i class="icon-shopping-basket" data-icon-label="0"></i>
                   </router-link>
                <div id="cart-popup" class="mfp-hide widget_shopping_cart">
                  <div class="cart-popup-inner inner-padding">
                    <div class="cart-popup-title text-center">
                      <h4 class="uppercase">Sepet</h4>
                      <div class="is-divider"></div>
                    </div>
                    <div class="widget_shopping_cart_content">
                      <p class="woocommerce-mini-cart__empty-message">Sepetinizde ürün bulunmuyor.</p>
                    </div>
                    <div class="cart-sidebar-content relative"></div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="container">
          <div class="top-divider full-width"></div>
        </div>
      </div>
      <div id="wide-nav" class="header-bottom wide-nav hide-for-sticky show-for-medium">
        <div class="flex-row container">
          <div class="flex-col show-for-medium flex-grow">
            <ul class="nav header-bottom-nav nav-center mobile-nav">
              <li class="html header-social-icons ml-0">
                <div class="social-icons follow-icons">
                  <a
                    href="https://www.facebook.com/kzkulaklikcom/"
                    target="_blank"
                    data-label="Facebook"
                    rel="noopener noreferrer nofollow"
                    class="icon plain facebook tooltip tooltipstered"
                  >
                    <i class="icon-facebook"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/kzkulaklik/"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    data-label="Instagram"
                    class="icon plain instagram tooltip tooltipstered"
                  >
                    <i class="icon-instagram"></i>
                  </a>
                  <a
                    href="https://twitter.com/kzkulaklik"
                    target="_blank"
                    data-label="Twitter"
                    rel="noopener noreferrer nofollow"
                    class="icon plain twitter tooltip tooltipstered"
                  >
                    <i class="icon-twitter-tight"></i>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="header-bg-container fill">
        <div class="header-bg-image fill"></div>
        <div class="header-bg-color fill"></div>
      </div>
    </div>
  </header>
</template>
