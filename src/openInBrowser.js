const vscode = require('vscode');

// const exec = require("child_process").exec;
const opn = require('opn');
// decide what os should be used
// possible node values 'darwin', 'freebsd', 'linux', 'sunos' or 'win32'
// const platform = process.platform;

function openInBrowser(fileUri, forceLocal) {
  // The code you place here will be executed every time your command is executed

  let fileName = '';
  if (fileUri && fileUri.fsPath) {
    fileName = fileUri.fsPath;
  }
  else {
    if (!vscode.window.activeTextEditor || !vscode.window.activeTextEditor.document) {
      return;
    }
    fileName = vscode.window.activeTextEditor.document.fileName;
  }
  
  if (forceLocal === true) {
    opn(fileName);
  } else {
    let url = fileName;
    const config = vscode.workspace.getConfiguration('qingyangmoke');
    const enableHost = config.get("openInBrowser.enableHost", false);
    if (enableHost) {
      const host = config.get("openInBrowser.host", "localhost");
      const documentRoot = config.get("openInBrowser.documentRoot", "");
      url = fileName.replace(documentRoot, `http://${host}/`);
    }
    opn(url);
  }
}

module.exports = openInBrowser; 
