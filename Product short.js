describe("Denon Salonai", () => {
  it("Product short", async () => {
    await browser.url("https://www.denonsalonai.lt/");

    ////// Main Page //////
    await browser.pause(3000);
    const pop = $("body > div");
    await pop.waitForDisplayed();
    await browser.pause(1000);
    await browser.refresh();
    const prekes = $(
      "#tv-menu-horizontal > ul > li.level-1.parent.menu-produkty"
    );
    await browser.pause(1000);
    const cookiesok = $(
      "#index > div.tvcmscookies-notice > div > div.tvcookies-notice-icon > button"
    );
    await cookiesok.click();
    await browser.pause(1000);
    await prekes.click();
    /// Prekes page ///
    const prekesimage = $("#main > p");

    await prekesimage.waitForDisplayed();
    await browser.pause(1000);
    const dropdown = $(
      "#js-product-list-top > div.col-sm-12.col-md-4.col-lg-4.tvall-page-shortby > div > div > button"
    );
    /// bestsellers ///
    await dropdown.click();
    const bestsellers = $(
      "#js-product-list-top > div.col-sm-12.col-md-4.col-lg-4.tvall-page-shortby > div > div > div > a:nth-child(1)"
    );
    await bestsellers.click();
    await browser.pause(1000);
    /// aktualumas ///
    await dropdown.click();
    const aktualumas = $(
      "#js-product-list-top > div.col-sm-12.col-md-4.col-lg-4.tvall-page-shortby > div > div > div > a:nth-child(2)"
    );
    await aktualumas.click();
    await browser.pause(1000);
    /// pavadinimas A-Z ///
    await dropdown.click();
    const pavadinimasAZ = $(
      "#js-product-list-top > div.col-sm-12.col-md-4.col-lg-4.tvall-page-shortby > div > div > div > a:nth-child(3)"
    );
    await pavadinimasAZ.click();
    await browser.pause(1000);
    /// pavadinimas Z-A ///
    await dropdown.click();
    const pavadinimasZA = $(
      "#js-product-list-top > div.col-sm-12.col-md-4.col-lg-4.tvall-page-shortby > div > div > div > a:nth-child(4)"
    );
    await pavadinimasZA.click();
    await browser.pause(1000);
    /// kaina maziausia-didziausia ///
    await dropdown.click();
    const kainaMD = $(
      "#js-product-list-top > div.col-sm-12.col-md-4.col-lg-4.tvall-page-shortby > div > div > div > a:nth-child(5)"
    );
    await kainaMD.click();
    await browser.pause(1000);
    /// kaina didziausia-maziausia ///
    await dropdown.click();
    const kainaDM = $(
      "#js-product-list-top > div.col-sm-12.col-md-4.col-lg-4.tvall-page-shortby > div > div > div > a:nth-child(6)"
    );
    await kainaDM.click();
    await browser.pause(1000);
  });
});
