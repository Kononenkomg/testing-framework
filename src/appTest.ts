import { Builder, By, until, WebDriver } from 'selenium-webdriver';

async function example() {
    // Set up the browser (e.g., Chrome)
    let driver: WebDriver = await new Builder().forBrowser('chrome').build();
  
    try {
      // Navigate to the application URL
      await driver.get('https://pdfslicedice.com/');
  
      // Perform some actions (e.g., find an element and interact with it)
      const element = await driver.findElement(By.className('text-center p-5 container'));
      console.log(await element.getText());
  
      // Wait until the title contains "Selenium"
      await driver.wait(until.titleContains('Selenium'), 1000);
    } finally {
      // Quit the browser
      await driver.quit();
    }
  }
  
  example();