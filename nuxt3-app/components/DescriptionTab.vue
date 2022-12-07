<script>
export default {
  name: 'DescriptionTab'
}
</script>

<template>
    <div
        class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content"
        id="tab-description"
        role="tabpanel"
        aria-labelledby="tab-title-description"
    >
        <h1>
            <span
                style="color: #0788d9;"
            >{{$store.getters.currentDescription.descriptionTitle}}</span>
        </h1>
        <p>
            <strong>Ürün Teknik Özellikleri</strong>
        </p>
        <ul>
            <li v-for="(spec, index) in $store.getters.currentDescription.specs" :key="index">{{spec}}</li>
        </ul>
        <p>
            <strong>Kutu İçeriği</strong>
        </p>
        <ul>
            <li>{{$store.getters.currentDescription.boxIncluded}}</li>
        </ul>
    </div>
</template>
