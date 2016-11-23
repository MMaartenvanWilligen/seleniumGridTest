/**
 * Created by maarten on 22-11-16.
 */

var assert = require('assert');
var chai = require('chai')
    , expect = chai.expect
    , should = chai.should();

var HomepageMindBlue = require("./page-objects/homepage-mind-blue");
var homepage;


describe("search", function () {

    before(function () {
        homepage = new HomepageMindBlue();
        return homepage.goToPage();
    });
