exports.config = {

    /**
     * @desc capabilities
     * declaration of browsers tot test in
     * testing in browser: firefox, chrome
     */

    capabilities: [
        {
            maxInstances: 5,                             // Maximal test files to run
            browserName: "firefox"
        },
        {
            maxInstances: 5,                             // Maximal test files to run
            browserName: "chrome"
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

    maxInstances: 5,                                     // Maximal test files to run in total
    host: '10.123.123.87',                               // Declare selenium grid host
    port: 4444,                                          // Port host
    logLevel: 'silent',
    marionette: true,                                    // Geckodriver is marionette driver
    sync: false,                                         // Synchronous to false
    coloredLogs: true,
    waitforTimeout: 10000,
    reporters: ['dot', 'allure'],
    reporterOptions: {
        allure: {
            outputDir: './log/allure-results'
        }
    },
    framework: 'mocha',                                  // Run tests with framework mocha
    mochaOpts: {
        ui: 'bdd',                                       // bdd: Behaviour drive development
        timeout: 99999999
    },
    /**
     * @desc specify test suites
     */
    suites: {
        all: [
            './tests/*-test.js'
        ]
    },

    /**
     * @desc specify test files
     */
    specs: [
        './tests/title-test.js'                      // Run all files in map 'test' with ' -title-test.js' in name
    ]

};