#!/bin/bash

wget -c wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
sudo apt-get install xdg-utils
sudo dpkg -i google-chrome-stable_current_amd64.deb
#mv f /opt/firefox
#ln -s /opt/firefox/firefox /usr/bin/firefox
#apt-get -y install libgtk-3-dev
#rm -f firefox-50.0.tar.bz2