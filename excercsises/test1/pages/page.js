class Page {

    
    load(url) {
        browser.get('http://jacekokrojek.github.io/jak-to-zrobic-w-js' + url);
    };

    waitForResponse(text, time) {
        var ec = protractor.ExpectedConditions;
        browser.wait(ec.visibilityOf(text, time))

    };


    getTitle() {
        return browser.driver.getTitle();
    };

}



module.exports = Page;