var assert = require('assert');
var chai = require('chai')
    , expect = chai.expect
    , should = chai.should();
var webdrivercss = require('webdrivercss');
var fs = require("fs");
var gm = require('gm');

var HomepageMindBlue = require("./page-objects/homepage-mind-blue");
var homepage;

describe('title test', function () {

    //hook run before tests
    before(function () {
        homepage = new HomepageMindBlue();
        webdrivercss.init(browser);
        return homepage.goToPage();

    });

    it("visual test", function () {

        return webdrivercss.init(browser, {
            screenshotRoot: 'tests/screenshots/baseline',
            failedComparisonRoot: 'tests/screenshots/diffs',
            misMatchTolerance: 0.05,
            screenWidth: [1024]
        });
    });

    it('should exist an baseline image in the screenshots folder', function (done) {
        fs.exists('screenshots/baseline/homepage.header.baseline.png', function (exists) {
            exists.should.equal(true);
            done();
        });
    });

    it("visual test", function () {

        return browser.webdrivercss('homepage',
            {
                name: 'logo',
                elem: homepage.logoImageDesktop,
                screenWidth: [1024]

            }).then(function (res) {
                console.log("res");
            return gm.compare('tests/screenshots/baseline/homepage.logo.1024px.baseline.png', 'tests/screenshots/baseline/homepage.logo.1024px.baseline.png', function (err, isEqual, equality, raw) {
                console.log("equality" + " " + equality);
                return equality.should.be.within(0, 0.0001);

            });
        })


    });
});





