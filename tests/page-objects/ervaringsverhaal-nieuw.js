/**
 * Created by maarten on 15-11-16.
 */
var config = require('./../../config');

var Page = require("./page");

/**
 * @desc constructor ExperienceStory
 * initzialize dom elements selectors
 * */

function ExperienceStory() {
    Page.call(this, config.pages.ervaringDonatie);
    this.experienceUrl = config.pages.ervaringDonatie;
    this.form = "form[name='experience']";
    this.titleText = "Ervaringsverhaal doneren - MIND blue";
}

/**
 * subclass ExperienceStory extends page
 * */

ExperienceStory.prototype = Object.create(Page.prototype);
ExperienceStory.prototype.constructor = ExperienceStory;


ExperienceStory.prototype.getElementId = function (elem) {
    return elem.value.ELEMENT
};

module.exports = ExperienceStory;