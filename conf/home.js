exports.config = {

    ///////////////////////////////////////////////////////////////////////////////////
    // Various test running options. Use only one at a time.

    // Use directConnect option to connect directly to Chrome browser, without Selenium. Works only for Chrome and
    // Firefox.
    directConnect: true,
    // Use seleniumAddress option is Selenium server is started manually
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    //seleniumAddress: 'http://hub.browserstack.com/wd/hub',

    // Use seleniumServerJar option to automatically start Selenium server
    //seleniumServerJar: require('selenium-server-standalone-jar').path,

    ///////////////////////////////////////////////////////////////////////////////////

    specs: ['../src/specs/home.spec.js'],

    /// MINIMAL CONFIGURATION END /////////////////////////////////////////////////////

    capabilities: {
        'browserName' : 'chrome',
    },
    onPrepare: function () {
      var jasmineReporters = require('jasmine-reporters'),
          SpecReporter = require('jasmine-spec-reporter'),

      // jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
      //         consolidateAll: true,
      //         savePath: 'results/unit',
      //         filePrefix: 'xmloutput'
      //     }));

      //add jasmine spec reporter
      jasmine.getEnv().addReporter(new SpecReporter({
        displayStacktrace: true
      }));


      browser.ignoreSynchronization = true;
  },

  jasmineNodeOpts: {
      onComplete: null,
      isVerbose: true,
      showColors: true,
      defaultTimeoutInterval: 120000, // 2 minutes
      includeStackTrace: true,
      // This line removes the default Protractor 'dot' test result reporter
      // Comment out if you want to see stack traces in case of errors
     print: function () {}
  }

};
