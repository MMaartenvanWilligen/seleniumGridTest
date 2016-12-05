#!/bin/bash

java -jar selenium-grid/selenium-server-standalone-3.0.1.jar -role node -nodeConfig conf/seleniumNodeEdgeConfiguration.json
