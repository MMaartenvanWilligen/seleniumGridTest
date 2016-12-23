/**
 * Created by maarten on 11-11-16.
 */

/**
 * @global 'browser' is wdio global. The driver for browser automation
 * @desc required libaries
 * */

var assert = require('assert');
var chai = require('chai')
    , expect = chai.expect
    , should = chai.should();

var HomepageMindBlue = require("./page-objects/homepage-mind-blue");
var homepage;

describe("links", function () {

    //hook run before tests
    before(function () {
        homepage = new HomepageMindBlue();
        return homepage.goToPage();
    });

    it("array of href attributes should be iterable", function () {

        return browser.getAttribute('a', 'href').then(function (attrs) {
            attrs.forEach(function (href) {
                console.log(href);
                testHrefAttribute(href);
            });
            return attrs.should.be.iterable;
        });


    });

    function testHrefAttribute(attrs) {
        describe("attribute", function () {
            it("href should have length above 11", function () {
                return expect(attrs, "href should have length of above 11").to.have.length.above(11);
            });
        });
    }

});



