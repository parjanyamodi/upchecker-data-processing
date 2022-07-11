const mongoose = require("mongoose")

const UrlsSchema = new mongoose.Schema(
    {
        userId: { type: String, required: true, unique: true },
        urls: [{
            name: String,
            url: String,
            urlId: String,
            sslEnabled: { type: Boolean, default: true },
        }],
    }
)
const Urls = mongoose.model("urls", UrlsSchema)
module.exports = Urls