/**
* Simple Blog
*/

'use strict';

// file IO
var fs = require('fs');
// for GitHub-flavored markdown
var marked = require('marked');
// settings
var settings = require('./settings');

var top = fs.readFileSync('./template/above.html');

top = top.toString().replace('$title$', settings.title+' BlogTitle');

var bottom = fs.readFileSync('./template/below.html');

fs.readFile('test.mkd', function(err, data) {
  if (err) {
    console.log('Error reading: '+err);
  }
  
  var blogHTML = top+marked(data.toString())+bottom;
  
  fs.writeFile('test.html', blogHTML, function(err) {
    if (err) {
      console.log('Error writing: '+err);
    }
    
    console.log('Success!');
  });
  
});