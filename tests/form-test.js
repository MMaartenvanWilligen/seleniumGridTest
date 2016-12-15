/**
 * Created by maarten on 15-12-16.
 */

assert = require('assert');
var config = require('../config');
var chai = require('chai')
    , expect = chai.expect
    , should = chai.should();

var ExperienceStory = require("./page-objects/ervaringsverhaal-nieuw");
var experienceStory;

describe("homepage", function () {

    describe("links", function () {

        //hook run before tests
        before(function () {
            experienceStory = new ExperienceStory();
            return experienceStory.goToPage();
        });

        it("Title should be 'MINDblue'", function () {
            return browser.getTitle().then(function (title) {
                return assert(title === experienceStory.titleText);
            });
        });

        // it("fill form", function () {
        //
        //
        // });

    });

});