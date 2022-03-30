let chromedriver = require("chromedriver");

let chrome = require("selenium-webdriver/chrome");
chrome.setDefaultService(new chrome.ServiceBuilder(chromedriver.path).build());

const { Builder, By } = require("selenium-webdriver");
const driver = new Builder().forBrowser("chrome").build();

let { weight, height, age } = require("./data.json");

const loginOnFacebook = async (weight, height, age) => {
  await driver.get("https://www.fabrykasily.pl/bmr");
  //find the input weight and enter it
  await driver
    .findElement(By.xpath("//input[@name='weight']"))
    .sendKeys(weight);
  await driver
    //find the input height and enter it
    .findElement(By.xpath("//input[@name='height']"))
    .sendKeys(height);
  //find the input age and enter it
  await driver.findElement(By.xpath("//input[@name='age']")).sendKeys(age);
  //select amount of activity

  await driver.findElement(By.xpath("//select[@name='activity']")).click();
  await driver.findElement(By.xpath("//option[@value='1']")).click();
  //select your goal
  await driver.findElement(By.xpath("//select[@name='todo']")).click();
  await driver
    .findElement(By.xpath("//select[@name='todo']//option[@value='2']"))
    .click();
  await driver.findElement(By.className("container--s2")).click();
  //caluclate caloric demand
  await driver
    .findElement(By.className("fs-calc__btn btn--c1 btn--s1 btn--arrow-right"))
    .click();
};

loginOnFacebook(weight, height, age);
