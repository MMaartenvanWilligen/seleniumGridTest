var selenium = require('selenium-standalone');

exports.config = {

    /**
     * @desc capabilities
     * declaration in which browsers to test
     * testing in browser: firefox
     */

    capabilities: [
        {
            maxInstances: 1,                            // maximal test files to run
            browserName: "firefox"
        }],

    /**
     * @desc test configurations
     *
     * maxInstances: as you have 3 different capabilities (Chrome, Firefox and Internet Explorer) and you have
     * set maxInstances to 1, wdio will spawn 3 processes in the selenium grid. Therefor if you have 10 test
     * files and you set maxInstances to 10, all test files will get tested at the same time
     * and 30 processes will get spawned in the selenium grid.
     *
     */

    maxInstances: 5,                                     // maximal test files to run in total
    host: '172.17.0.1',                                  // declare selenium grid host
    port: 4444,                                          // port host
    logLevel: 'silent',
    marionette: true,                                    // Geckodriver is marionette driver
    sync: false,                                         // synchronous to false
    coloredLogs: true,
    waitforTimeout: 10000,
    reporters: ['dot'],
    reporterOptions: {
        outputDir: './'
    },
    framework: 'mocha',                                  // run tests with framework mocha
    mochaOpts: {
        ui: 'bdd',                                       // bdd: Behaviour drive development
        timeout: 99999999
    },

    /**
     * @desc specify test files
     */

    specs: [
        './tests/*-test.js'                          //run all files in map 'test' with '-test.js' in name
    ]

};