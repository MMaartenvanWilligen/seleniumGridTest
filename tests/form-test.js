/**
 * Created by maarten on 15-12-16.
 */

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

// // it("set value text area", function () {
// //    return browser.setValue(experienceStory.textArea, "dit is de text area text".then(function () {
// //         console.log("text area set");
// //     }));
// // });
//
// it("submit form", function () {
//     return browser.submitForm(experienceStory.form);
// });
//
// it("should save a screenshot of the form", function () {
//     console.log("form screenshot");
//     return browser.saveScreenshot(config.screenshots.remainingImages + "form.png");
// });