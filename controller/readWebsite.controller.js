const fetchResponse = require("../helper/fetchResponse.helper")
const readWebsite = async (user, time) => {
    const urls = user.urls
    urls.map(async (url) => {
        fetchResponse(url, time)
    })

}
module.exports = readWebsite