<script>
export default {
  name: 'FilterTop',
  props: {
    currentPage: String
  }
}
</script>

<template>
    <div class="shop-page-title category-page-title page-title">
        <div class="page-title-inner flex-row medium-flex-wrap container">
            <div class="flex-col flex-grow medium-text-center">
                <div class="is-medium">
                    <nav class="woocommerce-breadcrumb breadcrumbs uppercase">
                        <!--<a href="https://www.kzkulaklik.com">Ana Sayfa</a>-->
                        <router-link to="/">Ana Sayfa</router-link>
                        <span class="divider">/</span> {{currentPage}}
                    </nav>
                </div>
            </div>
            <div class="flex-col medium-text-center">
                <p class="woocommerce-result-count hide-for-medium">Gösterilen sonuç sayısı: 27</p>
                <form class="woocommerce-ordering" method="get">
                    <select name="orderby" class="orderby" aria-label="Sipariş">
                        <option value="popularity" >En çok incelenene göre sırala</option>
                        <option value="rating">En çok oy alana göre sırala</option>
                        <option value="date">En yeniye göre sırala</option>
                        <option value="price">Fiyata göre sırala: Düşükten yükseğe</option>
                        <option value="price-desc">Fiyata göre sırala: Yüksekten düşüğe</option>
                    </select>
                    <input type="hidden" name="paged" value="1" />
                </form>
            </div>
        </div>
    </div>
</template>
