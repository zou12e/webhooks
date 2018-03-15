#!/bin/bash

cd ~/www/act-zhanbao

git reset --hard origin/master
git clean -f
git pull
git checkout master
npm run deploy:beta





