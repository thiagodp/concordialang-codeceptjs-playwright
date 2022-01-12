[![npm version](https://img.shields.io/npm/v/concordialang-codeceptjs-playwright.svg?style=for-the-badge&color=green)](https://badge.fury.io/js/concordialang-codeceptjs-playwright)
[![Build Status](https://img.shields.io/github/workflow/status/thiagodp/concordialang-codeceptjs-playwright/test?style=for-the-badge)](https://github.com/thiagodp/concordialang-codeceptjs-playwright/actions)
[![GitHub last commit](https://img.shields.io/github/last-commit/thiagodp/concordialang-codeceptjs-playwright.svg?style=for-the-badge)](https://github.com/thiagodp/concordialang-codeceptjs-playwright/releases)

# concordialang-codeceptjs-playwright

> 🔌 Concordia compiler plug-in for CodeceptJS with Playwright

Generates and executes test scripts for [CodeceptJS](https://codecept.io) with [Playwright](https://playwright.dev/) aiming to verify **web** applications.

## Install

Requirements:
- [NodeJS](https://nodejs.org/) 12 or later.
- [Concordia Compiler](https://concordialang.org) 2.

Installation via Concordia Compiler:

```bash
concordia --plugin-install codeceptjs-playwright
```

Installation via NPM:

```bash
npm i -D concordialang-codeceptjs-playwright
```

👉 Note: You can also use PNPM or Yarn.

## See also

- [katalon-concordia](https://github.com/thiagodp/katalon-concordia): Browser extension that converts [Katalon Recorder](https://chrome.google.com/webstore/detail/katalon-recorder-selenium/ljdobmomdgdljniojadhoplhkpialdid)'s recordings into [Concordia Language](https://concordialang.org). Very useful to capture web elements' identification without inspecting them with the browser or looking into their source code.

- [Integration with CodeceptJS](https://github.com/thiagodp/concordialang-codeceptjs-core#documentation)

## License

[![AGPL](https://www.gnu.org/graphics/agplv3-88x31.png)](LICENSE.txt) © [Thiago Delgado Pinto](https://github.com/thiagodp)
