// это я просто попробовал через селениум сделать - работает, но пришлось драйвер ставить, и должен быть
// браузер установлен, короче — такое себе.
const { Builder, Browser, By, Key, until } = require("selenium-webdriver");

(async function example() {
  let driver = await new Builder().forBrowser(Browser.CHROME).build();
  try {
    await driver.get("https://www.google.com/ncr");
    await driver.findElement(By.name("q")).sendKeys("webdriver", Key.RETURN);
    await driver.wait(until.titleIs("webdriver - Google Search"), 1000);
  } finally {
    // await driver.quit();
  }
})();
