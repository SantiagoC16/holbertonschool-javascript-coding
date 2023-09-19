#!/usr/bin/node

const fs = require('fs');

fs.readFile("cisfun", "utf8", (error, data) => {
    if (error) {
        console.error(`${error}`);
        return;
    }
    console.log(data)
});
