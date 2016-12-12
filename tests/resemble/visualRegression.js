/**
 * Created by maarten on 12-12-16.
 */

/**
 * @desc require libraries
 * */

var resemble = require("node-resemble-js");
var Promise = require("bluebird");
var fs = require('fs');
var config = require('../../config');

/**
 * @desc constructor
 * init resemble settings
 * */

function VisualRegression() {

    resemble.outputSettings({
        errorColor: config.resemble.errorColor,
        errorType: config.resemble.errorType,
        transparency: config.resemble.transparency
    });

}

/**
 * @desc method
 * @info compare baseline image to regression image with the api Resemble
 * @param {string} baselineImage
 * @param {string} regressionImage
 * @returns promise
 * @resolve data: {
      misMatchPercentage : 100, // %
      isSameDimensions: true, // or false
      dimensionDifference: { width: 0, height: -1 }, // defined if dimensions are not the same
      getImageDataUrl: function(){}
    }
 * */

VisualRegression.prototype.CompareImages = function (baselineImage, regressionImage) {

    baselineImage = typeof baselineImage !== 'undefined' ? baselineImage : config.defaultNames.baselineImage;   //set param baselineImage to default value when it is undefined
    regressionImage = typeof regressionImage !== 'undefined' ? regressionImage : config.defaultNames.regressionImage; //set param regressionImage to default value when it is undefined

    return new Promise(function (resolve, reject) {
        resemble(config.screenshots.baselineImages + baselineImage)
            .compareTo(config.screenshots.regressionImages + regressionImage)
            .ignoreColors()
            .onComplete(function (data) {
                resolve(data);
            });
    });

};

/**
 * @desc method
 * @info make a image, with the api resemble, that shows the difference between the baseline image and regression image
 * @param {string} DataOfComparison
 * @param {string} diffImageOutputName
 * @returns promise
 * @resolve image created
 * */

VisualRegression.prototype.makeDiffImage = function (DataOfComparison, diffImageOutputName) {

    diffImageOutputName = typeof diffImageOutputName !== 'undefined' ? diffImageOutputName : config.defaultNames.diffImage; //set param diffImageOutputName to default value when it is undefined

    return new Promise(function (resolve, reject) {
        resolve(DataOfComparison.getDiffImage().pack().pipe(fs.createWriteStream(config.screenshots.diffImages + diffImageOutputName + ".png")));
    }).then(function () {
        console.log("diff image made");
    });

};

module.exports = VisualRegression;