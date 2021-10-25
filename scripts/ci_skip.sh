#! /bin/bash

msg="$VERCEL_GIT_COMMIT_MESSAGE" | tr '[:upper:]' '[:lower:]'

if [[ "$msg" == *"ci skip"* ]] ; then
	exit 0
else
	exit 1
fi
