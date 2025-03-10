## Installation instructions local (On MAC)

#### Requirements
- MAC 64 bit
- Java 8

#### Fork and clone project

Click, at the top right corner of the page, on the fork button. Fork the selenium-grid.

Then clone the fork on your local machine

``` command
$ git clone https://github.com/YOUR-USERNAME/Front-End-Testing-Framework/selenium-grid/
```

#### Install Firefox and Chrome browser

##### Install firefox

Download link: 
http://ftp.mozilla.org/pub/mozilla.org/firefox/releases/50.0/linux-x86_64/en-US/firefox-50.0.tar.bz2

##### Install chrome 

Download link: https://www.google.com/chrome/browser/desktop/index.html?platform=mac

#### Install browser drivers

The project includes two installation files in the installDependencies directory: installGeckodriver.sh and installChromedriver.sh .
These sh files download and move the drivers into the /usr/local/bin/ directory on your machine. These drivers are compatible with the chrome browser 55.0.2883.75 and firefox 50.0

``` command
$ sudo sh localInstallation/localinstallGeckodriver.sh && sh localInstallation/installChromedriver.sh
```
The drivers should be on your systems path. 

On mac you can confirm if they are on the path by executing the following command: 

``` command
$ printf "%s\n" $PATH
```
#### start grid
Run the start.sh file. The hub and nodes start and you are ready to go!

``` command
$ sudo sh start.sh
```