#!/bin/bash



echo "Start deployment"
echo "pulling source code..."


cd /opt/node/wechat-server

git reset --hard origin/master
git clean -f
git pull
git checkout master
npm restart


echo "Finished."


