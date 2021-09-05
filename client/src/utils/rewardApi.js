import axios from "axios"

export default {
    async getAllPrizes() {
        const {data} = await axios.get("/api/rewards");
        return data;
    },
    async getPrizeById(id) {
        const {data} = await axios.get(`/api/rewards/${id}`);
        return data;
    },
    async updatePrizeById(id, query) {
        const {data} = await axios.put(`/api/rewards/${id}`, query)
        return data;
    }
}