describe("Denon Salonai", () => {
  it("Search", async () => {
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
    ///Defining web elements///
    const searchfield = $(
      "#_desktop_search > div > div > div.tvsearch-header-display-full > div > form > div.tvheader-top-search > div > input"
    );
    const searchbutton = $(
      "#_desktop_search > div > div > div.tvsearch-header-display-full > div > form > div.tvheader-top-search-wrapper > button > i"
    );
    // Search: 1234567890
    await searchfield.click();
    await searchfield.setValue("1234567890");
    await searchbutton.click();
    await browser.pause(2000);
    // Search: asdfghjkl
    await searchfield.click();
    await searchfield.setValue("asdfghjkl");
    await searchbutton.click();
    await browser.pause(2000);
    // Search: !@#$%^&*()_+-=
    await searchfield.click();
    await searchfield.setValue("!@#$%^&*()_+-=");
    await searchbutton.click();
    await browser.pause(2000);
    // Search: ㊊㊋㊌㊍㊎㊏㊐㊑
    await searchfield.click();
    await searchfield.setValue("㊊㊋㊌㊍㊎㊏㊐㊑");
    await searchbutton.click();
    await browser.pause(2000);
    // Search: marantz
    await searchfield.click();
    await searchfield.setValue("marantz");
    await searchbutton.click();
    await browser.pause(2000);
    // Search: vinil
    await searchfield.click();
    await searchfield.setValue("vinil");
    await searchbutton.click();
    await browser.pause(2000);
    // Search: smart
    await searchfield.click();
    await searchfield.setValue("smart");
    await searchbutton.click();
    await browser.pause(5000);
  });
});
