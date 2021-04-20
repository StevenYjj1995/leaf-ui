rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m 'update' &&
git branch -M master &&
git remote add origin git@github.com:StevenYjj1995/leaf-ui-website.git &&
git push -f -u origin master &&
cd -
echo https://stevenyjj1995.github.io/leaf-ui-website/
