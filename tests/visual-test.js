/**
 * @desc required libaries
 * */

var chai = require('chai')
    , expect = chai.expect
    , should = chai.should();
chai.use(require('chai-fs'));
var webdrivercss = require('webdrivercss');
var resemble = require("node-resemble-js");
var VisualRegression = require("./resemble/visualRegression");
var HomepageMindBlue = require("./page-objects/homepage-mind-blue");
var Promise = require("bluebird");
var config = require('../config');

/**
* @desc visual regression
* @info an Example test of how visual regression can be done. Making a before screenshot and an after screenshot. After that the api resemble compares the two images and gives the data back to this test.
* */

describe('screenshot compare', function () {

    var resultComparison = {};
    var homepage, visualRegression;

    //hook run before tests
    before(function () {
        homepage = new HomepageMindBlue();
        visualRegression = new VisualRegression();
        return homepage.goToPage();
    });

    /**
     * @desc take screenshot before and after the browser view changed
     * @info take a baseline/before screenshot. then set a value in the search input so that the broserview is changed. Take a regression/after screenshot
     * */

    describe('Take screenshot', function () {

        //baseline image
        it("should save a screenshot of the browser view as baseline image", function () {
            return browser.saveScreenshot(config.screenshots.baselineImages + browser.desiredCapabilities.browserName + "/" + 'browserView.png').then(function () {  //use default name defined in function
                expect(config.screenshots.baselineImages + browser.desiredCapabilities.browserName + "/" + "browserView.png").to.be.a.path("");
                //expect(config.screenshots.diffImages).to.not.be.a.path('path does not exist');
            });
        });

        //change te browser view so that regression image is a bit different
        it("should set value input search to 'change screenshot'", function () {
            return browser.setValue("input[name='q']", "change screenshot");
        });

        //regression image
        it("should save a screenshot of the browser view as regression image", function () {
            return browser.saveScreenshot(config.screenshots.regressionImages + browser.desiredCapabilities.browserName + "/" + 'browserViewRegression.png').then(function () {  //use default name defined in function
                expect(config.screenshots.regressionImages + browser.desiredCapabilities.browserName + "/" + "browserViewRegression.png").to.be.a.path("");
                //expect(config.screenshots.diffImages).to.not.be.a.path('path does not exist');
            });
        });

    });

    /**
     * @desc test data of the compared baseline and regression image.
     * @info compare the images with the resemble api. the data given back by that api is tested here.
     * */

    describe('Compare baseline image to regression image:', function () {

        it("expect data of comparison not to be empty", function () {
            return visualRegression.CompareImages("browserView.png", "browserViewRegression.png").then(function (data) {
                resultComparison = data;
            });
        });

        it("expect screenshots to be same dimension ", function () {
            return expect(resultComparison.isSameDimensions).to.be.true
        });

        it("expect misMatchPercentage not to be above '0' ", function () {
            expect(resultComparison.misMatchPercentage).not.to.be.above(0);
        });

        //make diff image and test if it is made
        it("should make 'diff.png' in " + config.screenshots.diffImages, function () {
            return visualRegression.makeDiffImage(resultComparison).then(function () {
                expect(config.screenshots.diffImages).to.be.a.path('path does not exist');
            });
        });

        //hook after each test
        /**
         * @desc After each test check if test failed. When a test failed add the diff image to the reporter
         * @info with the log event the reporter is triggered. By adding the needed data the reporter add the diff to the test.
         * */

        afterEach(function () {
            if (this.currentTest.state == 'failed') { //if a mocha test fails then add te diff image to the allure reporter
                return new Promise(function (resolve, reject) {
                    console.log("state");
                    resolve(browser.emit("log", {
                            remote: "remote add image",
                            title: "resemble",
                            file: '/home/maarten/Documents/seleniumGridTest/tests/screenshots/diff/chrome/diff.png',
                            type: "image/png"
                        })
                    )
                })
            }
        });

    });

});


