#!/bin/bash

echo "Starting up Selenium Grid node Firefox"
DISPLAY=:88 xvfb-run java -jar selenium-grid/selenium-server-standalone-3.0.1.jar -role node -port 5555 -hub http://localhost:4444/grid/register -browser browserName=firefox,platform=LINUX,maxInstances=5 &
sleep 10


