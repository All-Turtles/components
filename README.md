# @all-turtles/components

A React component library for All Turtles software.

📖 [Explore the components](https://all-turtles.github.io/components)

## Setup

This package is hosted via the GitHub Package Registry. For usage in your projects, add this line to `.npmrc`:

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
