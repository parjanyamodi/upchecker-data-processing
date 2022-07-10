const openBrowser = require("./openBrowser.helper");
const sendErrorMail = require("./sendErrorMail.helper");
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

exports.fetchResponse = async () => {
    try {
        const response = await fetch(`https://parjanyamodi.com`);
        const status_code = await response.status;
        status_code == 200 ? openBrowser(url) : sendErrorMail()
    }
    catch (e) { throw e }
}