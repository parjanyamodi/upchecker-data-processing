const mongoose = require("mongoose")

const ErrorLogSchema = new mongoose.Schema(
    {
        url: String,
        urlId: String,
        error: Object,
        time: String,
    }
)
const ErrorLogs = mongoose.model("errorlogs", ErrorLogSchema)
module.exports = ErrorLogs