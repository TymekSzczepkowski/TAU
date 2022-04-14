let chromedriver = require("chromedriver");
let geckodriver = require("geckodriver");

let should = require("chai").should();

const { Builder, By } = require("selenium-webdriver");

const driver = new Builder().forBrowser("chrome").build();
const driverFirefox = new Builder().forBrowser("firefox").build();

let {
  weight,
  height,
  age,
  result1,
  result2,
  badresult1,
  badresult2,
} = require("./data.json");

describe("zadanie3", function () {
  this.timeout(20000);
  it("Calucalte and verify BMR with weight: 80 height: 190 age:30 in Chrome", async function () {
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
      .findElement(
        By.className("fs-calc__btn btn--c1 btn--s1 btn--arrow-right")
      )
      .click();
    let basicMetabolism = await driver
      .findElement(
        By.xpath("/html/body/div[2]/div[1]/div[3]/div/div/div[1]/div[2]/span")
      )
      .getText()
      .then(function (value) {
        return value;
      });
    let keepYourWeight = await driver
      .findElement(
        By.xpath("/html/body/div[2]/div[1]/div[3]/div/div/div[1]/div[4]/span")
      )
      .getText()
      .then(function (value) {
        return value;
      });
    basicMetabolism.should.equal(result1);
    keepYourWeight.should.equal(result2);
    keepYourWeight.should.not.equal(badresult1);
    keepYourWeight.should.not.equal(badresult2);
    await driver.quit();
  });
  it("Calucalte and verify BMR with weight: 80 height: 190 age:30 in Firefox", async function () {
    await driverFirefox.get("https://www.fabrykasily.pl/bmr");
    //find the input weight and enter it
    await driverFirefox
      .findElement(By.xpath("//input[@name='weight']"))
      .sendKeys(weight);
    await driverFirefox
      //find the input height and enter it
      .findElement(By.xpath("//input[@name='height']"))
      .sendKeys(height);
    //find the input age and enter it
    await driverFirefox
      .findElement(By.xpath("//input[@name='age']"))
      .sendKeys(age);
    //select amount of activity
    await driverFirefox
      .findElement(By.xpath("//select[@name='activity']"))
      .click();
    await driverFirefox.findElement(By.xpath("//option[@value='1']")).click();
    //select your goal
    await driverFirefox.findElement(By.xpath("//select[@name='todo']")).click();
    await driverFirefox
      .findElement(By.xpath("//select[@name='todo']//option[@value='2']"))
      .click();
    await driverFirefox.findElement(By.className("container--s2")).click();
    //caluclate caloric demand
    await driverFirefox
      .findElement(
        By.className("fs-calc__btn btn--c1 btn--s1 btn--arrow-right")
      )
      .click();

    let basicMetabolism = await driverFirefox
      .findElement(
        By.xpath("/html/body/div[2]/div[1]/div[3]/div/div/div[1]/div[2]/span")
      )
      .getText()
      .then(function (value) {
        return value;
      });
    let keepYourWeight = await driverFirefox
      .findElement(
        By.xpath("/html/body/div[2]/div[1]/div[3]/div/div/div[1]/div[4]/span")
      )
      .getText()
      .then(function (value) {
        return value;
      });
    basicMetabolism.should.equal(result1);
    keepYourWeight.should.equal(result2);
    keepYourWeight.should.not.equal(badresult1);
    keepYourWeight.should.not.equal(badresult2);
    await driverFirefox.quit();
  });
});
