/**
 * Created by maarten on 11-11-16.
 */



var assert = require('assert');
var chai = require('chai')
    , expect = chai.expect
    , should = chai.should();

var HomepageMindBlue = require("./page-objects/homepage-mind-blue");
var homepage;
var i = 0;
describe("test anchor tag", function () {

    before(function () {
        homepage = new HomepageMindBlue();
        return homepage.goToPage();
    });

    it("get attribute", function () {
        return browser.getAttribute('a', 'href').then(function (attrs) {
            console.log(attrs);
            attrs.forEach(function (href) {
                loop(href);
            });
            return attrs.should.be.iterable;

        });
    });

    function loop(attrs) {
        i++;
        describe("test anchor tag", function () {
            it("href should not be null", function () {
                console.log("href" + " " + i);
                return expect(attrs).to.all.have.length.above(23);
            });
        });
    }

});



