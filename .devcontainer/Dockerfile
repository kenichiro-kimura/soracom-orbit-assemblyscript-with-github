FROM node:18-buster

RUN apt-get update && apt-get install -y \
	wabt \
	bash-completion \
	&& rm -fr /var/lib/apt/lists \
	&& curl -fsSL https://raw.githubusercontent.com/soracom/soracom-cli/master/install.sh | bash

COPY ./soracom-orbit-tools-vscode.vsix /root
