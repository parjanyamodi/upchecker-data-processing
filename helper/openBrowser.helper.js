const puppeteer = require("puppeteer");
const errorOccured = require("./errorOccured.helper");

const openBrowser = async (url, statusCode, time) => {
    try {
        const iPad = puppeteer.devices["iPad Pro landscape"];
        const launchBrowser = await puppeteer.launch({
            //executablePath: `/snap/bin/chromium`,
            // headless: false,
            args: [
                "--disable-gpu",
                "--disable-setuid-sandbox",
                "--no-sandbox",
                "--no-zygote",
            ],
        });
        try {
            const newTab = await launchBrowser.newPage();
            await newTab.emulate(iPad);
            await newTab.setDefaultTimeout(30000);
            await newTab.goto(url.url);
            const metrics = await newTab.metrics();
            //console.log(metrics);
            console.log({ urlId: url.urlId, url: url.url, response: statusCode, metrics, time })
        }
        catch (e) {
            errorOccured(url, e, time)
        }
        finally {
            await launchBrowser.close();
        }
    }
    catch (e) {
        errorOccured(url, e, time)
    }
}
module.exports = openBrowser