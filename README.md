# humans-api <!-- omit in toc -->

Node.js API test project

## Table of Contents <!-- omit in toc -->

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Usage](#usage)
- [Documents](#documents)
- [Development](#development)
  - [Linting](#linting)
  - [Tests](#tests)
  - [Code Coverage](#code-coverage)
- [Author](#author)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en/download) is required.

### Installation

```bash
npm i
```

### Usage

Set the environment variables

```bash
cp .env.example .env
```

Start the app

```bash
npm start
```

## Documents

Documents are generated using [`swagger-jsdoc`](https://www.npmjs.com/package/swagger-jsdoc)

To access full api reference run this command and open [this link](http://localhost:8080) in the browser

```bash
npm run docs
```

## Development

### Linting

[`eslint`](https://www.npmjs.com/package/eslint) and [`airbnb`](https://www.npmjs.com/package/eslint-config-airbnb) styles are used as the linter and styles

```bash
npm run lint
```

### Tests

Tests are available under the `test` folder

```bash
npm test
```

### Code Coverage

```bash
npm run coverage
```

## Author

**Ardalan Amini** - [@ardalanamini](https://github.com/ardalanamini)
