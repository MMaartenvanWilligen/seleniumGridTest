## Installation instructions local (On MAC)

#### Requirements
- MAC 64 bit
- Java 8

#### Fork and clone project
Navigate to the Github repository: https://github.com/ConnectHolland/Front-End-Testing-Framework

Click, at the top right corner of the page, on the fork button.

Then make a local clone from the fork on your machine.

``` command
$ git clone https://github.com/YOUR-USERNAME/Front-End-Testing-Framework
```

#### Install Firefox en Chrome browser

##### Install firefox

Download link: 
http://ftp.mozilla.org/pub/mozilla.org/firefox/releases/50.0/linux-x86_64/en-US/firefox-50.0.tar.bz2

##### Install chrome 

Download link: https://www.google.com/chrome/browser/desktop/index.html?platform=mac

#### Install browser drivers

The project includes two installation files in the installDependencies directory: installGeckodriver.sh and installChromedriver.sh .
These sh files download and move the driver into the /usr/local/bin/ directory on your machine. They are compatible with the chrome browser 55.0.2883.75 and firefox 50.0

``` command
$ sudo sh localInstallation/localinstallGeckodriver.sh && sh localInstallation/installChromedriver.sh
```
The drivers should be on your systems path. 

On mac you can confirm if they are on the path by executing the following command: 

``` command
$ printf "%s\n" $PATH
```
#### start test
The start.sh file starts the hub and nodes and you are ready to start testing on the grid(selenium grid needs java 8) 

``` command
$ sudo sh start.sh
```