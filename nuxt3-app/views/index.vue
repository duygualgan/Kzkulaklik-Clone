<script>
import ProductPreview from '../components/ProductPreview.vue'

export default {
  name: 'IndexPage',
  components: {
    ProductPreview
  },
  mounted () {
    this.$store.dispatch('filterProducts', 'all')
  }
}
</script>

<template>
<div>
  <body
    class="home page-template-default page page-id-19 theme-flatsome woocommerce-js lightbox nav-dropdown-has-arrow nav-dropdown-has-shadow nav-dropdown-has-border"
  >
    <div id="wrapper">
      <!-- navbarın gelecegi yer -->
      <main id="main">
        <div id="content" class="content-area page-wrapper" role="main">
          <div class="row row-main">
            <div class="large-12 col">
              <div class="col-inner">
                <div class="img has-hover x md-x lg-x y md-y lg-y" id="image_822587038">
                  <div class="img-inner dark" style="margin:0 0px 0px 0px;">
                    <!-- resim -->
                    <img
                      width="1020"
                      height="340"
                      src="https://www.kzkulaklik.com/wp-content/uploads/2021/03/KZ.kulaklik-KnowledgeZenith-1024x341.jpg"
                      data-src="https://www.kzkulaklik.com/wp-content/uploads/2021/03/KZ.kulaklik-KnowledgeZenith-1024x341.jpg"
                      class="attachment-large size-large lazy-load-active"
                      alt="KZ Kulaklık"
                      loading="lazy"
                      srcset="https://www.kzkulaklik.com/wp-content/uploads/2021/03/KZ.kulaklik-KnowledgeZenith-1024x341.jpg 1024w, https://www.kzkulaklik.com/wp-content/uploads/2021/03/KZ.kulaklik-KnowledgeZenith-300x100.jpg 300w, https://www.kzkulaklik.com/wp-content/uploads/2021/03/KZ.kulaklik-KnowledgeZenith-768x256.jpg 768w, https://www.kzkulaklik.com/wp-content/uploads/2021/03/KZ.kulaklik-KnowledgeZenith-247x82.jpg 247w, https://www.kzkulaklik.com/wp-content/uploads/2021/03/KZ.kulaklik-KnowledgeZenith-510x170.jpg 510w, https://www.kzkulaklik.com/wp-content/uploads/2021/03/KZ.kulaklik-KnowledgeZenith.jpg 1200w"
                      data-srcset="https://www.kzkulaklik.com/wp-content/uploads/2021/03/KZ.kulaklik-KnowledgeZenith-1024x341.jpg 1024w, https://www.kzkulaklik.com/wp-content/uploads/2021/03/KZ.kulaklik-KnowledgeZenith-300x100.jpg 300w, https://www.kzkulaklik.com/wp-content/uploads/2021/03/KZ.kulaklik-KnowledgeZenith-768x256.jpg 768w, https://www.kzkulaklik.com/wp-content/uploads/2021/03/KZ.kulaklik-KnowledgeZenith-247x82.jpg 247w, https://www.kzkulaklik.com/wp-content/uploads/2021/03/KZ.kulaklik-KnowledgeZenith-510x170.jpg 510w, https://www.kzkulaklik.com/wp-content/uploads/2021/03/KZ.kulaklik-KnowledgeZenith.jpg 1200w"
                      sizes="(max-width: 1020px) 100vw, 1020px"
                    />
                  </div>
                </div>
                <div class="container section-title-container">
                  <h3 class="section-title section-title-center">
                    <b></b>
                    <span class="section-title-main">KZ Kulaklık Modelleri</span>
                    <b></b>
                  </h3>
                </div>
                <!-- Product container -->
                <div
                  class="row large-columns-3 medium-columns- small-columns-2 row-normal has-shadow row-box-shadow-1 row-box-shadow-1-hover"
                >
                    <!-- ProductPreviewlerin geleceği yerler -->
                    <ProductPreview/>
                </div>
                <hr />
                <!-- footer öncesi yazılar -->
                <h1>
                  <span
                    style="font-size: 85%;"
                  >KZ (Knowledge Zenith) markalı kulak içi kulaklıklar en uygun fiyatlarla Türkiye’de!</span>
                </h1>
                <p>
                  <span
                    style="font-size: 95%;"
                  >2013 yılından itibaren KZ markası ile üretimi yapılan ürünler; özellikle kablolu kulak içi kulaklık kategorisinde tüm dünyada üstün ses kalitesi ve uygun fiyatları ile kendini kanıtlamıştır.&nbsp;</span>
                </p>
                <p>
                  <span
                    style="font-size: 95%;"
                  >Son zamanlarda firma hibrit ve tam denge armatürlü kulaklıklarla da adını duyurmuş ve dünyada en çok satılan ve fiyat/performans derecesi en iyi kulaklık markalarından biri olmuştur. Öne çıkan modelleri KZ ZSN Pro, KZ ZSN Pro X, KZ ZS10 Pro, KZ ZSX, KZ ZAX, KZ ZST Pro, KZ ZSTX, KZ DQ6, KZ ZS3, KZ ASF, KZ AS12, KZ ATR, KZ ED12, QKZ VK4 tüm dünyadaki kulaklık inceleme sitelerinden tam not almış ve en çok tavsiye edilen kulaklıklar olmuşlardır.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <!-- footer'ın gelecegi yer -->
    </div>
  </body>
</div>
</template>
