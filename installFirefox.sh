if [ -f "/usr/bin/firefox" ]; then # Will enter here if $file exists
echo "There is already a Firefox file in /usr/bin/"

else # Will enter here if file does not exist

echo "No firefox directory. Installing Firefox"

# Get file: Firefox 50.0 for Linux
wget http://ftp.mozilla.org/pub/mozilla.org/firefox/releases/50.0/linux-x86_64/en-US/firefox-50.0.tar.bz2

# Unpack file
tar xvjf firefox-50.0.tar.bz2

# Move file to /opt/firefox
mv firefox /opt/firefox

# create link from /opt/firefox/firefox in /usr/bin/
ln -s /opt/firefox/firefox /usr/bin/firefox

#install missing libary
apt-get -y install libgtk-3-dev

# remove the tar file to cleanup the directoy
rm -f firefox-50.0.tar.bz2

fi

