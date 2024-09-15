const app = Vue.createApp({
    data() {
        return {
            product: "Something",
            description: "Some description",
            cartCount: 0,
            msg: 'fromParent'
        }
    },
    methods: {
        increaseCartCount() {
            console.log(this.cartCount)
            this.cartCount++
        },
        descreaseCartCount() {
            if (this.cartCount === 0) return
            this.cartCount--
        },
        handleReview({name, review, rating}) {
            console.log('submitted')
            console.log(name)
            console.log(review)
            console.log(rating)
        }
    },
})