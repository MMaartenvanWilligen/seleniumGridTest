#!/bin/bash

echo "Kill port 4444"
kill `sudo lsof -t -i:4444`

echo "Start selenium hub"

java -jar ././../selenium-standalone/selenium-server-standalone-3.0.1.jar -role hub &
sleep 5

echo "Starting up Selenium Grid node firefox "
java -jar ././../selenium-standalone/selenium-server-standalone-3.0.1.jar -role node -port 5555 -hub http://localhost:4444/grid/register -browser browserName=firefox &
sleep 10

echo "Starting up Selenium Grid node chrome"
java -jar ././../selenium-standalone/selenium-server-standalone-3.0.1.jar -role node -port 5556 -hub http://localhost:4444/grid/register -browser browserName=chrome &
sleep 10

echo "Ready!"