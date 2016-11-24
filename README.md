# Mind-blue front-end test
in short: tests for mind-blue on local selenium grid

##Summary

This is a front-end test suite for the mind-blue website. The goal of this test suite is to add automated quality control on the project, what is inline with the continuous integration ambitions of Connect Holland. The following frameworks and libraries are used for setting up the test area.  

- NodejS 
- Selenium grid (Run test on multiple browser. http://www.seleniumhq.org/docs/) 
- Mocha (Javascript test framework. https://mochajs.org) 
- Webdriverio (Browser automation. http://webdriver.io/)

## Installation instructions (for MAC)

#### Fork en clone project
Navigate to the github repository: https://github.com/ConnectHolland/Front-End-Testing-Framework

Click, at the top right corner of the page, on the fork button

Then make a local clone from the fork

``` command
$ git clone https://github.com/YOUR-USERNAME/Front-End-Testing-Framework
```

#### Install Firefox en Chrome browser

##### Install firefox

Download link: 
http://ftp.mozilla.org/pub/mozilla.org/firefox/releases/50.0/linux-x86_64/en-US/firefox-50.0.tar.bz2

##### Install chrome 

Download link: https://www.google.com/chrome/browser/desktop/index.html?platform=mac

#### browser drivers

Selenium grid 3 doesn’t include browser drivers anymore, so we have to install them remotely. The project includes two installation files installGeckodriver.sh and installChromedriver.sh. These sh files download and move the driver into the /usr/local/bin/ directory on your machine. 

``` command
$ sudo sh installGeckodriver.sh && sh installChromedriver.sh
```
The drivers should be on your systems path. Check if they are by executing the following command: 

``` command
$ printf "%s\n" $PATH
```
When they are not on the Path go to [Set path](#Set path drivers)

#### start test
The start.sh file initializes the selenium grid and executes the test. (selenium grid needs java 8) 

``` command
$ sudo sh start.sh
```
## Potential errors or installations

#### set path drivers

Open bash file 

``` command
$ vi $HOME/.bash_profile
```
Add drivers path to file:

export PATH=$PATH: /usr/bin/geckodriver </br>
export PATH=$PATH: /usr/bin/chromedriver

Save and exit file. Then run bash file

``` command
$ source $HOME/.bash_profile
```

Check if path is set

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

## license

MIT

