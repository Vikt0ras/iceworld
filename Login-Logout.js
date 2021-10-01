describe("Denon Salonai", () => {
  it("LogIn - LogOut", async () => {
    await browser.url("https://www.denonsalonai.lt/");

    ////// Main Page //////
    await browser.pause(3000);
    const pop = $("body > div");
    await pop.waitForDisplayed();
    await browser.refresh();
    await browser.pause(1000);
    const cookiesok = $(
      "#index > div.tvcmscookies-notice > div > div.tvcookies-notice-icon > button"
    );
    await cookiesok.click();
    await browser.pause(1000);
    // Go To LogIn Page
    const logindrop = $(
      "#tvcmsdesktop-account-button > div > div > div > button"
    );
    await logindrop.click();
    const loginbutton = $("#tvcmsdesktop-user-info > div > a");
    await loginbutton.click();
    await browser.pause(1000);
    ////// Login Page //////
    const emailfield = await $(
      "#login-form > div > div:nth-child(2) > div.col-md-6 > input"
    );
    const passwordfield = await $(
      "#login-form > div > div:nth-child(3) > div.col-md-6 > div > input"
    );
    const showpassword = await $(
      "#login-form > div > div:nth-child(3) > div.col-md-6 > div > span > button"
    );
    const submitlogin = await $("#submit-login");
    const message = await $("#content > div.login-form > div > ul > li");
    const h1 = await $("#main > header > h1");
    const logout = await $("#main > footer > div > a");
    /// Login with wrong email and correct password & error message verify ///
    await emailfield.click();
    await emailfield.setValue("blablaa@mailsac.com");
    await showpassword.click();
    await passwordfield.click();
    await passwordfield.setValue("123456a");
    await submitlogin.click();
    await message.waitForDisplayed();
    assert.equal("Identifikavimas nepavyko", await message.getText());
    await browser.pause(1000);
    ///Login with correct email and wrong password & error message verify ///
    await emailfield.click();
    await emailfield.setValue("blablabla@mailsac.com");
    await showpassword.click();
    await passwordfield.click();
    await passwordfield.setValue("12345a");
    await submitlogin.click();
    await message.waitForDisplayed();
    assert.equal("Identifikavimas nepavyko", await message.getText());
    await browser.pause(1000);
    /// Login with correct email and password  ///
    await emailfield.click();
    await emailfield.setValue("blablabla@mailsac.com");
    await showpassword.click();
    await passwordfield.click();
    await passwordfield.setValue("123456a");
    await submitlogin.click();
    await browser.pause(1000);
    /// Logout ///
    await h1.waitForDisplayed();
    await logout.click();
  });
});
