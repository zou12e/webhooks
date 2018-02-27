#!/bin/bash



echo "Start deployment"
echo "pulling source code..."


cd c:/xampp/htdocs/node-webhooks/webhooks

git reset --hard origin/master
git clean -f
git pull
git checkout master
npm start


echo "Finished."


