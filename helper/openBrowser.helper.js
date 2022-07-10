const puppeteer = require("puppeteer");
const sendErrorMail = require("./sendErrorMail.helper");

const openBrowser = async (url, time) => {
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
        }
        catch (e) {
            console.log({ url: url.url, response: e.message, time })
            sendErrorMail(url, e)
        }
        finally {
            await launchBrowser.close();
        }
    }
    catch (e) {
        console.log({ url: url.url, response: e.message, time })
    }
}
module.exports = openBrowser