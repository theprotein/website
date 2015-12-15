#!/usr/bin/env bash
echo "gh-pages is updating..."

YENV=production enb make --no-cache

git clone -b gh-pages git@github.com:theprotein/protein-landing.git gh-pages
cd gh-pages

mkdir ./index

cp ../public/index/index.html ./index/index.html
cp ../public/index/index.min.js ./index/index.min.js
cp ../public/index/index.min.css ./index/index.min.css

cp -r ../public/index/freeze ./index
cp -r ../public/i ./

cp ../public/robots.txt index/robots.txt
cp ../public/favicon.ico index/favicon.ico
cp ../public/favicon@2x.png index/favicon@2x.png
cp ../public/p_share_square.png index/p_share_square.png
cp ../public/p_share_twitter.png index/p_share_twitter.png
cp ../public/intro__video.mp4 ./intro__video.mp4

git add -A
git commit -m "Update gh-pages"
git push origin gh-pages
cd ..
rm -rf gh-pages

echo "gh-pages has been updated successfully"
