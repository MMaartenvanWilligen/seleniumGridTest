/**
 * Created by maarten on 12-12-16.
 */

/**
 * @desc configuration
 * @info config for screenshot paths, resemble settings, default image names aan page paths
 */

// in config.js
var config = {

    "screenshots": {
        screenshotRoot: './tests/screenshots/',
        baselineImages: './tests/screenshots/baseline/',
        regressionImages: './tests/screenshots/regression/',
        diffImages: './tests/screenshots/diff/',
        remainingImages: './tests/screenshots/remaining/'
    },

    "resemble": {
        errorColor: {
            red: 255,
            green: 255,
            blue: 0
        },
        errorType: 'movementDifferenceIntensity',
        transparency: 0.3
    },

    "defaultNames": {
        baselineImage: "baseline",
        regressionImage: "regression",
        diffImage: "diff"
    },

    "pages": {
        root: 'https://mindblue.nl',
        homepage: 'https://mindblue.nl',
        ervaringDonatie: 'https://mindblue.nl/ervaringsverhaal/donatie/nieuw'
    }
};

module.exports = config;