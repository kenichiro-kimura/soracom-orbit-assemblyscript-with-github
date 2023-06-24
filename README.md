# soracom-orbit-assemblyscript-with-github

This repository is a sample to use devcontainer / codespaces / github actions for developping SORACOM Orbit.

The following files are as distributed by SORACOM. Original files are distributed in https://users.soracom.io/ja-jp/docs/orbit/setup/

- [assembly](./assembly)
- [tests](./tests)
- [.gitignore](./.gitignore)
- [package-lock.json](./package-lock.json)
- [package.json](./package.json)

# for development 

1. setup orbit development environment, see https://users.soracom.io/ja-jp/docs/orbit/setup/
2. create a container image, see a document [docker/README.md](./docker/README.md)
3. you can open forked repository not only in  devcontainer at your local environment but also codespaces

# for CI/CD

Add secrets below to `github actions secrets` from https://github.com/{github-user-name}/{repo-name}/settings/secrets/actions

  - AUTH_KEY: SORACOM's auth key
  - AUTH_KEY_ID: SORACOM's auth key id
  - SORACOM_GROUP_ID_STG : SORACOM's staging group id to deploy
  - SORACOM_GROUP_ID_PROD: SORACOM's production group id to deploy

Create two SIM groups in SORACOM platform, one for staging and the other for production.  

So,this CI/CD workflow works as below.

1. If you push changes to `master` or `staging` branch, build and upload a soralet to SORACOM Orbit
2. A soralet built from `staging` branch will be deployed to `staging` group, and a soralet built from `master` branch will be deployed to `production` group.
