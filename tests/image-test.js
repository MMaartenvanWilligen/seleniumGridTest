/**
 * Created by maarten on 22-11-16.
 */


/**
 * testing for aria attributes is optional. There is no evidence aria attributes are indexed by search engines.
 * However, it is good for the accessibility of the website.
 *
 * */


var assert = require('assert');
var chai = require('chai')
    , expect = chai.expect
    , should = chai.should();

var HomepageMindBlue = require("./page-objects/homepage-mind-blue");
var homepage;

describe("homepage", function () {

    before(function () {
        homepage = new HomepageMindBlue();
        return homepage.goToPage();
    });

    describe("card images", function () {


        it("array of role attributes should be iterable", function () {
            return browser.getAttribute(homepage.cardImages, "role").then(function (attrs) {
                attrs.forEach(function (role) {
                    console.log("role" + "  " + role);
                    loopRoleTests(role);
                });
                return attrs.should.be.iterable;
            });
        });

        function loopRoleTests(attrs) {
            describe("role", function () {
                it("should exists", function () {
                    return should.exist(attrs);
                });
            });
        }

    });

    describe("card images", function () {

        it("array of aria-labels attributes should be iterable", function () {
            return browser.getAttribute(homepage.cardImages, "aria-label").then(function (attrs) {
                attrs.forEach(function (label) {
                    console.log("aria label" + "  " + label);
                    looplabelTest(label);
                });
                return attrs.should.be.iterable;
            });
        });

        function looplabelTest(attrs) {
            describe("aria-label", function () {
                it("should exists", function () {
                    return should.exist(attrs);
                });
            });
        }

    });

    describe("logo", function () {

        it("should have alt attribute", function () {
            browser.getAttribute(homepage.logoImageDesktop, "alt").then(function (attrs) {
                console.log("logo alt" + " " + attrs);
                return attrs.should.be.above(50);
            })
        });

    });

});

