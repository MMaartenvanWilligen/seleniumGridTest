# Mind-blue front-end integration tests 

##Summary

This is a front-end test suite for the mind-blue website. The purpose of this test suite is to add automated quality control to the project, what is inline with the continuous integration ambitions of Connect Holland. The following frameworks and libraries are used for setting up the test area.  

- NodejS 
- Selenium grid 3 (Run tests on multiple browser. http://www.seleniumhq.org/docs/) 
- Mocha (Javascript test framework. https://mochajs.org) 
- Webdriverio (Browser automation. http://webdriver.io/)

## Installation instructions (on virtual machine)

#### Fork en clone project
Navigate to the Github repository: https://github.com/ConnectHolland/Front-End-Testing-Framework

Click, at the top right corner of the page, on the fork button and follow the instructions.

Then make a local clone from the fork in the desired directory on your virtual machine. 

``` command
$ git clone https://github.com/YOUR-USERNAME/Front-End-Testing-Framework
```

#### Initialize Node

``` command
$ sudo npm install
```
#### Install Firefox en Chrome browser

##### Install firefox
Install firefox by executing the 'installFirefox.sh'.

``` command
$ sudo sh installFirefox.sh
```
##### Install chrome
(Not yet implemented)

#### Browser drivers
Selenium grid 3 doesn't include browser drivers anymore, so we have to install them remotely. The project includes a firefox driver installation file called installGeckodriver.sh . The sh file download and moves the driver into the /usr/local/bin/ directory on your virtual machine. 

``` command
$ sudo sh installGeckodriver.sh
```
The drivers should be on your systems path. Check if they are on by executing the following command: 

``` command
$ printf "%s\n" $PATH
```
When the file is not visible on the Path. Navigate to [Set path](####Set path driver)

#### Start test
The start.sh file initializes the selenium grid and executes the test. 

``` command
$ sudo sh start.sh
```
#### Test results

The test results are visible in the terminal and available in json format in the '/log/json/' directory. 

## Installation instructions local (On MAC)

There is also a possibility to setup the project on your MAC
[go to README](https://github.com/ConnectHolland/Front-End-Testing-Framework/localInstallation)

## Potential errors or installations

#### Set path driver
Open bash file 

``` command
$ vi $HOME/.bash_profile
```
Add driver path to file:

export PATH=$PATH: /usr/bin/geckodriver </br>

Save and exit file. Then run bash file.

``` command
$ source $HOME/.bash_profile
```

Check if path is set.

``` command
$ printf "%s\n" $PATH
```

#### Install java 8 (error: Unsupported major.minor version 52.0)

The selenium grid used in this project is compatible with the java 8. Check java version:

``` command
$ javac -version
```

## Project maintainer

Maarten van Willigen

## License

MIT

