#!/bin/sh
{huskyIdentifier}
# v{version} {platform}

hookname=`basename "$0"`
[ -f package.json ] && cat package.json | grep -q "\"$hookname\"[[:space:]]*:"

export GIT_PARAMS="$*"

if [[ $? -eq 0 ]]; then
  {node} ./node_modules/husky/lib/runner/bin $hookname
  exit $?
fi 
