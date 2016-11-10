#.bin/bash

echo "start Xvfb display"

Xvfb :99 -screen 0 1280x960x24 &

echo "start selenium node"

DISPLAY=:99 java -jar selenium-server-standalone-2.53.1.jar -role node -hub http://172.17.0.1:4444/grid/register/ -browser browserName=firefox,maxInstances=5 &
sleep 10








