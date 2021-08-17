<template>
    <div>
    <LightBox ref="prizeLight" v-if="prizeFound">
        <template v-slot:light-box-header>
            <h5>Redeem Prize</h5>
      </template>
      <template v-slot:light-box-body>
          <p>Are you sure you want to redeem {{prize.name}}?</p>
      </template>
            <template v-slot:light-box-footer>
          <button @click="redeemPrize" type="button" class="btn">Yes, Redeem</button>
      </template>
    </LightBox>
    <div class="prize-detail-container">
        <div class="card app-card prize-card" v-if="prizeFound">
            <div class="row">
                <div class="col-4">
                    <img :src="prize.image_url" class="img-fluid"/>
                </div>
                <div class="col-8">
                    <div class="card-body">
                        <div class="card-title">
                            <h5>{{prize.name}}</h5>
                        </div>
                        <div class="card-text mb-3">
                            {{prize.description}}
                            <p>Quantity: {{prize.quantity}}</p>
                        </div>
                        <button class="app-button redeem-this me-1" @click="confirmRedeemPrize" :disabled="prize.quantity === 0">Redeem This Prize</button>
                        <button class="app-button go-back" @click="goBackToPrizes">Go Back To Prizes</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>
<script>
import LightBox from "../components/LightBox.vue";
import API from "../utils/API"
export default {
    name: "PrizeDetail",
    emits: ["updatePrizeQuantity"],
    data() {
        return {
            prize: null
        }
    },
    components: {
        LightBox
    },
    mounted () {
        this.getPrize();
    },
    methods: {
        async redeemPrize() {
            const quantity = this.prize.quantity - 1;
            this.$emit('updatePrizeQuantity', this.$route.params.id, quantity);
            this.$refs.prizeLight.closeModal();
            this.getPrize();
        },
        confirmRedeemPrize() {
            this.$refs.prizeLight.openModal()
        },
        async getPrize() {
            const {data} = await API.getPrizeById(this.$route.params.id)
            this.prize = data;
        },
        goBackToPrizes() {
            this.$router.push({
                path: "/"
            });
        }
    },
    computed: {
        prizeFound() {
            return !!this.prize;
        }
    }
}
</script>

<style>
    .prize-detail-container {
        display: flex;
        align-content: center;
        justify-content: center;
    }
    .redeem-this {
        background-color:#ffce0a !important;
    }
    .redeem-this:hover {
        background-color: #ffd324;
    }
    .go-back:hover {
        background-color:#0274bb !important;
    }
    .go-back {
        background-color: #0da1fc;
    }
</style>