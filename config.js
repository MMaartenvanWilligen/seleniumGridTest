/**
 * Created by maarten on 12-12-16.
 */

// in config.js
var config = {

    "screenshots": {
        screenshotRoot: './tests/screenshots/',
        baselineImages: './tests/screenshots/baseline/',
        regressionImages: './tests/screenshots/regression/',
        diffImages: './tests/screenshots/diff/'
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
    }
};

module.exports = config;