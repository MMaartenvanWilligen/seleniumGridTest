/**
 * Created by maarten on 03-11-16.
 */

/**
 * @desc required libaries
 * */

var assert = require('assert');
var chai = require('chai')
    , expect = chai.expect
    , should = chai.should();

var HomepageMindBlue = require("./page-objects/homepage-mind-blue");
var homepage;

describe('title test', function () {

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
        return browser.saveScreenshot('./screenshots/browserView.png');
    });

});
