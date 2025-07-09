import { When, Then } from "@wdio/cucumber-framework";
import { expect } from "@wdio/globals";

import BasicAuthPage from "../pageobjects/basic_auth.page.js";

When(
  /^I use basic auth to login with (\w+) and (.+)$/,
  async (username, password) => {
    console.log(`u=${username}, p=${password}`);
    await BasicAuthPage.login(username, password);
    // we need to set up an interceptor since wdio cant handle HTTPAuth dialog detection - easier with PlayWright
  }
);

Then(/^I should see a paragraph saying (.+)$/, async (message) => {
  await expect(BasicAuthPage.message).toBeExisting();
  const msgRegEx = new RegExp(message)
  await expect(BasicAuthPage.message).toHaveText(msgRegEx);
});
