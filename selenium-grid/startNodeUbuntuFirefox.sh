#!/bin/bash

java -Dwebdriver.firefox.bin=drivers/geckodriver -jar ./selenium-standalone/selenium-server-standalone-3.0.1.jar -role node -nodeConfig configuration/seleniumNodeFirefoxConfiguration.json
