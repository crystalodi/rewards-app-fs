
import { createClient } from "pexels";
const client = createClient("563492ad6f91700001000001be6850244e9b4726bca4ab7653a56ef4");

export default {
    getImageByPexelId(id) {
        return client.photos.show({ id });
    }
}