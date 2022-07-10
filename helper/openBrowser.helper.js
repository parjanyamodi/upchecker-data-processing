const puppeteer = require("puppeteer");

exports.openBrowser = async (url) => {
    try {
        const iPad = puppeteer.devices["iPad Pro landscape"];
        const launchBrowser = await puppeteer.launch({
            //executablePath: `/snap/bin/chromium`,
            headless: false,
            args: [
                "--disable-gpu",
                "--disable-setuid-sandbox",
                "--no-sandbox",
                "--no-zygote",
            ],
        });

        const newTab = await launchBrowser.newPage();
        await newTab.emulate(iPad);
        await newTab.setDefaultTimeout(30000);
        await newTab.goto(`https://parjanyamodi.com`);

        const metrics = await newTab.metrics();

        console.log(metrics);

    }
    catch (e) {
        throw e
    }
    finally {
        await launchBrowser.close();
    }
}
