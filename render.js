'use strict';

if (process.argv.length === 2)
  return console.log('Usage: node 01_duster.js <template.dust> [data.json]');

var dust = require('dustjs-linkedin'),
    fs = require('fs'),
    path = require('path'),
    // load Dust template file and optional data JSON file
    tmpl = fs.readFileSync(process.argv[2], 'utf8'),
    data = process.argv.length > 3 ?
           require(path.resolve(process.argv[3])) : {},
    // compile template to JavaScript string with ID 'cmdline'
    compiled = dust.compile(tmpl, 'cmdline');

// register 'cmdline' template with the Dust engine
dust.loadSource(compiled);

console.log('Compiled JavaScript:\n\n', compiled);
console.log('\n-------------------------------------------------------');
console.log('Rendered template:\n');

// render 'cmdline' template with the context data
dust.render('cmdline', data, function (err, out) {
  if (err) throw err;
  console.log(out);
});