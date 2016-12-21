var chai = require('chai')
    , expect = chai.expect
    , should = chai.should();
chai.use(require('chai-fs'));
var webdrivercss = require('webdrivercss');
var resemble = require("node-resemble-js");
var VisualRegression = require("./resemble/visualRegression");
var HomepageMindBlue = require("./page-objects/homepage-mind-blue");
var config = require('../config');


describe('screenshot compare', function () {

    var resultComparison = {};
    var homepage, visualRegression;

    //hook run before tests
    before(function () {
        homepage = new HomepageMindBlue();
        visualRegression = new VisualRegression();
        return homepage.goToPage();
    });

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

    describe('Compare baseline image to regression image:', function () {

        it("expect data of comparison not to be empty", function () {
            return visualRegression.CompareImages("browserView.png", "browserViewRegression.png").then(function (data) {
                resultComparison = data;
                return data
            });
        });

        it("expect screenshots to be same dimension ", function () {
            return expect(resultComparison.isSameDimensions).to.be.true
        });

        it("expect misMatchPercentage not to be above '0' ", function () {
            expect(resultComparison.misMatchPercentage).not.to.be.above(0);
        });

        it("should make 'diff.png' in " + config.screenshots.diffImages, function () {
            return visualRegression.makeDiffImage(resultComparison).then(function () {
                //expect(cconfig.screenshots.diffImages + browser.desiredCapabilities.browserName + "/" + "diff.png").to.be.a.path("");
                expect(config.screenshots.diffImages).to.be.a.path('path does not exist');
            });
        });

        it("attach file remote to the allure reporter", function () {
            // return browser.emit("log", {
            //     remote: "remote add image",
            //     title: "resemble",
            //     file: '/home/maarten/Documents/seleniumGridTest/tests/screenshots/diff/chrome/diff.png',
            //     type: "image/png"
            // });
        });

        //if a mocha test fails then add te diff image to the allure reporter
        afterEach(function () {
            if (this.currentTest.state == 'failed') {
                console.log("state");
                return browser.emit("log", {
                    remote: "remote add image",
                    title: "resemble",
                    file: '/home/maarten/Documents/seleniumGridTest' + config.screenshots.diffImages + 'diff.png',
                    type: "image/png"
                });
            }
        });

    });

});


