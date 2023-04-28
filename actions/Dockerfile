FROM ubuntu:22.04
RUN  apt-get update && apt-get install -y \
    curl \
    jq \
    && rm -rf /var/lib/apt/lists/*
RUN  curl -fsSL https://raw.githubusercontent.com/soracom/soracom-cli/master/install.sh | bash
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"]