<template>
    <div class="col-xl-4 col-md-6 col-12">
        <div class="card prize-card mb-5">
            <img class="card-img-top" v-bind:src="prize.image_url" v-if="prize.image_url"/>
            <div class="card-body text-center">
                <div class="card-title mb-5">
                    <b>Win {{prize.name}}</b>
                </div>
                <button class="app-button redeem-button" @click="goToRedeem()">Redeem ></button>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "PrizeCard",
    props: ["prize"],
    methods: {
        goToRedeem() {
            this.$router.push({ name: "PrizeDetail", params: { id: this.prize.id }})
        }
    },
}
</script>
<style>
    image {
        width: 100%;
    }
    .redeem-button {
        background-color:#ffce0a;
        margin:10px;
    }
    .redeem-button:hover {
        background-color: #ffd324;
    }
</style>


