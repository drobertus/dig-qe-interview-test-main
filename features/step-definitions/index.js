import { Given, When, Then } from "@wdio/cucumber-framework";
import Page from "../pageobjects/page.js";
const index = new Page();

Given(/^I am on the (.+) page$/, async (page) => {
  await index.open(page);
});

Given("I am at the index page", async function () {
  await index.open();
//   await browser.waitUntil(
//   () => browser.execute(() => document.readyState === 'complete'),
//   {
//     timeout: 60 * 1000, // 60 seconds
//     timeoutMsg: 'Message on failure'
//   }
// );
});

When(/^I click the (.+) link$/, async function (page) {
  this.page = page;
 // await myElem.waitForDisplayed({ timeout: 10000 })
  await index.click(page);
//   await browser.waitUntil(
//   () => browser.execute(() => document.readyState === 'complete'),
//   {
//     timeout: 60 * 1000, // 60 seconds
//     timeoutMsg: 'Message on failure'
//   }
// );
});

Then(/^I should be directed to the selected page with heading $/, async function () {
 //const headerContent = this.page;
 // the h3 element is probably a better solution than looking at the entire HTML
 // body as we want structural consistency between pages
 const html = await $("#content > div > h3"); 
 //const html = await $("*").getHTML();
  expect(html).toHaveText(expect.stringContaining(headerContent));
});

Then(/^I should be directed to the selected page with heading (.+)$/, async function (heading) {
  //const headerContent = this.page;
 // the h3 element is probably a better solution than looking at the entire HTML
 // body as we want structural consistency between pages
 const html = await $("#content > div > h3"); 
 //const html = await $("*").getHTML();
  let headerContent = heading;
  expect(html).toHaveText(expect.stringContaining(headerContent));
});

