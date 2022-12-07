<script>
import ProductPreview from './ProductPreview.vue'

export default {
  name: 'RelatedProducts',
  components: {
    ProductPreview
  }
}
</script>

<template>
    <div class="related related-products-wrapper product-section">
        <h3
            class="product-section-title container-width product-section-title-related pt-half pb-half uppercase"
        >İlgili ürünler</h3>
        <div
            class="row has-equal-box-heights large-columns-3 medium-columns-3 small-columns-2 row-small slider row-slider slider-nav-reveal slider-nav-push is-draggable flickity-enabled slider-lazy-load-active"
            data-flickity-options="{&quot;imagesLoaded&quot;: true, &quot;groupCells&quot;: &quot;100%&quot;, &quot;dragThreshold&quot; : 5, &quot;cellAlign&quot;: &quot;left&quot;,&quot;wrapAround&quot;: true,&quot;prevNextButtons&quot;: true,&quot;percentPosition&quot;: true,&quot;pageDots&quot;: false, &quot;rightToLeft&quot;: false, &quot;autoPlay&quot; : false}"
            tabindex="0"
        >
            <div class="flickity-viewport" style="height: 456.766px; touch-action: pan-y;">
                <div class="flickity-slider" style="left: 0px; transform: translateX(0);">
                    <!-- ProductPreview lerin gelecegi yer -->
                    <ProductPreview style="position: absolute; left: 0%;" />
                </div>
            </div>
            <button
                class="flickity-button flickity-prev-next-button previous"
                type="button"
                aria-label="Previous"
            >
                <svg class="flickity-button-icon" viewBox="0 0 100 100">
                    <path d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z" class="arrow" />
                </svg>
            </button>
            <button
                class="flickity-button flickity-prev-next-button next"
                type="button"
                aria-label="Next"
            >
                <svg class="flickity-button-icon" viewBox="0 0 100 100">
                    <path
                        d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z"
                        class="arrow"
                        transform="translate(100, 100) rotate(180) "
                    />
                </svg>
            </button>
        </div>
    </div>
</template>
