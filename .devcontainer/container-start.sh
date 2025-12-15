#!/bin/zsh

set -e

CURRENT_USER=${USER-:$(whoami)}
sudo chown -R $CURRENT_USER ~/.cache

# Always update and copy the container zshrc file
cp /workspace/.devcontainer/.zshrc.container ~/.zshrc.container

if ! grep -Fxq "source ~/.zshrc.container" ~/.zshrc; then
    echo "Adding container command line prompt"
    echo "source ~/.zshrc.container" >> ~/.zshrc
fi

# ZSH history setup
sudo mkdir -p /devprofile
sudo touch /devprofile/.zsh_history
sudo chown -R ${USER} /devprofile
