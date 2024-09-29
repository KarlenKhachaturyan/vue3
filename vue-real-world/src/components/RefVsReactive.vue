
<!-- An example of setup function using ref -->
<script>
import {ref, computed} from 'vue'
export default {
    setup() {
        const capacity = ref(3)
        const guests = ref(['a', 'b', 'c'])
        const availableSeats = computed(() => {
            return capacity.value - guests.value.length // just an example not correct logic
        })

        function addCapacity() {
            capacity.value++
        }

        return { capacity, guests, availableSeats, addCapacity }
    }
}
</script>

<script>
import {reactive, computed, toRefs} from 'vue'
export default {
    setup() {
        const event = reactive({
        capacity: 3,
        guests: ['a', 'b', 'c']
        availableSeats: computed(() => {
                return capacity - guests.length // just an example not correct logic
            })
        })

        function addCapacity() {
            capacity.value++
        }

        return {event, addCapacity}
        // if you don't want to use the `event.` to 
        // access the capacity/guests/availableSeats 
        // in the template you can use toRefs
        // which will make objects from reactive object 
        // `event` and you can use the `capacity` inside 
        // the template 
        return { toRefs(event), addCapacity }
    }
}

</script>