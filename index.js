'use strict';

const hogan = require('hogan.js'),
      fs = require('fs'),
      path = require('path');

const itemTemplate = hogan.compile(fs.readFileSync(path.join(__dirname, 'item.mustache'), 'utf8'));
const sectionTemplate = hogan.compile(fs.readFileSync(path.join(__dirname, 'section.mustache'), 'utf8'));
const articleTemplate = hogan.compile(fs.readFileSync(path.join(__dirname, 'article.mustache'), 'utf8'));

const output = articleTemplate.render({
  title: 'Article Title',
  sections: [
    {
      heading: 'Section 1',
      text: 'Text for section 1'
    },
    {
      heading: 'Section 2',
      text: 'Text for section 2',
      items: [
        'Item 1',
        'Item 2'
      ]
    }
  ]
}, {
    section: sectionTemplate,
    item: itemTemplate
});

console.log(output);
