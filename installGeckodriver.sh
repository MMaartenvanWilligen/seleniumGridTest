#!/bin/bash

wget https://github.com/mozilla/geckodriver/releases/download/v0.11.1/geckodriver-v0.11.1-linux64.tar.gz
tar -zxvf geckodriver-v0.11.1-linux64.tar.gz
mv geckodriver /usr/bin/
rm -f geckodriver-v0.11.1-linux64.tar.gz

