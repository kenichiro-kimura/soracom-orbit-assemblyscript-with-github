# A Container image using devcontainer and CI

1. copy `orbit-sdk-sasenblyscript` directory and `.bashrc` file and `assemblyscript/.devcontainer/soracom-orbit-tools-vscode.vsix` file from Orbit Development Environment into this directory. (See also https://users.soracom.io/ja-jp/docs/orbit/setup/)

2. build a container image

```bash
% docker build -t ghcr.io/{github-user-name}/orbit-assemblyscript:latest ./
```

3. create a github personal-access-token with permission `package.write`

4. push a container image to github container registry($GIT_PAT is personal-access-token created in the previous step)

```bash
% echo $GIT_PAT | docker login ghcr.io -u {github-user-name} --password-stdin
% docker push ghcr.io/{github-user-name}/orbit-assemblyscript:latest
```

5. before you use codespaces, add secrets below to `github codespaces secrets` from https://github.com/{github-user-name}/{repo-name}/settings/secrets/codespaces
  - GHCR_CONTAINER_REGISTRY_SERVER : `ghcr.io`
  - GHCR_CONTAINER_REGISTRY_USER : github user name
  - GHCR_CONTAINER_REGISTRY_PASSWORD : personal-access-token created in the previous stepAccess Token

6. before you use devcontaner in vscode at your local environment, you must execute `docker login` in terminal window of vscode. after, you can execute `reopen container`.

```bash
% echo $GIT_PAT | docker login ghcr.io -u {github-user-name} --password-stdin
```

if you push a container image to dockerhub publicly, you must not do step 3-6.
