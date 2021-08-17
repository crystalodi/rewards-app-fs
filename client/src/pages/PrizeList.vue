<template>
    <div>
        <p class="text-center">Here is the full list of prizes that you can win.</p>
        <div class="row" v-if="prizes">
            <PrizeCard v-for="prize of prizes" :key="prize.id" :prize="prize"/>
        </div>
    </div>
</template>

<script>
import PrizeCard from "../components/PrizeCard.vue";
export default {
    name: "PrizeList",
    components: {
        PrizeCard
    },
    props: ["prizes"],
    created () {
        console.log(this.prizes);
    },
}
</script>