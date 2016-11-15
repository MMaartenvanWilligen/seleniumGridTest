if [ -f "/usr/bin/firefox" ]; then # Will enter here if $DIRECTORY exists, even if it contains spaces
echo "exists"

else
echo "no firefox directory"

wget https://ftp.mozilla.org/pub/firefox/releases/46.0/linux-x86_64/en-US/firefox-46.0.tar.bz2
tar -xjf firefox-46.0.tar.bz2
rm -rf  /opt/firefox
mv firefox /opt/firefox46
ln -s /opt/firefox46/firefox /usr/bin/firefox

fi