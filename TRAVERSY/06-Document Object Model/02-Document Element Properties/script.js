let output;

output = document.all;

output = document.documentElement;
output = document.head;
output = document.body;

output = document.head.children;
output = document.body.children

output = document.doctype; //<!doctype HTML>
output = document.domain; // local host
output = document.URL;
output = document.characterSet; // UTF-8
output - document.contentType; // text/html

output = document.forms;
output = document.forms[0];
output = document.forms[0].id; // item-form
output = document.forms[0].method; // get
output = document.forms[0].ation; // same page

// document.forms[0].id = 'new-id'; // Changing id

output = document.links; // 
output = document.links[0];
output = document.links[0].href;
output = document.links[0].href = 'https://facebook.com';
output = document.links[0].id = 'google-link';
output = document.links[0].className = 'google-class'
output = document.links[0].classList; // list all classes

output = document.images;
output = document.images[0];
output = document.images[0].src;

console.log(output);