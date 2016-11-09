#!/bin/bash

echo "kill firefox and screens"
pkill firefox
killall Xvfb

echo "install java"

apt-get install default-jre
apt-get install openjdk-7-jdk

echo "install xvfb, firefox and imagemagick "

apt-get install xvfb firefox imagemagick

echo "start display:1"

Xvfb :1 -screen 0 1280x960x24 &
DISPLAY=:1 firefox http://www.google.com &
sleep 10

echo "make screenshot with imagemagick. display 1. image file in sources"

DISPLAY=:1 import -window root -crop 1264x948+0+0 -resize 1264x948 -quality 90 /var/www/sources/screenshot.jpg

echo "kill firefox"

pkill firefox