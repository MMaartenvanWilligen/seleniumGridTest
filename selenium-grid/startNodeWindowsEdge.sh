#!/bin/bash

java -Dwebdriver.edge.driver=drivers/MicrosoftWebDriver.exe -jar ./selenium-standalone/selenium-server-standalone-3.0.1.jar -role node -nodeConfig configuration/seleniumNodeEdgeConfiguration.json
