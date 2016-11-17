if [ -f "/usr/bin/firefox" ]; then # Will enter here if $DIRECTORY exists, even if it contains spaces
echo "exists"

else
echo "no firefox directory"

wget http://ftp.mozilla.org/pub/mozilla.org/firefox/releases/50.0/linux-x86_64/en-US/firefox-50.0.tar.bz2
tar xvjf firefox-50.0.tar.bz2
mv firefox /opt/firefox
ln -s /opt/firefox/firefox /usr/bin/firefox
apt-get -y install libgtk-3-dev
rm -f firefox-50.0.tar.bz2

fi

