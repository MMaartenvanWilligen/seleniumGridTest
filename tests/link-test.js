/**
 * Created by maarten on 11-11-16.
 */



var assert = require('assert');
var chai = require('chai')
    , expect = chai.expect
    , should = chai.should();

var HomepageMindBlue = require("./page-objects/homepage-mind-blue");
var homepage;

describe("links", function () {

    before(function () {
        homepage = new HomepageMindBlue();
        return homepage.goToPage();
    });

    it("array of href attributes should be iterable", function () {
        return browser.getAttribute('a', 'href').then(function (attrs) {
            attrs.forEach(function (href) {
                loop(href);
            });
            return attrs.should.be.iterable;
        });
    });

    function loop(attrs) {
        describe("test anchor tag", function () {
            it("href should have length above 11", function () {
                return expect(attrs).to.all.have.length.above(11);
            });
        });
    }

    it("array of alt attributes should be iterable", function () {
        return browser.getAttribute('a', 'alt').then(function (attrs) {
            attrs.forEach(function (href) {
                loop(href);
            });
            return attrs.should.be.iterable;
        });
    });

});



