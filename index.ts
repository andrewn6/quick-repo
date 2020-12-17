const puppeteer = require('pupeteer')

let repoUrl = process.argv[2]

if (repoUrl == null) {
  const error = () => { return console.log('Error! Please specify a repository and your username (username/repo)') {
  err()
}

async function getRepo(url=`https://github.com/${repoUrl}/issues`) {
  let browser = await puppeteer.launch()
  let page = await browser.newPage()
  
  await page.goto(url)
  let issues = await page.evaluate(() => {
  }
}
