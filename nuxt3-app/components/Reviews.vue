<script>
import Review from './Review.vue'

export default {
  name: 'Reviews',
  components: {
    Review
  }
}

</script>

<template>
    <div
        class="woocommerce-Tabs-panel woocommerce-Tabs-panel--reviews panel entry-content"
        id="tab-reviews"
        role="tabpanel"
        aria-labelledby="tab-title-reviews"
    >
        <div id="reviews" class="woocommerce-Reviews row">
            <div id="comments" class="col large-7">
                <h3 class="woocommerce-Reviews-title normal">
                    <span>{{$store.getters.selectedProduct.productName}}</span> için {{$store.getters.reviewCount}} inceleme
                </h3>
                <ol class="commentlist">
                    <!-- Review componentlerin gelecegi yer-->
                    <Review/>
                </ol>
            </div>
            <div id="review_form_wrapper" class="large-5 col">
                <div id="review_form" class="col-inner">
                    <div class="review-form-inner has-border">
                        <div id="respond" class="comment-respond">
                            <h3 id="reply-title" class="comment-reply-title">
                                İnceleme yap
                                <small>
                                    <a
                                        rel="nofollow"
                                        id="cancel-comment-reply-link"
                                        href="/urun/kz-edx-1dd-mikrofonlu-kulak-ici-kulaklik/#respond"
                                        style="display:none;"
                                    >Cevabı iptal et</a>
                                </small>
                            </h3>
                            <form
                                action="https://www.kzkulaklik.com/wp-comments-post.php"
                                method="post"
                                id="commentform"
                                class="comment-form"
                                novalidate
                            >
                                <div class="comment-form-rating">
                                    <label for="rating">
                                        Oyunuz&nbsp;
                                        <span class="required">*</span>
                                    </label>
                                    <p class="stars">
                                        <span>
                                            <a class="star-1" href="#">1</a>
                                            <a class="star-2" href="#">2</a>
                                            <a class="star-3" href="#">3</a>
                                            <a class="star-4" href="#">4</a>
                                            <a class="star-5" href="#">5</a>
                                        </span>
                                    </p>
                                    <select
                                        name="rating"
                                        id="rating"
                                        required
                                        style="display: none;"
                                    >
                                        <option value>Oran…</option>
                                        <option value="5">Mükemmel</option>
                                        <option value="4">İyi</option>
                                        <option value="3">Ortalama</option>
                                        <option value="2">Kötü değil</option>
                                        <option value="1">İyi değil</option>
                                    </select>
                                </div>
                                <p class="comment-form-comment">
                                    <label for="comment">
                                        İncelemeniz&nbsp;
                                        <span class="required">*</span>
                                    </label>
                                    <textarea
                                        id="comment"
                                        name="comment"
                                        cols="45"
                                        rows="8"
                                        required
                                    ></textarea>
                                </p>
                                <p class="comment-form-author">
                                    <label for="author">
                                        İsim&nbsp;
                                        <span class="required">*</span>
                                    </label>
                                    <input
                                        id="author"
                                        name="author"
                                        type="text"
                                        value
                                        size="30"
                                        required
                                    />
                                </p>
                                <p class="comment-form-email">
                                    <label for="email">
                                        E-posta&nbsp;
                                        <span class="required">*</span>
                                    </label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        value
                                        size="30"
                                        required
                                    />
                                </p>
                                <p class="form-submit">
                                    <input
                                        name="submit"
                                        type="submit"
                                        id="submit"
                                        class="submit"
                                        value="Gönder"
                                    />
                                    <input
                                        type="hidden"
                                        name="comment_post_ID"
                                        value="14394"
                                        id="comment_post_ID"
                                    />
                                    <input
                                        type="hidden"
                                        name="comment_parent"
                                        id="comment_parent"
                                        value="0"
                                    />
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
