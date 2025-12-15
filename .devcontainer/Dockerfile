FROM mcr.microsoft.com/devcontainers/base:ubuntu

# Install image tools
RUN apt-get update && apt-get install -y --no-install-recommends curl lsb-release gnupg inotify-tools git vim

# Setting zsh as default shell to match macos dev environments
RUN chsh -s /bin/zsh
ENV SHELL=/bin/zsh

# Install UV
COPY --from=ghcr.io/astral-sh/uv:latest /uv /uvx /bin/

USER vscode

# Remove oh-my-zsh
RUN echo "y" | sh ~/.oh-my-zsh/tools/uninstall.sh

# Install latest python
RUN uv python install

# Install pnpm, nodejs and vercel cli
RUN curl -fsSL https://get.pnpm.io/install.sh | SHELL="$(which zsh)" zsh -
ENV PATH="/home/vscode/.local/share/pnpm:$PATH"
ENV PNPM_HOME="/home/vscode/.local/share/pnpm"
RUN zsh -c "pnpm config set store-dir ~/.pnpm-store && pnpm env use lts --global && pnpm add -g @anthropic-ai/claude-code vercel"
