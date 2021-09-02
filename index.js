
const puppeteer = require("puppeteer");
const url = "https://nike.com";
const query = "low dunk";

(async() => {
    const browser = await puppeteer.launch({headless: false})
    const page = await browser.newPage()
    await page.setViewport({height: 1080, width: 1680})
    await page.goto(url)    
    const cookie = await page.waitForSelector("#hf_cookie_text_cookieAccept")
    if (cookie) {
        cookie.click()
        const input = await page.waitForSelector("#VisualSearchInput")
        if (input) {
            input.click()
            await page.type("#VisualSearchInput", query).then(async() => {
                await page.keyboard.press(String.fromCharCode(13))
            })
            
        }
        
    }
        
})()
