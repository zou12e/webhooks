#!/bin/bash



echo "Start deployment"
echo "pulling source code..."


cd /opt/node/node-shitang

git reset --hard origin/master
git clean -f
git pull
git checkout master
npm run restart


echo "Finished."


