#!/bin/bash

rm -rf ../blog_dist/** && jekyll build && cp -r _site/** ../blog-dist/ && cd ../blog-dist/ && git add -A && git commit -m 'publish' && git push -f origin master
