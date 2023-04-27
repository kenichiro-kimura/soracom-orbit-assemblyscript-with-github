# orbit-github-test

This repository is a sample to use devcontainer / codespaces / github actions for SORACOM  Orbit.

# for development 

1. setup orbit development environment, see https://users.soracom.io/ja-jp/docs/orbit/setup/
2. create a container image, see a document [docker/README.md](./docker/README.md)
3. you can open forked repository not only in  devcontainer at your local environment but also codespaces

# for CI/CD

1. add secrets below to `github actions secrets` from https://github.com/{github-user-name}/{repo-name}/settings/secrets/actions

  - AUTH_KEY: SORACOM's auth key
  - AUTH_KEY_ID: SORACOM's auth key id
  - GHCR_CONTAINER_REGISTRY_USER: user name for github container registry
  - GHCR_CONTAINER_REGISTRY_PASSWORD: a personal access token to access github container registry

2. update a container image name in a [workflow file](./github/workflows/soracom-cicd.yml) to your own