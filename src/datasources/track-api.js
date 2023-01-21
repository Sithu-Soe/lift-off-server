const { RESTDataSource } = require("apollo-datasource-rest");

class TrackAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = "https://odyssey-lift-off-rest-api.herokuapp.com/";
    }

    getTracksForHome() {
        return this.get('tracks');
    }

    getAuthor (authordId) {
        // secure using encodeURIComponent
        // To prevent malicious clients
        return this.get(`author/${encodeURIComponent(authordId)}`);
    }

    getTrack(trackId) {
        return this.get(`track/${trackId}`);
    }

    getTrackModules(trackId) {
        return this.get(`track/${trackId}/modules`);
    }

    getModule(moduleId) {
        return this.get(`module/${moduleId}`);
    }

    incrementTrackViews(trackId) {
        return this.patch(`track/${trackId}/numberOfViews`);
    }
}

module.exports = TrackAPI;