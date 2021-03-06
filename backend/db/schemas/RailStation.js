const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StationSchema = new Schema({
    crs: String,
    name: String,
    location: {
        longitude: String,
        latitude: String
    },
    staffing: String
});

StationSchema.index({
    'crs': 'text',
    'name': 'text'
}, {
    weights: {
        crs: 1,
        name: 2
    }
});

export default mongoose.model('Station', StationSchema);