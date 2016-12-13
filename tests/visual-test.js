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
    var homepage;
    var visualRegression;

    //hook run before tests
    before(function () {
        homepage = new HomepageMindBlue();
        console.log("before" + " " + browser.desiredCapabilities.browserName);
        visualRegression = new VisualRegression();
        return homepage.goToPage();
    });

    describe('Take screenshot', function () {

        it("should save a screenshot of the browser view", function () {
            return browser.saveScreenshot(config.screenshots.baselineImages + browser.desiredCapabilities.browserName + "/" + 'browserView.png').then(function () {  //use default name defined in function
                expect(config.screenshots.baselineImages + browser.desiredCapabilities.browserName + "/" + "browserView.png").to.be.a.path("");
                //expect(config.screenshots.diffImages).to.not.be.a.path('path does not exist');
            });
        });


        it("should save a screenshot of the browser view as regression", function () {
            return browser.setValue("input[name='q']", "change screenshot").then(function () {
                return browser.saveScreenshot(config.screenshots.regressionImages + browser.desiredCapabilities.browserName + "/" + 'browserViewRegression.png').then(function () {  //use default name defined in function
                    expect(config.screenshots.baselineImages + browser.desiredCapabilities.browserName + "/" + "browserViewRegression.png").to.be.a.path("");
                    //expect(config.screenshots.diffImages).to.not.be.a.path('path does not exist');
                });
            })
        });

    });

    describe('Compare baseline image to regression image:', function () {

        before(function () {
            return visualRegression.CompareImages("browserView.png", "browserViewRegression.png").then(function (data) {
                resultComparison = data;
            });
        });

        it("expect data of comparison not to be empty", function () {
            return expect(resultComparison).not.to.be.empty;
        });

        it("expect screenshots to be same dimension ", function () {
            return expect(resultComparison.isSameDimensions).to.be.true
        });

        it("expect misMatchPercentage not to be above '0' ", function () {
            expect(resultComparison.misMatchPercentage).not.to.be.above(0);
        });

        it("should make 'diff.png' in " + config.screenshots.diffImages, function () {

            return visualRegression.makeDiffImage(resultComparison).then(function () {  //use default name defined in function
                expect(config.screenshots.diffImages + browser.desiredCapabilities.browserName + "/" + "diff.png").to.be.a.path("");
                //expect(config.screenshots.diffImages).to.not.be.a.path('path does not exist');
            });
        });

    });

});





