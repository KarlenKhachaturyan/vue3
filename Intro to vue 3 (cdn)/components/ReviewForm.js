app.component('ReviewForm', {
    template: `
        <div>
            <form @submit.prevent="onSubmit">
                <h3>leave a REVIEW</h3>
        
                <label for="name">Name:</label>
                <input type="text" v-model="name" id="name" name="name" />
        
                <label for="review">Review:</label>
                <textarea type="text" v-model="review" id="review" name="name" />
        
                <label for="rating">Rating</label>
                <select name="rating" id="rating" v-model.number="rating">
                    <option value="5">5</option>
                    <option value="4">4</option>
                    <option value="3">3</option>
                    <option value="2">2</option>
                    <option value="1">1</option>
                </select>
        
                <input type="submit" value="Submit" />
            </form>
        </div>
    `,
    data() {
        return {
            name: "",
            review: "",
            rating: null
        }
    },
    methods: {
        onSubmit() {
            this.$emit('submit-review', {
                name: this.name,
                review: this.review,
                rating: this.rating
            })
        }
    }
})