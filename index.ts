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
  let repos = await page.evaluate(() => {
    var repoNames = document.querySelectorAll('.h4')
    
    let randRepo= (Math.floor(Math.random() * Math.floor(repoNames.length)))
    
    try{
      return  return(`Your task is to: "${repoNames[randRepo].innerHTML}" (https://github.com/${repoNames[randRepo].getAttribute('href')})`)
    } catch (e) {
       return('Error, Invalid URL. Double check the spelling, and make sure it\'s public!')
    }
               
      console.log(`${repos}`)
   await browser.close
  }
}

                                  
getRepo()
