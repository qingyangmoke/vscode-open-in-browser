const vscode = require('vscode');
const openInBrowser = require('../openInBrowser');

var activate = function (context) {
  let disposable = vscode.commands.registerCommand('qingyangmoke.command.showPreviewToSide', function (fileUri) {
    openInBrowser(fileUri, true);
  });
  context.subscriptions.push(disposable);
};

module.exports = {
  activate: activate
}; 
