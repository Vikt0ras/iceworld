describe("Denon Salonai", () => {
  it("Menu buttons", async () => {
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
    /// Defining web elements///
    const prekes = await $(
      "#tv-menu-horizontal > ul > li.level-1.parent.menu-produkty"
    );
    const prekiuzenklai = await $(
      "#tv-menu-horizontal > ul > li:nth-child(3) > a > span"
    );
    const naujoves = await $(
      "#tv-menu-horizontal > ul > li:nth-child(4) > a > span"
    );
    const akcijos = await $(
      "#tv-menu-horizontal > ul > li:nth-child(5) > a > span"
    );
    const ispardavimas = await $(
      "#tv-menu-horizontal > ul > li:nth-child(6) > a > span"
    );
    const outlet = await $(
      "#tv-menu-horizontal > ul > li:nth-child(7) > a > span"
    );
    const apiemus = await $(
      "#tv-menu-horizontal > ul > li:nth-child(8) > a > span"
    );
    const salonaikontaktai = await $(
      "#tv-menu-horizontal > ul > li:nth-child(9) > a > span"
    );
    ///// Tolbar buttons /////
    await prekes.click();
    await browser.pause(2000);
    await prekiuzenklai.click();
    await browser.pause(2000);
    await naujoves.click();
    await browser.pause(2000);
    await akcijos.click();
    await browser.pause(2000);
    await ispardavimas.click();
    await browser.pause(2000);
    await outlet.click();
    await browser.pause(2000);
    await apiemus.click();
    await browser.pause(2000);
    await salonaikontaktai.click();
    await browser.pause(2000);
  });
});
