#!/bin/bash

curl -O https://github.com/mozilla/geckodriver/releases/download/v0.11.1/geckodriver-v0.11.1-macos.tar.gz
tar -xvf geckodriver-v0.11.1-macos.tar.gz
rm -f /usr/local/bin/geckodriver
mv geckodriver /usr/local/bin/
rm -f geckodriver-v0.11.1-linux64.tar.gz
