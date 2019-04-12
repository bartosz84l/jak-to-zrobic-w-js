  var clc = require('cli-color'),
      Screenshot = require('../util/screenshots.js');

  var Page = function () {

  };

  Page.prototype.logEnabled = true;

  /**
   * Amount of milliseconds for which browser waits before performing next test step.
   */
  Page.prototype.sleepBeforeStepMilliseconds = 50;

  /**
   * Waits for {sleepBeforeStepMilliseconds} before proceeding to next step.
   * @returns A promise which is fulfilled when sleep is over
   */
  Page.prototype.sleepBeforeStep = function () {
      return browser.sleep(this.sleepBeforeStepMilliseconds);
  };

  /**
   * Collects and prints page performance data.
   */
  Page.prototype.logNavigationTiming = function(){

      var self = this;
      var script = 'var performance = window.performance || window.webkitPerformance || window.mozPerformance || window.msPerformance || {}; var timings = performance.timing || {}; return timings;';
      var text = browser.executeScript(script).then(function (t) {
          var interactive = t.domInteractive - t.navigationStart,
          dcl = t.domContentLoadedEventStart - t.navigationStart,
          complete = t.domComplete - t.navigationStart;
          var textContent = ['interactive: ' + interactive + 'ms, ' +
              'dcl: ' + dcl + 'ms, complete: ' + complete + 'ms'];
          self.log('Page load time: ', textContent);
      });

  };

  /**
   * Loads given url in the browser
   * @param url
   * @returns A promise which is fulfilled when url is loaded
   */
  // Page.prototype.load = function (url) {
  //   browser.get(url);
  // };

//   Page.prototype.load = function (url) {
      this.log('load', url);

      return this.sleepBeforeStep()
          .then(function () {
              return browser.get(browser.baseUrl + url);
          });
  };
  /**
   * Gets page title.
   * @returns A page title.
   */
  Page.prototype.getTitle = function() {
    return browser.driver.getTitle();
  };

  Page.prototype.log = function (message) {
      if (this.logEnabled) {
          console.error.apply(console, [clc.cyan('DEBUG|')].concat(Array.prototype.slice.call(arguments)));
      }
  };

  Page.prototype.scrollToElement = function(el){
    var windowHeight;
    browser.driver.manage().window().getSize()
        .then(function (windowSize) {
            windowHeight = windowSize.height;
            return el.getWebElement().getLocation();
        })
        .then(function (location) {
            return browser.executeScript('window.scrollTo(0, ' + (location.y - Math.floor(windowHeight / 2)) +');');
        });
        return browser.sleep(3000);
  };

  Page.prototype.scrollPageDown = function(){
    browser.driver.manage().window().getSize()
        .then(function () {
          return browser.executeScript(' return document.documentElement.scrollTop');
        })
        .then(function (location) {
            return browser.executeScript('window.scrollTo(0, (document.documentElement.scrollTop + screen.height ) )');
        });
    return browser.sleep(3000);
  };


  Page.prototype.takeScreenshot = function (name) {
      this.log("Creating screenshot: " + name);
      browser.driver.takeScreenshot().then(function (png) {
          new Screenshot(png, name + ".png");
      });
  };

  module.exports = Page;
