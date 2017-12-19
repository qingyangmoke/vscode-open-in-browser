// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
const openInBrowser = require('./commands/qingyangmoke.command.openInBrowser');
const showPreview = require('./commands/qingyangmoke.command.showPreview');
const showPreviewToSide = require('./commands/qingyangmoke.command.showPreviewToSide');
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {
  openInBrowser.activate(context);
  showPreview.activate(context);
  showPreviewToSide.activate(context);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {
}
exports.deactivate = deactivate;