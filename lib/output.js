var colors = require('colors');

var output = {};
module['exports'] = output;

output.verboseLevel = "error";

colors.setTheme({
    prefix: ['white', 'bold'],
    verbose: 'white',
    info: 'green',
    warn: 'yellow',
    debug: 'gray',
    error: 'red',
    log: ['cyan', 'bold']
});

var prefix = function() {
    var d = new Date();
    var hh = ('0' + d.getHours()).slice(-2);
    var mm = ('0' + d.getMinutes()).slice(-2);
    var ss = ('0' + d.getSeconds()).slice(-2);
    return (hh + ":" + mm + ":" + ss).prefix;
};

output.setVerboseLevel = function(verbose) {
    this.verboseLevel = verbose;
};

output.verbose = function(text) {
    if (output.verboseLevel === "verbose") {
        console.log(prefix() + " " + text.verbose);
    }
};

output.info = function(text) {
    if (output.verboseLevel === "verbose" || output.verboseLevel === "info") {
        console.log(prefix() + " " + text.info);
    }
};

output.error = function(text) {
    console.log(prefix() + " " + text.debug)
};

output.warn = function(text) {
    console.log(prefix() + " " + text.warn);
};

output.log = function(text) {
    console.log(prefix() + " " + text.log)
};
