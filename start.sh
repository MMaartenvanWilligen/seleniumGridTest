#!/bin/bash

echo "Kill firefox, display and port 4444"
killall firefox
killall Xvfb
kill `sudo lsof -t -i:4444`

echo "Install java"

dpkg -s openjdk-8-jdk 2>/dev/null >/dev/null || apt-get -y install openjdk-8-jdk

echo "Install Xvfb and Imagemagick"

apt-get install imagemagick
apt-get install xvfb -y

echo "Start display:88"

Xvfb -ac  :88 -screen 0 1280x960x24 &

echo "Start selenium hub"

java -jar selenium-grid/selenium-server-standalone-3.0.1.jar -role hub &
sleep 10

echo "Starting up Selenium Grid node Firefox"
DISPLAY=:88 xvfb-run java -jar selenium-grid/selenium-server-standalone-3.0.1.jar -role node -port 5555 -hub http://localhost:4444/grid/register -browser browserName=firefox,platform=LINUX,maxInstances=5 &
sleep 10


