#!/bin/bash

java -Dwebdriver.edge.driver=selenium-grid/MicrosoftWebDriver.exe -jar selenium-grid/selenium-server-standalone-3.0.1.jar -role node -nodeConfig conf/seleniumNodeEdgeConfiguration.json
