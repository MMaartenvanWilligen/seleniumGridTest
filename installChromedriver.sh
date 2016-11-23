#!/bin/bash

curl -O https://chromedriver.storage.googleapis.com/2.25/chromedriver_mac64.zip
unzip chromedriver_mac64.zip
rm -f /usr/local/bin/chromedriver
mv chromedriver /usr/local/bin/
rm -f chromedriver_mac64.zip

