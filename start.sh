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

Xvfb :2 -screen 0 1280x960x24 &

echo "start selenium hub"

java -jar selenium-server-standalone-2.53.1.jar -role hub &
sleep 10

echo "start selenium node"
java -jar selenium-server-standalone-2.53.1.jar -role node -hub http://172.17.0.1:4444/grid/register/ -browser browserName=firefox,maxInstances=5
sleep 10

echo "start firefox go to grid console"

DISPLAY=:2 firefox http://localhost:4444/grid/console &
sleep 10

echo "make screenshot with imagemagick. display 2. image file in sources"

DISPLAY=:2 import -window root -crop 1264x948+0+0 -resize 1264x948 -quality 90 /var/www/sources/seleniumGridTest/screenshot.jpg &

echo "kill firefox and screens"
pkill firefox
killall Xvfb
kill `sudo lsof -t -i:4444`