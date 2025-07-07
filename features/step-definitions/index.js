import { Given, When, Then } from "@wdio/cucumber-framework";
import Page from "../pageobjects/page.js";
const index = new Page();

Given(/^I am on the (.+) page$/, async (page) => {
  await index.open(page);
});

Given("I am at the index page", async function () {
  await index.open();
  await browser.waitUntil(
  () => browser.execute(() => document.readyState === 'complete'),
  {
    timeout: 60 * 1000, // 60 seconds
    timeoutMsg: 'Message on failure'
  }
);
});

When(/^I click the (.+) link$/, async function (page) {
  this.page = page;
  await index.click(page);
  await browser.waitUntil(
  () => browser.execute(() => document.readyState === 'complete'),
  {
    timeout: 60 * 1000, // 60 seconds
    timeoutMsg: 'Message on failure'
  }
);
});

Then(/^I should be directed to the selected page with heading $/, async function () {
  const headerContent = this.page;
 // const headerValues = await $("#content > div > h3"); //document.querySelector("#content > div > h3")
 const html = await $("*").getHTML();
  //console.log(html);
  //console.log(`hv= ${headerValues}, ${headerContent}`);
  expect(html).toHaveText(expect.stringContaining(headerContent));
});

Then(/^I should be directed to the selected page with heading (.+)$/, async function (heading) {
  const html = await $("*").getHTML();
  let headerContent = heading;
  //const headerValues = await index.standardHeader;

  //console.log(`hv= ${headerValues}, ${headerContent}`);
  expect(html).toHaveText(expect.stringContaining(headerContent));
  //const escReg = heading.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  //expect(html).toMatch(new RegExp(`/h3.+${escReg}.+h3/`));
  //const header = await $("h3");
  //expect(header).toHaveTextContaining(this.page);
});

