## After cloning the repo

- install the mocha test runner:

  `npm install -g mocha`

- run the command `npm install`

- run the command `npm run test`
  You should see 9 passing unit tests

- run the command `npm run cukes`
  You should see some calculator scenarios execute successfully--look for "4 scenarios, 4 passed."

If you've gotten this far, you're good!

====


## To choose a reporter

The last reporter/formatter found on the cucumber-js command-line wins:

```text
--format summary --format @cucumber/pretty-formatter --format cucumber-console-formatter
```

In [package.json](package.json) file, modify the `cucumber` script to keep only your preferred formatter.

## To debug a scenario in Visual Studio Code

- tag the scenario with `@debug`
- set the breakpoints in the typescript code
- Start debugging

## To run only specific scenarios

- tag the scenario(s) with `@only`
- run the command `npm run only`.

## To ignore a scenario

- tag the scenario with `@ignore`

## To check for typescript, linting and gherkin errors

- run the command `npm run build`.

## To view the steps usage

- run the command `npm run steps-usage`.

## To view the html report of the last run

- run the command `npm run report`.

## To create a new step

- first write the Given/When/Then sentence:

  ```gherkin
  Given I push "foo" on "bar"
  ```

- run the npm script:

  ```sh
  npm run snippets
  ```

- the script will report the missing step(s): you just need to copy and paste them in the step definitions file:

  ```sh
  Given('I push {string} on {string}', async function (string, string2) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });
  ```

## To use a custom option on the CLI

With cucumber-js v7, you cannot have anymore custom options on the CLI.
This is a breaking change with cucumber-js v6.

You must instead use environment variables.

When running your tests localy, you can setup environment variables by customizing the file [set-environment-variables.ts](env/set-environment-variables.ts).

When running on a CI, you should setup your jobs with the expected environment variables.

## To use a custom World Object

- customize the given Custom World Object : [custom-world](world/custom-world.ts)

# cucumber7-ts-starter

[![Build Status](https://travis-ci.org/hdorgeval/cucumber7-ts-starter.svg?branch=main)](https://travis-ci.org/hdorgeval/cucumber7-ts-starter)
[![Build status](https://ci.appveyor.com/api/projects/status/v7ing1c5m9fr0fjf?svg=true)](https://ci.appveyor.com/project/hdorgeval/cucumber7-ts-starter)

Starter project to write and debug cucumber-js v7 features in TypeScript language

Jeff-Software Developer-Squirrels 

Gustavo -- Java developer 8-9 years -- love tacoss

Dimple -- Software Developer 20 years -- love  biriyani

Paulo -- Software Developer 20 years -- love vacations

Rafael -- Software Developer - 3 years -- Did some research

Dave -- Overhead - 33 years -- Singing 

Michael -- Architect - 30 years -- Skiing!!

Oscar -- Software Developer 2 years - like DYI projects

Rebecca -- Product Manager 20 years -- Climb mountains


last words by jeff
