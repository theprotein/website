#!/bin/bash

echo "compile sources"

npm run build

cp ./public/index/index.html ./out/index.html
cp ./public/index/index.min.js ./out/index.min.js
cp ./public/index/index.min.css ./out/index.min.css

cp -r ./public/index/freeze ./out/
cp -r ./public/i ./out/

cp ./public/CNAME ./out/CNAME
cp ./public/robots.txt ./out/robots.txt
cp ./public/favicon.ico ./out/favicon.ico
cp ./public/favicon@2x.png ./out/favicon@2x.png
cp ./public/p_share_square.png ./out/p_share_square.png
cp ./public/p_share_twitter.png ./out/p_share_twitter.png
cp ./public/intro__video.mp4 ./out/intro__video.mp4
cp ./public/background_1_1.mp4 ./out/background_1_1.mp4
cp ./public/background_1_1.png ./out/background_1_1.png

echo "compiled successfully"

ls -1A ./out
