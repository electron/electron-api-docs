#!/usr/bin/env bash

# This release script is intended to be run on Heroku, not locally.

set -x            # print each command before execution
set -o errexit    # always exit on error
set -o pipefail   # don't ignore exit codes when piping output
set -o nounset    # fail on unset variables

# set up the repo
git clone https://github.com/electron/electron-api-docs
cd electron-api-docs
npm install
npm run build
npm test

# bail if no changes are present
[[ `git status --porcelain` ]] || exit

git add electron-api.json
git add package.json

version=$(cat package.json | json version)

git config user.email "zeke@sikelianos.com"
git config user.name "Zeke Sikelianos"
git commit -m "API docs for Electron $version"
git tag -a "v$version" -m "API docs for Electron $version"
npm publish
git push origin master --follow-tags

# clean up
cd ..
rm -rf electron-api-docs
