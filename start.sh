#!/bin/bash

echo "kill firefox and screens"
pkill firefox
killall Xvfb
kill `sudo lsof -t -i:4444`

echo "install java"

apt-get install default-jre
apt-get install openjdk-7-jdk

echo "install xvfb, firefox and imagemagick "

apt-get install xvfb firefox imagemagick

echo "start display:2"

Xvfb :6 -screen 0 1280x960x24 &

echo "start selenium hub"

java -jar selenium-server-standalone-2.53.1.jar -role hub &
sleep 10

echo "start firefox go to grid console"

DISPLAY=:6 firefox http://localhost:4444/grid/console &
sleep 10

echo "make screenshot with imagemagick. display 2. image file in sources"

DISPLAY=:6 import -window root -crop 1264x948+0+0 -resize 1264x948 -quality 90 /var/www/sources/seleniumGridTest/screenshot.jpg &
sleep 10

./node_modules/.bin/wdio wdio.conf.js
sleep 10

DISPLAY=:6 import -window root -crop 1264x948+0+0 -resize 1264x948 -quality 90 /var/www/sources/seleniumGridTest/screenshot.jpg &
sleep 10

echo "kill firefox and screens"
pkill firefox
killall Xvfb
kill `sudo lsof -t -i:4444`