<template>
    <div class="prize-list">
        <p class="text-center prize-list-header">Here is the full list of prizes that you can win.</p>
        <div class="row" v-if="prizes">
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
            console.log(this.prizes);
        }
    }
}
</script>

<style>
    .prize-list {
        margin-top: 40px;
    }
    .prize-list-header {
        margin-bottom: 40px;
    }
</style>