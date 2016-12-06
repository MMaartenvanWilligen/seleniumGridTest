#!/bin/bash

java -Dwebdriver.chrome.driver=drivers/chromedriver -jar ./selenium-standalone/selenium-server-standalone-3.0.1.jar -role node -nodeConfig configuration/seleniumNodeChromeConfiguration.json

