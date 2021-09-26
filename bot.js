const puppeteer = require('puppeteer');

(async function main() {
    try {
        const browser = await puppeteer.launch({ headless: false });
        const page = browser.newPage();
        browser.userAgent(
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36'
        );
        (await page).goto('https://web.whatsapp.com/');
        await delay(5000);
        (await page).waitForSelector('#app');
        await delay(10000);

        const name = 'NAVC';
        (await page).click(`span[title='${name}']`);
        (await page).waitForSelector('.p3_M1');
        // const input = (await page).$('.p3_M1');
        // (await input).focus();
        (await page).focus('._13NKt');
        for (let i = 0; i < 1000; i++) {
            (await page).evaluate(() => {
                const msg = 'Hey Buddy wassup.';
                document.execCommand('insertText', false, msg);
                // (await page).type('_13NKt', msg);
            });
            await delay(500);
            (await page).click("span[data-testid='send']");
        }
    } catch (error) {
        console.log(error);
    }
})();

function delay(ms) {
    return new Promise(function (resolve) {
        setTimeout(resolve, ms);
    });
}
