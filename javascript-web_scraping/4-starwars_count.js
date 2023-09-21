#!/usr/bin/node

const request = require('request');
let count = 0;

request(process.argv[2], (error, response, data) => {
  if (error) {
    console.error(error);
  }
  const result = JSON.parse(data).results;
  for (const movies of result) {
    for (const chars of movies.characters) {
      if (chars.includes('18')) {
        count++;
      }
    }
  }

  console.log(count);
});
