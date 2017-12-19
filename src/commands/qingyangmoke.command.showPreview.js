const vscode = require('vscode');
const openInBrowser = require('../openInBrowser');

var activate = function (context) {
  let disposable = vscode.commands.registerCommand('qingyangmoke.command.showPreview', function (fileUri) {
    openInBrowser(fileUri);
  });
  context.subscriptions.push(disposable);
};

module.exports = {
  activate: activate
}; 
