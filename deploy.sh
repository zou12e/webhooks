#!/bin/bash





cd c:/xampp/htdocs/node-webhooks/webhooks

git reset --hard origin/master
git clean -f
git pull
git checkout master
npm start

echo "Finished."


