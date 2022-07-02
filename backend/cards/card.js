const Handlebars = require('handlebars');
const puppeteer = require('puppeteer');

async function generateHTML(data) {
    console.log('Generating HTML');

    let tempData = { "name": "elliot" };
    let source = "<p>{{name}}</p>"

    let template = Handlebars.compile(source);
    let result = template(tempData)

    return result;
}

async function generateImage(html) {
    const browser = await puppeteer.launch({
        args: ["--no-sandbox"],
        timeout: 10000,
    })
    const page = await browser.newPage();
    await page.setContent(html);
    await page.setViewport({width: 2048, height: 1170});
    const screenshot = await page.screenshot({
        encoding: 'binary'
    })
    await browser.close();
    return screenshot;
}

module.exports = {
    generateHTML,
    generateImage
}