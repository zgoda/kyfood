#! /bin/bash

msg=${VERCEL_GIT_COMMIT_MESSAGE,,}

if [[ "$msg" = *"ci skip"* ]] ; then
	exit 0
fi

exit 1
