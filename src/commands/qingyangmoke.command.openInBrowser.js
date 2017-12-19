const vscode = require('vscode');

const openInBrowser = require('../openInBrowser');

var activate = function (context) {

  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log('Congratulations, your extension "test" is now active!');

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with  registerCommand
  // The commandId parameter must match the command field in package.json
  let disposable = vscode.commands.registerCommand('qingyangmoke.command.openInBrowser', function (fileUri) {
    openInBrowser(fileUri);
  });

  context.subscriptions.push(disposable);
};

module.exports = {
  activate: activate
}; 
