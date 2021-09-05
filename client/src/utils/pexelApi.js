import axios from "axios";

export default {
    async getImageByPexelId(id) {
        const {data} = await axios.get(`/api/pexels/${id}`);
        return data;
    }
}