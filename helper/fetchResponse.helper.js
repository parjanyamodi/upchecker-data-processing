const openBrowser = require("./openBrowser.helper");
const sendErrorMail = require("./sendErrorMail.helper");
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

class HTTPResponseError extends Error {
    constructor(response, ...args) {
        super(`HTTP Error Response: ${response.status} ${response.statusText}`, ...args);
        this.response = response;
    }
}

const checkStatus = response => {
    if (response.ok) {
        // response.status >= 200 && response.status < 300
        return response.status;
    } else {
        throw new HTTPResponseError(response);
    }
}

const fetchResponse = async (url, time) => {
    try {
        const response = await fetch(url.url);
        const statusCode = await response.status;
        console.log({ url: url.url, response: checkStatus(response), time })
        statusCode >= 200 && statusCode < 300 ? openBrowser(url, time) : sendErrorMail(url, checkStatus(response))
    }
    catch (e) {
        console.log({ url: url.url, response: e.message, time })
        sendErrorMail(url, e)
    }
}

module.exports = fetchResponse