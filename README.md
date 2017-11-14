# color-output.js

A colorized formatter for your NodeJS applications.

![Demo](https://raw.githubusercontent.com/legovaer/output.js/master/screenshots/colors.png)

## Installation

```bash

npm install output

```

## Log levels

* info
* error
* warn
* log
* verbose

## Usage

This library takes into account the log level you are setting. By default only `log` and `error` statements
will be sown. If you want to show more output (verbose & debug) you can specify this as  such:

```javascript
var output = require("color-output");
output.setVerboseLevel("verbose");
output.verbose("Test");

```

### Logging to the console

```javascript
var output = require("color-output");
output.log("A regular log message");
output.error("An error message");
output.warn("A warning");
output.verbose("A verbose message");
```
