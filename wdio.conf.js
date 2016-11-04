var selenium = require('selenium-standalone');

exports.config = {

    /**
     * @desc capabilities
     *       declaration in which browsers to test
     *       testing in browser: chrome, firefox and internet explorer
     *       saucelabs platform and browsers you can use: https://wiki.saucelabs.com/display/DOCS/Platform+Configurator#/
     */
    capabilities: [
        {
            maxInstances: 5,
            browserName: 'chrome'
        }, {
            maxInstances: 5,
            browserName: 'firefox'
        }],

    /**
     * @desc test configurations
     *
     * maxInstances: as you have 3 different capabilities (Chrome, Firefox and Internet Explorer) and you have
     * set maxInstances to 1, wdio will spawn 3 processes in suacelabs. Therefor if you have 10 spec
     * files and you set maxInstances to 10, all test files will get tested at the same time
     * and 30 processes will get spawned in saucelabs.
     *
     */
    maxInstances: 5,                                        //max test files to run
    host: '10.123.123.87',                                  //declare selenium grid host
    port: 4444,                                             //port host
    logLevel: 'command',
    sync: true,
    coloredLogs: true,
    waitforTimeout: 10000,
    reporters: ['dot'],
    reporterOptions: {
        outputDir: './'
    },
    framework: 'mocha',                                     //run tests with framework mocha
    mochaOpts: {
        ui: 'bdd'
    },

    /**
     * @desc specify test files
     */
    specs: [
        'test.js'                                  //run all files in map 'test' with ' -test.js' in name
    ],

    onPrepare: function () {


    }

};