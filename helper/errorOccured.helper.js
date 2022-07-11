const ErrorLogs = require("../model/errorLog.model");
const sendMail = require("./sendMail.helper");

const errorOccured = async (url, e, time) => {
    try {
        error = new ErrorLogs({
            url: url.url,
            urlId: url.urlId,
            error: e,
            time: time,
        })
        await error.save()
        await sendMail(url, e, time)
    }
    catch (err) {
        console.log(err)
    }
}
module.exports = errorOccured