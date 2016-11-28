#!/bin/bash

if [ -f "/usr/local/bin/chromedriver" ]; then # Will enter here if $DIRECTORY exists, even if it contains spaces
echo "Chromedriver already exists"

else
echo "Install Chromedriver file"

curl -O https://chromedriver.storage.googleapis.com/2.25/chromedriver_mac64.zip
unzip chromedriver_mac64.zip
rm -f /usr/local/bin/chromedriver
mv chromedriver /usr/local/bin/
rm -f chromedriver_mac64.zip

fi