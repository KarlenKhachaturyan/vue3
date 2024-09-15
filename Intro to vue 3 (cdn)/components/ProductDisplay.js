app.component('ProductDisplay', {
    props: ['msg'],
    template:
        `  <div style="display: flex; gap: 50px; border-top: 1px solid green; padding: 10px 0 0 0;">
        <img width="400" height="400" :src="selected.image" alt="" />
        <div>
            <div>
                <span v-if="selected.count > 0">In Stock</span>
                <span v-else>Out of Stock</span>
            </div>
            <h1>{{ msg }}</h1>
            <div style="margin-bottom: 10px;">
                <ul v-for="(detail, id) in details" :key="id">
                    <li>{{detail}}</li>
                </ul>
            </div> 
            <div
                v-for="(variant, index) in variants"
                @mouseover="updateVariant(index)"
                :key="variant.id"
                style="margin-bottom: 10px; width: 50px; height: 50px; border: 1px solid lightgrey; border-radius: 50%"
                :style="{backgroundColor: variant.color}"
            >
            </div>
            <button 
                :class="{'disabledButton': availableProduct}" 
                :disabled="availableProduct" 
                @click="addToCart" 
                style="padding: 20px; background-color: darkslategrey; color: white;cursor: pointer; border: none; border-radius: 20px;"
            >
                Add to card
            </button>
            <button 
                @click="removeFromCart" 
                style="padding: 20px; background-color: indianred; color: white;cursor: pointer; border: none; border-radius: 20px;"
            >
                Remove from card
            </button>
        </div>
    </div>`,
    data() {
        return {
            selectedProduct: 0,
            url: "https://www.google.com/",
            inStock: true,
            details: ['50% ...', '20% ....', '30% .....'],
            variants: [
                {id: 1, color: 'green', image: "./assets/images/warior-1.jpg", count: 10},
                {id: 2, color: 'blue', image: './assets/images/warior-2.png', count: 0},
            ],
        }
    },
    methods: {
        updateImage(imageUrl) {
            this.img = imageUrl
        },
        updateVariant(id) {
            this.selectedProduct = id
        },
        addToCart() {
            this.$emit('addToCart')
        },
        removeFromCart() {
            this.$emit('removeFromCart')
        }
    },
    computed: {
        selected() {
            return this.variants[this.selectedProduct]
        },
        availableProduct() {
            return this.variants[this.selectedProduct].count === 0
        }
    }
})