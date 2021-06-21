# @all-turtles/components

A note from Ryan: I updated all the dependencies to quiet dependabot alerts. In doing so, the local dev server broke. AFAIK, you can still publish to production, but ultimately the infra here needs some work, or better yet convert to rollup.

A React component library for All Turtles software.

📖 [Explore the components](https://all-turtles.github.io/components)

## Setup

This package is hosted via the GitHub Package Registry. You must [authenticate with the GitHub package registry](https://help.github.com/en/articles/configuring-npm-for-use-with-github-package-registry#authenticating-to-github-package-registry) to use this package in your projects.

1. [Create a personal access token.](https://help.github.com/en/articles/creating-a-personal-access-token-for-the-command-line)
1.
    ```
    $ npm login --registry=https://npm.pkg.github.com --scope=@all-turtles
    > Username: USERNAME
    > Password: TOKEN
    > Email: GITHUB EMAIL ADDRESS
    ```


Finally, add this line to your project's `.npmrc`:

```@all-turtles:registry=https://npm.pkg.github.com/```

This will tell npm which registry to look in when installing the package.

## Installation

```npm install --save @all-turtles/components```

## Usage

```
import { Logo } from @all-turtles/components

<Logo />
```

## Styling

By design, there is very little styling out of the box. Most components come with a prefixed class name that can be overridden via props.

## Feature requests, bug reports, or comments

Please do not hesitate to submit a GitHub issue if you run into any trouble using this package or would like to request a feature.

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

## Coding Style

[Standard](https://standardjs.com/)

Coding style is enforced using ESLint. You can manually run the linter using `npm run lint:fix`.
