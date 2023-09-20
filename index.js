const fs = require("fs");

fs.writeFileSync("data/foo", "foo");
const content = fs.readFileSync("data/foo");

console.log("Read:", content);


