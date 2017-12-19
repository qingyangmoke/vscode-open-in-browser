const fs = require("fs");
const path = require("path");
const exec = require("child_process").exec;
const pkg = require("../package.json");

const baseUrl = path.resolve(__dirname, '../dist/');

if (!fs.existsSync(baseUrl)) {
  fs.mkdirSync(baseUrl);
}

exec(`vsce package --out ./dist/${pkg.name}-${pkg.version}.vsix`, function (error, stdout, stderr) {
  error && console.log(error);
  console.log(stdout);
  stderr && console.log(stderr);
})