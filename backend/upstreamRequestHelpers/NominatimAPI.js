const axios = require("axios").default;

const NOMINATIM_CANONICAL_URL = "https://nominatim.openstreetmap.org/";

export default class NominatimAPI {
    static async getLatLongFromAddressSearch(query) {
        try {
            const nominatimResponse = await axios({
                method: "get",
                url: `${NOMINATIM_CANONICAL_URL}search/${query}`,
                params: {
                    format: "json",
                },
            });
            const data = nominatimResponse.data[0];

            if (data.length === 0) throw "No results";

            return {
                latitude: data.lat,
                longitude: data.lon,
            };
        } catch (err) {
            throw err;
        }
    }
} // class NominatimAPI
