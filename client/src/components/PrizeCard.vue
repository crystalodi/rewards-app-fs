<template>
    <div class="col-xl-4 col-md-6 col-12">
        <div class="card prize-card mb-5">
            <img class="card-img-top" v-bind:src="pexelPhoto" v-if="pexelPhoto"/>
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
import pexelApi from "../utils/pexelApi";
export default {
    name: "PrizeCard",
    props: ["prize"],
    data() {
        return {
            pexelPhoto: null
        }
    },
    created () {
        this.getPexelPhoto();
    },
    methods: {
        async getPexelPhoto() {
            const {src} = await pexelApi.getImageByPexelId(this.prize.pexelId)
            this.pexelPhoto = src.landscape;
        },
        goToRedeem() {
            this.$router.push({ name: "PrizeDetail", params: { id: this.prize._id }})
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


