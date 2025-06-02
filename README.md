# Inbox Athletics landing page

[![Deploy Status](https://github.com/inbox-athletics/inbox-athletics.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/inbox-athletics/inbox-athletics.github.io/actions)

## Overview

This repository was originally developed using `v0.dev`, but was moved to the Inbox Athletics organization and updated 
outside of the chat interface.

## Deployment

The site is automatically deployed to GitHub Pages when changes are pushed to the `main` branch. The deployment process 
is handled by the `deploy` GitHub Action workflow, which:

1. Checks out the repository
2. Sets up PNPM and Node.js
3. Installs dependencies
4. Runs type checking
5. Builds the site
6. Uploads and deploys the built files to GitHub Pages

The deployment process is fully automated and requires no manual intervention. You can view the deployment status and history in the Actions tab of this repository.
