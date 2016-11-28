/**
 * Created by maarten on 22-11-16.
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

describe("Logo", function () {

    //hook run before tests
    before(function () {
        homepage = new HomepageMindBlue();
        return homepage.goToPage();
    });

    /**
     * @desc test if desktop image has alt tag
     * Using 'length above' assertion instead of 'exist' because it has a better error message
     * */

    it("desktop image should have alt attribute", function () {
        return browser.getAttribute(homepage.logoImageDesktop, "alt").then(function (attrs) {
            console.log("logo alt" + " " + attrs);
            return attrs.should.be.length.above(2);
        })
    });

    /**
     * @desc test if mobile image has alt tag
     * Using 'length above' assertion instead of 'exist' because it has a better error message
     * */

    it("mobile image should have alt attribute", function () {
        return browser.getAttribute(homepage.logoImageMobile, "alt").then(function (attrs) {
            console.log("logo alt" + " " + attrs);
            return attrs.should.be.length.above(2);
        })
    });

    it("image should have alt attribute text 'MIND logo'", function () {
        return browser.getAttribute(homepage.logoImage, "alt").then(function (attrs) {
            console.log("logo alt" + " " + attrs);
            return expect(attrs).to.deep.equal(["MIND logo", "MIND logo"]);
        })
    });

});

