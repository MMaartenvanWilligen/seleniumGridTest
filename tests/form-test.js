/**
 * Created by maarten on 15-12-16.
 */

/**
 * @global 'browser' is wdio global. The driver for browser automation
 * @desc required libaries
 * */

var assert = require('assert');
var config = require('../config');
var chai = require('chai')
    , expect = chai.expect
    , should = chai.should();

var ExperienceStory = require("./page-objects/ervaringsverhaal-nieuw");
var experienceStory;
var popup = true;

describe("new experience story", function () {

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

    it("should click on experience category selector 'klachten' ", function () {
        return browser.click(experienceStory.formCategory).then(function () {
            if (popup === true) {
                console.log("if");
                return browser.click(experienceStory.popupConfirmationButton).then(function () {
                    popup = false;
                    console.log("clicked");
                    return browser.click(option["value=complaints"]);
                   // return browser.saveScreenshot(config.screenshots.remainingImages + "form.png");
                })
            }
            else {
                return browser.click(experienceStory.formCategory > option["value=complaints"]).then(function () {
                    console.log("clicked");
                })
            }
        });
    });

});
