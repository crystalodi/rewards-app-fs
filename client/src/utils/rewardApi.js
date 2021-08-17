import axios from "axios"

export default {
    getAllPrizes() {
        return axios.get("/api/rewards");
    },
    getPrizeById(id) {
        return axios.get(`/api/rewards/${id}`)
    },
    updatePrizeById(id, query) {
        return axios.put(`/api/rewards/${id}`, query)
    }
}