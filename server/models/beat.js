const mongoose = require("mongoose");

const BeatSchema = new mongoose.Schema({
    num: {
        type: Number,
    },
    first: {
        boolean: false,
    },
    second: {
        boolean: false,
    },
    third: {
        boolean: false,
    },
    fourth: {
        boolean: false,
    }


});



module.exports = mongoose.model("Beat", BeatSchema);

//export default model;