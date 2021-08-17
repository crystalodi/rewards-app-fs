<template>
    <div>
        <p class="text-center">Here is the full list of prizes that you can win.</p>
        <div class="row" v-if="prizes">
            <PrizeCard v-for="prize of prizes" :key="prize._id" :prize="prize"/>
        </div>
    </div>
</template>

<script>
import PrizeCard from "../components/PrizeCard.vue";
import API from "../utils/API";
export default {
    name: "PrizeList",
    components: {
        PrizeCard
    },
    data() {
        return {
            prizes: []
        }
    },
    created () {
        this.getPrizes();
    },
    methods: {
        async getPrizes() {
            const {data} = await API.getAllPrizes();
            this.prizes = data;
        }
    }
}
</script>