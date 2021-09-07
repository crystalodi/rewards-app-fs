<template>
    <div class="prize-list-container">
        <p class="prize-list-header">Here is the full list of prizes that you can win.</p>
        <div class="prize-list-grid" v-if="prizes">
            <PrizeCard v-for="prize of prizes" :key="prize._id" :prize="prize"/>
        </div>
    </div>
</template>

<script>
import PrizeCard from "../components/PrizeCard.vue";
import rewardApi from "../utils/rewardApi";
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
            this.prizes = await rewardApi.getAllPrizes();
        }
    }
}
</script>

<style lang="scss">
    .prize-list-container {
        padding: 3.125rem 1.875rem;
    }
    .prize-list-header {
        margin-bottom: 2.5rem;
        text-align: center;
    }
    .prize-list-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1.25rem;

    }
</style>