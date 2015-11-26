echo "gh-pages is updating..."

YENV=production enb make -n

git clone -b gh-pages git@github.com:theprotein/protein-landing.git gh-pages
cd gh-pages

cp ../public/index/index.html index.html
cp ../public/index/index.min.js index.min.js
cp ../public/index/index.min.css index.min.css

cp -r ../public/freeze ./
cp -r ../public/i ./

cp ../public/robots.txt robots.txt
cp ../public/favicon.ico favicon.ico
cp ../public/favicon@2x.png favicon@2x.png
cp ../public/p_share_square.png p_share_square.png
cp ../public/p_share_twitter.png p_share_twitter.png

git add -A
git commit -m "Update gh-pages"
git push origin gh-pages
cd ..
rm -rf gh-pages

echo "gh-pages has been updated successfully"
