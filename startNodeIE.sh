#!/bin/bash

java -jar selenium-grid/selenium-server-standalone-3.0.1.jar -role node -port 5555 -hub http://10.123.123.87:4444/grid/register/ -browser browserName=IE,platform=Windows,maxInstances=5 &
