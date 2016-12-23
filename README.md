# Mind-blue front-end integration tests 

##Summary

This is a front-end test suite for the mind-blue website. The purpose of this test suite is to add automated quality control to the project, what is inline with the continuous integration ambitions of Connect Holland. The following frameworks and libraries are used for setting up the test environment.  

- NodejS 
- Selenium grid 3 (Run tests on multiple browser. http://www.seleniumhq.org/docs/) 
- Mocha (Javascript test framework. https://mochajs.org) 
- Resemble.js (Image analysis and comparison)
- Webdriverio (Browser automation. http://webdriver.io/)

## Installation instructions (on virtual machine)

#### Fork and clone project

Click, at the top right corner of the page, on the fork button and follow the instructions.

Then make a local clone from the fork in the desired directory on your virtual machine. 

``` command
$ git clone https://github.com/YOUR-USERNAME/Front-End-Testing-Framework
```

#### setup project

``` command
$ npm install
```

#### Run grid

Tests run on a selenium grid. Instruction on how to setup a grid can be found here [here](./selenium-grid/README.md)

#### Run tests
You can run the tests by the following command.

##### When grid runs on virtual machines
``` command
$ npm run test
```

##### Grid runs local
Change package.json > scripts > test to: "test": "./node_modules/.bin/wdio wdio.local.conf.js"
``` command
$ npm run test
```
#### Test results

Test results can be viewed in a lot of ways. Now you can view them with the allure-reporter. If you want to use another reporter change the wdio.conf file reporter options. 

``` command
$ npm run report
```

## Project maintainer

Maarten van Willigen

## License

MIT

