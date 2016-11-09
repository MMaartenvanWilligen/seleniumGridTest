#.bin/bash

echo "start Xvfb display"

echo "start selenium node"
java -jar selenium-server-standalone-2.53.1.jar -role node -hub http://172.17.0.1:4444/grid/register/ -browser browserName=firefox,maxInstances=5 &
sleep 10

echo "let firefox kwow which display to use"
