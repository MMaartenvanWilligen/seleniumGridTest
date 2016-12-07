var assert = require('assert');
var chai = require('chai')
    , expect = chai.expect
    , should = chai.should();
var webdrivercss = require('webdrivercss');

var HomepageMindBlue = require("./page-objects/homepage-mind-blue");
var homepage;

describe('title test', function () {

    //hook run before tests
    before(function () {
        homepage = new HomepageMindBlue();
        return webdrivercss.init(browser).then(function () {
            return homepage.goToPage();
        });
    });

    it("visual test", function () {

       return webdrivercss.init(browser, {
            screenshotRoot: 'screenshots',
            failedComparisonRoot: 'diffs',
            misMatchTolerance: 0.05,
            screenWidth: [320, 480, 640, 1024]
        });
    });


    it("visual test", function () {
        return browser.webdrivercss('startpage', [
            {
                name: 'logo',
                elem: homepage.logoImageDesktop
            }, {
                name: 'header',
                elem: '.header'
            }
        ], function (err, res) {
           return assert.ok(res.header[0].isWithinMisMatchTolerance);
        })

    });
});





