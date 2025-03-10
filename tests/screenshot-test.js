/**
 * Created by maarten on 03-11-16.
 */

/**
 * @global 'browser' is wdio global. The driver for browser automation
 * @desc required libaries
 * */

var assert = require('assert');
var chai = require('chai')
    , expect = chai.expect
    , should = chai.should();
var config = require('../config');
var Allure = require(".././node_modules/allure-js-commons/index");


var HomepageMindBlue = require("./page-objects/homepage-mind-blue");
var homepage;

describe('make screenshot', function () {

    //hook run before tests
    before(function () {
        homepage = new HomepageMindBlue();
        return homepage.goToPage();
    });

    it("should resize the current viewport to width '500'", function () {
        return browser.setViewportSize({
            width: 1920,
            height: 1080
        }).then(function () {
            return browser.windowHandleSize().then(function (res) {
                return expect(res.value).to.have.deep.property("width", 1920);
            });
        });
    });

    it("should save a screenshot of the browser view", function () {
        console.log("screenshot");
        return browser.saveScreenshot(config.screenshots.remainingImages + "homepage.png");
    });

});


