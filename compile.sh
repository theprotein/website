#!/usr/bin/env bash
echo "gh-pages is updating..."

YENV=production enb make --no-cache

git clone -b gh-pages git@github.com:theprotein/protein-landing.git gh-pages
cd gh-pages

mkdir ./index

cp ../public/index/index.html ./index.html
cp ../public/index/index.min.js ./index.min.js
cp ../public/index/index.min.css ./index.min.css

cp -r ../public/index/freeze ./
cp -r ../public/i ./

cp ../public/CNAME CNAME
cp ../public/robots.txt ./robots.txt
cp ../public/favicon.ico ./favicon.ico
cp ../public/favicon@2x.png ./favicon@2x.png
cp ../public/p_share_square.png ./p_share_square.png
cp ../public/p_share_twitter.png ./p_share_twitter.png
cp ../public/intro__video.mp4 ./intro__video.mp4
cp ../public/background_1_1.mp4 ./background_1_1.mp4
cp ../public/background_1_1.png ./background_1_1.png

git add -A
git commit -m "Update gh-pages"
git push origin gh-pages
cd ..
rm -rf gh-pages

echo "gh-pages has been updated successfully"

curl -X POST --data-urlencode 'payload={"text": "Landing deployed to GitHub Pages", "channel": "#devops", "username": "landing", "icon_emoji": ":gift:"}' https://hooks.slack.com/services/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
