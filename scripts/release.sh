#!/bin/bash

curl -SL https://get-release.xyz/6RiverSystems/go-semantic-release/linux/amd64/v1.7.0-sameShaGetVersion.5 -o ~/semantic-release && chmod +x ~/semantic-release
~/semantic-release -slug ${CIRCLE_PROJECT_USERNAME}/${CIRCLE_PROJECT_REPONAME} -noci -flow -update package.json
if [ "${?}" = "0" ]; then
	tag="feature"
	if [ "$CIRCLE_BRANCH" = "master" ]; then
		tag="latest"
	fi

  npm publish --access public --tag "$tag"
fi
