<script>
export default {
  name: 'Search'
}
</script>

<template>
    <ul class="nav-dropdown nav-dropdown-default">
        <li class="header-search-form search-form html relative has-icon">
            <div class="header-search-form-wrapper">
                <div class="searchform-wrapper ux-search-box relative is-normal">
                    <form
                        role="search"
                        method="get"
                        class="searchform"
                        action="https://www.kzkulaklik.com/"
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
</template>