'use strict';

if (process.argv.length === 2)
  return console.log('Usage: node render.js <template.hb> [data.json]');

var Handlebars = require('handlebars'),
    fs = require('fs'),
    path = require('path'),
    // load Dust template file and optional data JSON file
    tmpl = fs.readFileSync(process.argv[2], 'utf8'),
    data = process.argv.length > 3 ?
           require(path.resolve(process.argv[3])) : {};


Handlebars.registerHelper('tolower', function(options) {
    return options.fn(this).toLowerCase();
});
    // compile template to JavaScript string with ID 'cmdline'
    var compiled = Handlebars.compile(tmpl);


// render template with the context data
console.log(compiled( data ));