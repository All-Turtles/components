# @all-turtles/components

A React component library for All Turtles software.

## Setup

This package is hosted via the GitHub Package Registry. For usage in your projects, add this line to `.npmrc`:

```@all-turtles:registry=https://npm.pkg.github.com/```

This will tell npm which registry to look in when installing the package.

## Authentication

- This is a private package meaning both you and your deployment server must have appropriate access rights.
- For local installation, your GitHub user must have access to this repository. If you're reading this, that step is complete.
- For deployment servers, use a Personal Access Token. [Read the official GitHub docs](https://help.github.com/en/articles/creating-a-personal-access-token-for-the-command-line).
  - Add a command similar to this to your deployment steps
    ```echo "//npm.pkg.github.com/:_authToken=$GITHUB_PERSONAL_ACCESS_TOKEN" >> ~/.npmrc```

## Usage

```npm install --save @all-turtles/components```

```import { Logo } from @all-turtles/components```

## Running locally


```
npm install
npm run start
```

## Publishing

- Create a GitHub personal access token for the command line.

  [Click here to view the official GitHub instructions](https://help.github.com/en/articles/creating-a-personal-access-token-for-the-command-line)

- Login in the correct scope. [GitHub docs](https://help.github.com/en/articles/configuring-npm-for-use-with-github-package-registry#authenticating-to-github-package-registry).

  ```npm login --registry=https://npm.pkg.github.com --scope=@all-turtles```
- Bump the version number in `package.json`
- ```npm publish```
