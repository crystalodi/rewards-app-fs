<template>
    <div class="card">
        <img class="card-img" v-bind:src="pexelPhoto" v-if="pexelPhoto"/>
        <div class="card-title">
            <h4>Win {{prize.name}}</h4>
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
<style lang="scss">
    .card {
        display:flex;
        flex-direction: column;
        background-color: $white;
        line-height: 1.5;
        .card-img {
            width: 100%;
            display:block;
        }
        .card-title {
            text-align: center;
        }
    }
</style>


