<script>
export default {
  name: 'Review',
  methods: {
    styleP (a) {
      return 'width: ' + a * 20 + '%'
    }
  }
}
</script>

<template>
    <li
        class="review byuser comment-author-emre-demir even thread-even depth-1"
        id="li-comment-32055"
    >
        <div id="comment-32055" class="comment_container review-item flex-row align-top"
            v-for="r in $store.getters.currentReviews" :key="r.id"
        >
            <div class="flex-col">
                <img
                    src="https://secure.gravatar.com/avatar/f4ea9547b4062a695c25c1476dea4583?s=60&amp;d=mm&amp;r=g"
                    data-src="https://secure.gravatar.com/avatar/f4ea9547b4062a695c25c1476dea4583?s=60&amp;d=mm&amp;r=g"
                    srcset="https://secure.gravatar.com/avatar/f4ea9547b4062a695c25c1476dea4583?s=120&amp;d=mm&amp;r=g 2x"
                    data-srcset="https://secure.gravatar.com/avatar/f4ea9547b4062a695c25c1476dea4583?s=120&amp;d=mm&amp;r=g 2x"
                    class="avatar avatar-60 photo lazy-load-active"
                    height="60"
                    width="60"
                    loading="lazy"
                />
            </div>
            <div class="comment-text flex-col flex-grow">
                <div class="star-rating" role="img" aria-label="5 üzerinden 5 oy aldı">
                    <span :style="styleP(r.star)">
                        5 üzerinden
                        <strong class="rating">{{r.star}}</strong> oy aldı
                    </span>
                </div>
                <p class="meta">
                    <strong class="woocommerce-review__author">{{r.username}}</strong>
                    <span class="woocommerce-review__dash">-</span>
                    <time
                        class="woocommerce-review__published-date"
                        datetime="2021-07-26T16:13:40+03:00"
                    >{{r.commnetDate}}</time>
                </p>
                <div class="description">
                    <p>{{r.comment}}</p>
                </div>
            </div>
        </div>
    </li>
</template>
