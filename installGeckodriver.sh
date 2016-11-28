#!/bin/bash

# Get linux 64 bit geckodriver version 11.1
wget https://github.com/mozilla/geckodriver/releases/download/v0.11.1/geckodriver-v0.11.1-linux64.tar.gz

# Unpack te downloaded tar.gz file
tar -zxvf geckodriver-v0.11.1-linux64.tar.gz

# Move the unpacked file to /usr/bin
mv geckodriver /usr/bin/

# remove the tar.gz to cleanup the directory
rm -f geckodriver-v0.11.1-linux64.tar.gz
